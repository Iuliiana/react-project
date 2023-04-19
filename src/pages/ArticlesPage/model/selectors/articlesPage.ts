import { StateSchema } from 'app/providers/StoreProvider';
import {
    ArticleViewType,
    ArticleType,
    ArticleSortBy,
} from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => (
    state?.articlesPage?.isLoading || false
);

export const getArticlesPageError = (state: StateSchema) => (
    state?.articlesPage?.error || undefined
);
export const getArticlesPageView = (state: StateSchema) => (
    state?.articlesPage?.view || ArticleViewType.GRID
);

export const getArticlesPageNum = (state: StateSchema) => (
    state?.articlesPage?.page || 1
);

export const getArticlesPageLimit = (state: StateSchema) => (
    state?.articlesPage?.limit || 15
);

export const getArticlesPageHasMore = (state: StateSchema) => (
    state?.articlesPage?.hasMore
);

export const getArticlesPageIsInited = (state: StateSchema) => (
    state?.articlesPage?._inited
);

export const getArticlesSort = (state: StateSchema) => (
    state?.articlesPage?.sort ?? ArticleSortBy.CREATED
);
export const getArticlesOrder = (state: StateSchema) => (
    state?.articlesPage?.order ?? 'asc'
);
export const getArticlesSearch = (state: StateSchema) => (
    state?.articlesPage?.search ?? ''
);
export const getArticlesType = (state: StateSchema) => (
    state?.articlesPage?.type ?? ArticleType.ALL
);
