import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageIsInited,
} from '../../selectors/articlesPage';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const inited = getArticlesPageIsInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.initialView());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
