import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Text } from '@/shared/ui/deprecated/Text';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const asyncReducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
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
            <Page
                className={classNames('', {}, [className])}
                data-testid="ArticleDetailsPage"
            >
                <ArticleDetailsHeader />
                <ArticleDetails id={id} />

                <ToggleFeatureFlag
                    feature="isArticleRatingEnabled"
                    on={<ArticleRating articleId={id} />}
                    off={<Text title={t('Здесь скоро будет оценка статьи')} />}
                />

                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
