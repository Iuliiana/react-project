import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleViewType } from 'entities/Article';

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
