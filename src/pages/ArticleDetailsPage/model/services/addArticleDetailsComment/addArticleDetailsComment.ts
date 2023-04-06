import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addArticleDetailsComment = createAsyncThunk<Comment, string, ThunkConfig<string> >(
    'articleDetails/addArticleDetailsComment',
    async (text, thunkAPI) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkAPI;

        const articleData = getArticleDetailsData(getState());
        const userData = getUserAuthData(getState());

        if (!userData || !text || !articleData) {
            return rejectWithValue('no data');
        }

        try {
            const result = await extra.api.post<Comment>('/comments', {
                text,
                articleId: articleData?.id,
                userId: userData?.id,
            });

            if (!result.data) {
                throw new Error('error');
            }

            dispatch(fetchCommentsByArticleId(articleData?.id));

            return result.data;
        } catch (e) {
            return rejectWithValue('error article details add comments query');
        }
    },
);
