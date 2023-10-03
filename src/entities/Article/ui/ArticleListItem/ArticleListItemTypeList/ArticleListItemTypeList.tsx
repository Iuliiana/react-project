import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewsIcon from '@/shared/assets/icons/view.svg';
import { getRouteArticlesDetails } from '@/shared/const/route';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import cls from './ArticleListItemTypeList.module.scss';
import { ArticleBlockType } from '../../../model/consts/articleBlockTypeConst';
import { ArticleBlocksText } from '../../../model/types/article';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleItemProps } from '../ArticleListItem';

interface ArticleListItemTypeListProps extends ArticleItemProps {
    onSaveIndex?: (index?: number) => void;
}

export const ArticleListItemTypeList = memo(
    (props: ArticleListItemTypeListProps) => {
        const { target, index, onSaveIndex, article } = props;
        const { t } = useTranslation();
        const onSaveIndexHandler = () => {
            onSaveIndex?.(index);
        };

        const block = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlocksText;

        return (
            <Card
                data-testid="ArticleItem"
                className={cls.ArticleListItemTypeList}
            >
                <div className={cls.header}>
                    <div className={cls.headerInfo}>
                        <div className={cls.headerInfoUser}>
                            <Avatar
                                pic={article.user.avatar}
                                alt={article.user.username}
                                className={cls.headerInfoUserAvatar}
                                size={32}
                            />
                            <Text
                                text={article.user.username}
                                className={cls.headerInfoUserUsername}
                            />
                        </div>
                        <Text
                            text={article.createdAt}
                            className={cls.headerInfoDate}
                        />
                    </div>
                    <Text title={article.title} className={cls.headerTitle} />
                    <Text
                        text={article.type.join(', ')}
                        className={cls.headerTypes}
                    />
                </div>

                <div className={cls.mainImg}>
                    <AppImage
                        alt={article.title}
                        src={article.img}
                        isLoadingFallback={
                            <Skeleton width="100%" height="12.5rem" />
                        }
                        errorFallback={
                            <Skeleton
                                width="100%"
                                height="12.5rem"
                                isAnimated={false}
                            />
                        }
                    />
                </div>

                {block && (
                    <ArticleTextBlockComponent
                        block={block}
                        className={cls.blockText}
                    />
                )}

                <div className={cls.footer}>
                    <AppLink
                        to={getRouteArticlesDetails(article.id)}
                        target={target}
                        theme={AppLinkTheme.NORMAL}
                        onClick={onSaveIndexHandler}
                    >
                        {t('Читать далее...')}
                    </AppLink>
                    <div className={cls.view}>
                        <span data-testid="ArticleListItem.views">
                            {article.views}
                        </span>
                        <Icon Svg={ViewsIcon} />
                    </div>
                </div>
            </Card>
        );
    },
);
