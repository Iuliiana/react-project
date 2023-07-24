import { StateSchema } from '@/app/providers/StoreProvider';
import { TestAsyncThunk } from '@/shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { addArticleDetailsComment } from './addArticleDetailsComment';
import { article } from '../../tests/article';
import { user } from '../../tests/user';

describe('addArticleDetailsComment.test', () => {
    const data = {
        userId: '2',
        articleId: '1',
        text: 'новый комментарий',
    };

    test('success', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article,
            },
            user: {
                _isInitAuth: true,
                authData: user,
            },
        };

        const thunk = new TestAsyncThunk(addArticleDetailsComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({
            data,
        }));

        const result = await thunk.callThunk('новый комментарий');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error 403', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article,
            },
            user: {
                _isInitAuth: true,
                authData: user,
            },
        };
        const thunk = new TestAsyncThunk(addArticleDetailsComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('новый комментарий');

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('error article details add comments query');
    });

    test('empty state data', async () => {
        const state: DeepPartial<StateSchema> = {};

        const thunk = new TestAsyncThunk(addArticleDetailsComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('новый комментарий');

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });

    test('empty text data', async () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: article,
            },
            user: {
                _isInitAuth: true,
                authData: user,
            },
        };

        const thunk = new TestAsyncThunk(addArticleDetailsComment, state);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk('');

        expect(thunk.api.post).not.toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual('no data');
    });
});
