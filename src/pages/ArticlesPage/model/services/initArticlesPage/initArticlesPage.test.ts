import { TestAsyncThunk } from 'shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { ArticleViewType } from 'entities/Article';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                view: ArticleViewType.GRID,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 1 });
    });

    test('_inited: true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 3,
                view: ArticleViewType.GRID,
                hasMore: false,
                ids: [],
                entities: {},
                isLoading: false,
                limit: 5,
                _inited: true,
            },
        });
        await thunk.callThunk();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
