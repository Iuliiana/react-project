import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticleDetailsPageProps {
    className?: string,
}

const asyncReducers:ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string}>();
    const { t } = useTranslation('article-details');

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                <Text title={t('Статья не найдена')} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsHeader />
                <ArticleDetails id={id} />
                <ArticleRating articleId={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
