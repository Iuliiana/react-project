import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleDetailsData } from '../services/fetchArticleDetailsData/fetchArticleDetailsData';
import { articleData } from '../tests/articleData';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

describe('articleDetailsSlice.test', () => {
    test('undefined state', () => {
        expect(
            articleDetailsReducer(undefined, fetchArticleDetailsData.pending),
        ).toEqual({
            isLoading: true,
            data: undefined,
            error: undefined,
        });
    });

    test('fetchArticleDetailsData.fulfilled', () => {
        const state: ArticleDetailsSchema = {
            isLoading: true,
            data: undefined,
            error: undefined,
        };

        expect(
            articleDetailsReducer(
                state,
                fetchArticleDetailsData.fulfilled(articleData, '1', ''),
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
            data: articleData,
        });
    });
});
