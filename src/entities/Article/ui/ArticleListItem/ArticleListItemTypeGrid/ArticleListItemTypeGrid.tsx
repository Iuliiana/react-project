import React, { memo } from 'react';
import ViewsIcon from '@/shared/assets/icons/view.svg';
import { getRouteArticlesDetails } from '@/shared/const/route';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { Card } from '@/shared/ui/deprecated/Card';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ArticleListItemTypeGrid.module.scss';
import { ArticleItemProps } from '../ArticleListItem';

interface ArticleListItemTypeGridProps extends ArticleItemProps {
    onSaveIndex?: (index?: number) => void;
}

export const ArticleListItemTypeGrid = memo(
    (props: ArticleListItemTypeGridProps) => {
        const { article, target, index, onSaveIndex } = props;

        const onSaveIndexHandler = () => {
            onSaveIndex?.(index);
        };

        return (
            <Card className={cls.ArticleItemGridCard}>
                <AppLink
                    to={getRouteArticlesDetails(article.id)}
                    target={target}
                    onClick={onSaveIndexHandler}
                    className={cls.linkWrapper}
                >
                    <VStack
                        className={cls.content}
                        data-testid="ArticleItem"
                        gap="16"
                        max
                    >
                        <AppImage
                            className={cls.articleImage}
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
                        <Text
                            text={article.createdAt}
                            className={cls.aricleDate}
                        />

                        <VStack gap="8">
                            <HStack align="center" justify="between" max>
                                <Text
                                    text={article.type.join(', ')}
                                    className={cls.headingTypes}
                                />
                                <div className={cls.view}>
                                    <span data-testid="ArticleListItem.views">
                                        {article.views}
                                    </span>
                                    <Icon Svg={ViewsIcon} />
                                </div>
                            </HStack>
                            <Text title={article.title} className={cls.text} />
                        </VStack>
                    </VStack>
                </AppLink>
            </Card>
        );
    },
);
