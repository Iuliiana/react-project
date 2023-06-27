import { TestAsyncThunk } from 'shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                view: ArticleView.GRID,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
                _inited: false,
            },
        });

        await thunk.callThunk(new URLSearchParams());

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    test('_inited: true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 3,
                view: ArticleView.GRID,
                hasMore: false,
                ids: [],
                entities: {},
                isLoading: false,
                limit: 5,
                _inited: true,
            },
        });
        await thunk.callThunk(new URLSearchParams());
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
