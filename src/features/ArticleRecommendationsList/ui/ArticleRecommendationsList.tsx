import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleList, ArticleViewType } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { Loader } from 'shared/ui/Loader/Loader';
import { useGetArticleRecommendationsQuery } from '../api/aritcleRecommendationsApi';
import cls from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string,
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');

    const {
        data: recomendationsList,
        isLoading: recomendationsIsLoading,
        error: recomendationsError,
    } = useGetArticleRecommendationsQuery(4, {
        skip: (__PROJECT__ === 'storybook'),
    });

    if (recomendationsIsLoading) {
        return (
            <VStack gap="16" className={classNames(cls.ArticleRecommendationsList, {}, [className])}>
                <Loader />
            </VStack>
        );
    }

    if (!recomendationsIsLoading && recomendationsError) {
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
                isLoading={recomendationsIsLoading}
                articles={recomendationsList}
                view={ArticleViewType.GRID}
                className={cls.recomendationsList}
                target="_blank"
            />
        </VStack>
    );
});
