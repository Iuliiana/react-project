import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRating } from '@/features/ArticleRating';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Text } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsCardContainer } from '../ArticleDetailsCardContainer/ArticleDetailsCardContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';
// eslint-disable-next-line max-len
import { ArticlesDetailsNavigationContainer } from '../ArticlesDetailsNavigationContainer/ArticlesDetailsNavigationContainer';

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
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <StickyContentLayout
                        content={
                            <Page
                                className={classNames('', {}, [className])}
                                data-testid="ArticleDetailsPage"
                            >
                                <VStack gap="16" max align="start">
                                    <ArticleDetailsCardContainer />
                                    <ArticleRating articleId={id} />
                                    <ArticleRecommendationsList />
                                    <ArticleDetailsComments id={id} />
                                </VStack>
                            </Page>
                        }
                        right={<ArticlesDetailsNavigationContainer />}
                    />
                }
                off={
                    <Page
                        className={classNames('', {}, [className])}
                        data-testid="ArticleDetailsPage"
                    >
                        <ArticleDetailsHeader />
                        <ArticleDetails id={id} />

                        <ToggleFeatureFlag
                            feature="isArticleRatingEnabled"
                            on={<ArticleRating articleId={id} />}
                            off={
                                <Text
                                    title={t('Здесь скоро будет оценка статьи')}
                                />
                            }
                        />

                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Page>
                }
            />
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
