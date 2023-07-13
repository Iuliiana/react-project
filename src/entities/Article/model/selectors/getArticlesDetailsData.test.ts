import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './getArticlesDetailsData';
import { articleData } from '../tests/articleData';

describe('getArticleDetailsData', () => {
    test('should return data value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: articleData,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(articleData);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsError', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});

describe('getArticleDetailsIsLoading', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
