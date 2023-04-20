import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsRecommendationsSchemaIsLoading = (state: StateSchema) => (
    state?.articleDetailsPage?.recommendations?.isLoading
);

export const getArticleDetailsRecommendationsSchemaError = (state: StateSchema) => (
    state?.articleDetailsPage?.recommendations?.error ?? ''
);
