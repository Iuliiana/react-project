import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewsIcon from '@/shared/assets/icons/view.svg';
import { ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { getRouteArticlesDetails } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockType } from '../../model/consts/articleBlockTypeConst';
import { ArticleView } from '../../model/consts/articleViewConst';
import {
    Article, ArticleBlocksText,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
    target?: string,
    index?: number,
}

export const ArticleListItem = memo((props: ArticleItemProps) => {
    const {
        className, article, view, target, index,
    } = props;
    const { t } = useTranslation();

    const onSaveIndex = (index?: number) => () => {
        if (index) {
            localStorage.setItem(ARTICLE_SCROLL_TO_INDEX_LOCALSTORAGE_KEY, String(index));
        }
    };

    if (view === ArticleView.LIST) {
        const block = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleBlocksText;
        return (
            <Card className={classNames(cls.ArticleItem, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <div className={cls.headerInfo}>
                        <div className={cls.headerInfoUser}>
                            <Avatar
                                pic={article.user.avatar}
                                alt={article.user.username}
                                className={cls.headerInfoUserAvatar}
                                size={32}
                            />
                            <Text text={article.user.username} className={cls.headerInfoUserUsername} />
                        </div>
                        <Text text={article.createdAt} className={cls.headerInfoDate} />
                    </div>
                    <Text title={article.title} className={cls.headerTitle} />
                    <Text text={article.type.join(', ')} className={cls.headerTypes} />
                </div>

                <div className={cls.mainImg}>
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        isLoadingFallback={(
                            <Skeleton width="100%" height={250} />
                        )}
                    />
                </div>

                { block && <ArticleTextBlockComponent block={block} className={cls.blockText} /> }

                <div className={cls.footer}>
                    <AppLink
                        to={getRouteArticlesDetails(article.id)}
                        target={target}
                        theme={AppLinkTheme.NORMAL}
                        onClick={onSaveIndex(index)}
                    >
                        {t('Читать далее...')}
                    </AppLink>
                    <div className={cls.view}>
                        <span>{article.views}</span>
                        <Icon Svg={ViewsIcon} />
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <div className={classNames(cls.ArticleItem)}>
            <AppLink
                to={getRouteArticlesDetails(article.id)}
                target={target}
                onClick={onSaveIndex(index)}
                className={classNames('', {}, [cls[view]])}
            >
                <Card>
                    <div className={cls.img}>
                        <AppImage
                            className={cls.imgPic}
                            alt={article.title}
                            src={article.img}
                            isLoadingFallback={(
                                <Skeleton
                                    width={300}
                                    height={24}
                                />
                            )}
                        />
                        <Text text={article.createdAt} className={cls.imgDate} />
                    </div>
                    <div className={cls.content}>
                        <div className={cls.heading}>
                            <Text text={article.type.join(', ')} className={cls.headingTypes} />
                            <div className={cls.view}>
                                <span>{article.views}</span>
                                <Icon Svg={ViewsIcon} />
                            </div>
                        </div>
                        <Text title={article.title} className={cls.text} />
                    </div>
                </Card>
            </AppLink>
        </div>

    );
});
