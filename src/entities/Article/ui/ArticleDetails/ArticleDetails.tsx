import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import ViewsIcon from '@/shared/assets/icons/view.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import cls from './ArticleDetails.module.scss';
import { ArticleBlockType } from '../../model/consts/articleBlockTypeConst';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticlesDetailsData';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
    ArticleImageBlockComponent,
} from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
        case ArticleBlockType.CODE:
            return (
                <ArticleCodeBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.TEXT:
            return (
                <ArticleTextBlockComponent
                    block={block}
                    key={block.id}
                    className={cls.block}
                />
            );
        case ArticleBlockType.IMAGE:
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
            </>
        );
    } else if (error) {
        content = <Text title={t('Произошла ошибка при загрузке статьи')} align={TextAlign.CENTER} />;
    } else {
        content = (
            <>
                <Avatar pic={data?.img} size={200} className={cls.avatar} />
                <Text
                    title={data?.title}
                    align={TextAlign.LEFT}
                    size={TextSize.L}
                    data-testid="ArticleDetails.Title"
                />
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
