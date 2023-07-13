import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { Loader } from '@/shared/ui/Loader/Loader';
import { useGetArticleRecommendationsQuery } from '../api/aritcleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string,
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const {
        data: recommendationsList,
        isLoading: recommendationsIsLoading,
        error: recommendationsError,
    } = useGetArticleRecommendationsQuery(4);

    if (recommendationsIsLoading) {
        return (
            <VStack gap="16" className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
                <Loader />
            </VStack>
        );
    }

    if ((!recommendationsIsLoading && recommendationsError) || !recommendationsList) {
        return (
            <VStack gap="16" className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
                <Text
                    title={t('Возникла ошибка при загрузки списка рекомендуемых статей')}
                    text={t('Пожалуйста, обновите страницу')}
                />
            </VStack>
        );
    }

    return (
        <VStack
            gap="16"
            align="start"
            className={classNames(cls.ArticleRecommendationsList, {}, [className])}
        >
            <Text title={t('Читайте также')} className={cls.commentsTitle} />
            <ArticleList
                isLoading={recommendationsIsLoading}
                articles={recommendationsList}
                view={ArticleView.GRID}
                className={cls.recommendationsList}
                target="_blank"
            />
        </VStack>
    );
});
