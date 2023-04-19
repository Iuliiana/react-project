import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading, getArticlesPageNum,
} from '../../selectors/articlesPage';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const isLoading = getArticlesPageIsLoading(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());

        if (!isLoading && hasMore) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
