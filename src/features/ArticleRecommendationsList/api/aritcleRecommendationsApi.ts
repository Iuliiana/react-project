import { rtkApi } from 'shared/api/rtkApi';

const aritcleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendations: build.query({
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
export const { useGetArticleRecommendationsQuery } = aritcleRecommendationsApi;
