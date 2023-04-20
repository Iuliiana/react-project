import {
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    ArticleDetailsRecommendationsSchema,
} from '../types/ArticleDetailsRecommendationsSchema';
import {
    fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (comment) => comment.id,
});

// селекторы
export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'recommendations',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = undefined;
                recommendationsAdapter.setAll(state, payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});
export const { reducer: articleDetailsRecommendationsReducer } = articleDetailsCommentsSlice;
