import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageLimit } from '../../selectors/articlesPage';

interface FetchArticlesListParams {
    page?: number
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async ({ page = 1 }, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                },
            });

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error articles query');
        }
    },
);
