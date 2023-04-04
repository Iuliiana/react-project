import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import ViewsIcon from 'shared/assets/icons/view.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { ArticleCodeBlockComponent } from '../../ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleTextBlockComponent } from '../../ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from '../../ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleBlock, ArticleBlocksType } from '../../model/types/article';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticlesDetailsData';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string,
    id: string
}

const asyncReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetailsData(id));
        }
    }, [dispatch, id]);

    const renderBlocks = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlocksType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlocksType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlocksType.IMAGE:
            return (
                <ArticleImageBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton width="200px" height="200px" radius="50%" className={cls.avatar} />
                <Skeleton width={300} height={32} className={cls.mBottom2Rem} />
                <Skeleton width={600} height={24} className={cls.mBottom2Rem} />
                <Skeleton width="100px" height={20} className={cls.articleInfo} />
                <Skeleton width="100px" height={20} className={cls.mBottom2Rem} />
                <Skeleton width="100%" height={200} className={cls.mBottom2Rem} />
                <Skeleton width="100%" height={200} className={cls.mBottom2Rem} />
                <Skeleton width="100%" height={200} className={cls.mBottom2Rem} />
            </>
        );
    } else if (error) {
        content = <Text title={t('Произошла ошибка при загрузке статьи')} align={TextAlign.CENTER} />;
    } else {
        content = (
            <>
                <Avatar pic={data?.img} size={200} className={cls.avatar} />
                <Text title={data?.title} align={TextAlign.LEFT} size={TextSize.L} />
                <Text title={data?.subtitle} align={TextAlign.LEFT} size={TextSize.M} />
                <div className={cls.articleInfo}>
                    <Icon Svg={ViewsIcon} className={cls.icon} />
                    <Text className={cls.iconTitle} text={String(data?.views)} size={TextSize.M} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text className={cls.iconTitle} text={data?.createdAt} size={TextSize.M} />
                </div>
                {data?.blocks.map(renderBlocks)}
            </>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>

    );
});
