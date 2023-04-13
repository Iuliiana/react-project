import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsCommentsIsLoading,
    getArticleDetailsCommentsError,
} from './comments';

describe('getArticleDetailsCommentsIsLoading', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsCommentsError', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: false,
                error: 'error',
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('error');
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual(undefined);
    });
});
