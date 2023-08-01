import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleDetailsData = createAsyncThunk<
    Article,
    string,
    ThunkConfig<string>
>('articleDetails/fetchArticleDetailsData', async (id, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const result = await extra.api.get<Article>(`/articles/${id}`, {
            params: {
                _expand: 'user',
            },
        });

        if (!result.data) {
            throw new Error('error');
        }

        return result.data;
    } catch (e) {
        return rejectWithValue('error query articles details');
    }
});
