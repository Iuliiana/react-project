import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleView } from '@/entities/Article';
import {
    getArticlesPageIsLoading,
    getArticlesPageError,
    getArticlesPageView,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageHasMore,
} from './articlesPage';

describe('getArticlesPageIsLoading', () => {
    test('should return isLoading value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: true,
                error: 'error',
                view: ArticleView.LIST,
                hasMore: true,
                page: 1,
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
                view: ArticleView.LIST,
                hasMore: true,
                page: 1,
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
                view: ArticleView.LIST,
                hasMore: true,
                page: 1,
            },
        };
        expect(getArticlesPageView(state as StateSchema)).toBe(
            ArticleView.LIST,
        );
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageView(state as StateSchema)).toBe(
            ArticleView.GRID,
        );
    });
});

describe('getArticlesPageLimit', () => {
    test('should return limit value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error',
                view: ArticleView.LIST,
                hasMore: true,
                page: 1,
            },
        };
        expect(getArticlesPageLimit(state as StateSchema)).toBe(15);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageLimit(state as StateSchema)).toBe(15);
    });
});

describe('getArticlesPageNum', () => {
    test('should return page num value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error',
                view: ArticleView.LIST,
                hasMore: true,
                page: 6,
            },
        };
        expect(getArticlesPageNum(state as StateSchema)).toBe(6);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageNum(state as StateSchema)).toBe(1);
    });
});
describe('getArticlesPageHasMore', () => {
    test('should return hasMore value', () => {
        const state: DeepPartial<StateSchema> = {
            articlesPage: {
                isLoading: false,
                error: 'error',
                view: ArticleView.LIST,
                hasMore: false,
                page: 1,
            },
        };
        expect(getArticlesPageHasMore(state as StateSchema)).toBe(false);
    });

    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticlesPageHasMore(state as StateSchema)).toBe(undefined);
    });
});
