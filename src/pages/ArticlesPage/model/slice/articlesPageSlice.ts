import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleViewType } from 'entities/Article';
import { StateSchema } from 'app/providers/StoreProvider';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const articlesPageAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>({
        ids: [],
        entities: {},
        error: undefined,
        isLoading: false,
        view: ArticleViewType.GRID,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action:PayloadAction<ArticleViewType>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload;
        },
        initialView: (state) => {
            if (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY)) {
                state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleViewType;
            }
            state.limit = state.view === ArticleViewType.GRID ? 15 : 5;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = undefined;
                articlesPageAdapter.addMany(state, payload);
                state.hasMore = payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
