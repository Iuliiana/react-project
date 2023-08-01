import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailsData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchArticleDetailsData.fulfilled,
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = undefined;
                    state.data = payload;
                },
            )
            .addCase(fetchArticleDetailsData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
