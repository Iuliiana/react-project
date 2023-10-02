import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { OrderBy } from '@/shared/lib/types/order';
import {
    getArticlesOrder,
    getArticlesPageView,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../model/selectors/articlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

export const useArticlePage = () => {
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);
    const view = useSelector(getArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceData = useDebounce(fetchData, 1000);

    const onChangeSort = useCallback(
        (sort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(sort));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeOrder = useCallback(
        (order: OrderBy) => {
            dispatch(articlesPageActions.setOrder(order));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            debounceData();
        },
        [debounceData, dispatch],
    );

    const onChangeTab = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeViewArticles = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );
    return {
        t,
        sort,
        order,
        search,
        type,
        view,
        onChangeViewArticles,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeTab,
    };
};
