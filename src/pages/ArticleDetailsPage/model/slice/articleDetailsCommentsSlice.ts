import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

// селекторы
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            error: undefined,
            isLoading: false,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchCommentsByArticleId.fulfilled,
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = undefined;
                    commentsAdapter.setAll(state, payload);
                },
            )
            .addCase(
                fetchCommentsByArticleId.rejected,
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                },
            );
    },
});
export const { reducer: articleDetailsCommentsReducer } =
    articleDetailsCommentsSlice;
