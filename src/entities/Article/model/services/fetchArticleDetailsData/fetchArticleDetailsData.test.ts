import { TestAsyncThunk } from 'shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { articleData } from '../../tests/articleData';
import { fetchArticleDetailsData } from './fetchArticleDetailsData';

const articleId = '1';

describe('fetchArticleDetailsData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: articleData }));

        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(articleData);
    });

    test('error 403', async () => {
        const thunk = new TestAsyncThunk(fetchArticleDetailsData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk(articleId);

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error query articles details');
    });
});
