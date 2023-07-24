import { StateSchema } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { article } from '../../tests/article';

describe('fetchCommentsByArticleId.test', () => {
    test('success', async () => {
        const state: DeepPartial<StateSchema> = {};

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, state);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(article);
    });

    test('error 403', async () => {
        const state: DeepPartial<StateSchema> = {};
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId, state);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error article details comments query');
    });
});
