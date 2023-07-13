import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/Article';

const articleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _expand: 'user',
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});
export const { useGetArticleRecommendationsQuery } = articleRecommendationsApi;
