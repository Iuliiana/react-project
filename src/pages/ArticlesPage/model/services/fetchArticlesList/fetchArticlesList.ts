import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
    getArticlesOrder,
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../selectors/articlesPage';

interface FetchArticlesListParams {
    replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListParams, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const order = getArticlesOrder(getState());
        const sort = getArticlesSort(getState());
        const search = getArticlesSearch(getState());
        const type = getArticlesType(getState());

        try {
            addQueryParams({
                order, sort, search, type,
            });

            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _order: order,
                    _sort: sort,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type,
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
