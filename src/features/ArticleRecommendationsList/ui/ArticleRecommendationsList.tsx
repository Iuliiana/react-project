import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleList, ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './ArticleRecommendationsList.module.scss';
import { useGetArticleRecommendationsQuery } from '../api/aritcleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation('article-details');

        const {
            data: recommendationsList,
            isLoading: recommendationsIsLoading,
            error: recommendationsError,
        } = useGetArticleRecommendationsQuery(4);

        if (recommendationsIsLoading) {
            return (
                <VStack
                    gap="16"
                    className={classNames(cls.ArticleRecommendationsList, {}, [
                        className,
                    ])}
                >
                    <ToggleFeatureFlag
                        feature="isAppRedesigned"
                        on={<Skeleton height={360} width="100%" />}
                        off={<Loader />}
                    />
                </VStack>
            );
        }

        if (
            (!recommendationsIsLoading && recommendationsError) ||
            !recommendationsList
        ) {
            return (
                <VStack
                    gap="16"
                    className={classNames(cls.ArticleRecommendationsList, {}, [
                        className,
                    ])}
                    max
                >
                    <Text
                        title={t(
                            'Возникла ошибка при загрузки списка рекомендуемых статей',
                        )}
                        text={t('Пожалуйста, обновите страницу')}
                    />
                </VStack>
            );
        }

        return (
            <VStack
                gap="16"
                align="start"
                className={classNames(cls.ArticleRecommendationsList, {}, [
                    className,
                ])}
                data-testid="ArticleRecommendationsList"
                max
            >
                <Text
                    title={t('Читайте также')}
                    className={cls.commentsTitle}
                />
                <ArticleList
                    isLoading={recommendationsIsLoading}
                    articles={recommendationsList}
                    view={ArticleView.GRID}
                    className={cls.recommendationsList}
                    target="_blank"
                />
            </VStack>
        );
    },
);
