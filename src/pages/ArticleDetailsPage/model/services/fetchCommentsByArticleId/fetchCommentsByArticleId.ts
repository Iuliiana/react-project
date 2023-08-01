import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (!articleId) {
        return rejectWithValue('empty article id');
    }

    try {
        const result = await extra.api.get<Comment[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        });

        if (!result.data) {
            throw new Error('error');
        }

        return result.data;
    } catch (e) {
        return rejectWithValue('error article details comments query');
    }
});
