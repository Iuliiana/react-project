import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
    userId: string;
    articleId: string;
}

interface SetArticleRatingArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRateByUser: build.query<Rating[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        setArticleRate: build.mutation<void, SetArticleRatingArg>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
    overrideExisting: false,
});
export const getArticleRateByUser =
    articleRatingApi.useGetArticleRateByUserQuery;
export const { useSetArticleRateMutation } = articleRatingApi;
