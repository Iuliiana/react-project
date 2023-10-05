import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ViewsIcon from '@/shared/assets/icons/new/View-new.svg';
import { getRouteArticlesDetails } from '@/shared/const/route';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleBlockType } from '../../../model/consts/articleBlockTypeConst';
import { ArticleView } from '../../../model/consts/articleViewConst';
import { ArticleBlocksText } from '../../../model/types/article';
import { ArticleItemProps } from '../ArticleListItem';

interface ArticleListItemRedesignedProps extends ArticleItemProps {
    onSaveIndex?: (index?: number) => void;
}

export const ArticleListItemRedesigned = memo(
    (props: ArticleListItemRedesignedProps) => {
        const { view, target, index, onSaveIndex, article } = props;
        const { t } = useTranslation();
        const onSaveIndexHandler = () => {
            onSaveIndex?.(index);
        };

        const views = (
            <HStack align="center" gap="8">
                <Icon Svg={ViewsIcon} />
                <span data-testid="ArticleListItem.views">{article.views}</span>
            </HStack>
        );

        const block = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlocksText;

        if (view === ArticleView.LIST) {
            return (
                <Card
                    data-testid="ArticleItem"
                    className={cls.ArticleListItemTypeList}
                    variant="dark"
                >
                    <VStack gap="16" align="start">
                        <VStack gap="8" align="start">
                            <HStack gap="8">
                                <Avatar
                                    src={article.user.avatar}
                                    alt={article.user.username}
                                    className={cls.headerInfoUserAvatar}
                                    size={32}
                                />
                                <Text
                                    text={article.user.username}
                                    className={cls.headerInfoUserUsername}
                                    bold
                                    marginBottom="0"
                                />
                                <Text
                                    text={article.createdAt}
                                    className={cls.headerInfoDate}
                                    marginBottom="0"
                                />
                            </HStack>
                            <Text
                                title={article.title}
                                className={cls.headerTitle}
                                size="l"
                                bold
                                marginBottom="0"
                            />
                        </VStack>

                        <Text
                            text={article.subtitle}
                            size="l"
                            marginBottom="0"
                        />

                        <AppImage
                            alt={article.title}
                            src={article.img}
                            isLoadingFallback={
                                <Skeleton width="100%" height="26.25rem" />
                            }
                            errorFallback={
                                <Skeleton
                                    width="100%"
                                    height="26.25rem"
                                    isAnimated={false}
                                />
                            }
                            className={cls.articleTypeListImage}
                        />

                        {block && (
                            <Text
                                text={block.paragraphs.slice(0, 2).join(' ')}
                                marginBottom="0"
                                className={cls.textBlock}
                            />
                        )}

                        <HStack justify="between" align="center" max>
                            <AppLink
                                to={getRouteArticlesDetails(article.id)}
                                target={target}
                                variant="outline"
                                onClick={onSaveIndexHandler}
                            >
                                {t('Читать далее...')}
                            </AppLink>
                            {views}
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <Card className={cls.ArticleItemGridCard} padding="0">
                <AppLink
                    to={getRouteArticlesDetails(article.id)}
                    target={target}
                    onClick={onSaveIndexHandler}
                    className={cls.linkWrapper}
                >
                    <VStack data-testid="ArticleItem" gap="16" max>
                        <AppImage
                            className={cls.articleImage}
                            alt={article.title}
                            src={article.img}
                            isLoadingFallback={
                                <Skeleton width="100%" height="141px" />
                            }
                            errorFallback={
                                <Skeleton
                                    width="100%"
                                    height="141px"
                                    isAnimated={false}
                                />
                            }
                        />
                        <VStack gap="8" max className={cls.content}>
                            <Text
                                text={article.subtitle}
                                size="l"
                                marginBottom="0"
                            />
                            <HStack align="center" justify="between" max>
                                <Text
                                    text={article.createdAt}
                                    className={cls.aricleDate}
                                    marginBottom="0"
                                />
                                {views}
                            </HStack>
                            <HStack align="center" justify="start" max gap="4">
                                <Avatar
                                    src={article.user.avatar}
                                    alt={article.user.username}
                                    className={cls.headerInfoUserAvatar}
                                    size={32}
                                />
                                <Text
                                    text={article.user.username}
                                    className={cls.username}
                                    bold
                                    marginBottom="0"
                                />
                            </HStack>
                        </VStack>
                    </VStack>
                </AppLink>
            </Card>
        );
    },
);
