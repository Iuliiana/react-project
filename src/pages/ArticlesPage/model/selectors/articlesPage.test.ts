import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleViewType } from 'entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
} from './articlesPage';

describe('getArticlesPageIsLoading', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
                error: 'error',
                view: ArticleViewType.LIST,
            },
        };
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(true);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageIsLoading(state as StateSchema)).toBe(false);
    });
});

describe('getArticlesPageError', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error',
                view: ArticleViewType.LIST,
            },
        };
        expect(getArticlesPageError(state as StateSchema)).toBe('error');
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageError(state as StateSchema)).toBe(undefined);
    });
});

describe('getArticlesPageView', () => {
    test('should return view value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error',
                view: ArticleViewType.LIST,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toBe(ArticleViewType.LIST);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toBe(ArticleViewType.GRID);
    });
});
