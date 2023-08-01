import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article,
    ArticleType,
    ArticleView,
    ArticleSortField,
} from '@/entities/Article';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { OrderBy } from '@/shared/lib/types/order';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
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
        view: ArticleView.GRID,
        page: 1,
        hasMore: true,
        _inited: false,
        limit: 9,
        type: ArticleType.ALL,
        order: 'asc',
        search: '',
        sort: ArticleSortField.CREATED,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            state.limit = action.payload === ArticleView.GRID ? 15 : 5;
            localStorage.setItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY,
                action.payload,
            );
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setOrder: (state, action: PayloadAction<OrderBy>) => {
            state.order = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        initState: (state) => {
            state._inited = true;
            if (localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY)) {
                state.view = localStorage.getItem(
                    ARTICLES_VIEW_LOCALSTORAGE_KEY,
                ) as ArticleView;
            }
            state.limit = state.view === ArticleView.GRID ? 15 : 5;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = undefined;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } =
    articlesPageSlice;
