import { useTranslation } from 'react-i18next';
import React, {
    memo, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ArticleType,
    ArticleView,
    ArticleSortField,
    ArticleViewSelector,
    ArticleSortSelector,
    ArticleTypeTabs,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Input } from '@/shared/ui/Input/Input';
import { Card } from '@/shared/ui/Card/Card';
import { OrderBy } from '@/shared/lib/types';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import {
    getArticlesOrder,
    getArticlesPageView,
    getArticlesSearch,
    getArticlesSort,
    getArticlesType,
} from '../../model/selectors/articlesPage';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string,
}

// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesSort);
    const order = useSelector(getArticlesOrder);
    const search = useSelector(getArticlesSearch);
    const type = useSelector(getArticlesType);

    const onChangeViewArticles = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debounceData = useDebounce(fetchData, 1000);

    const onChangeSort = useCallback((sort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(sort));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((order: OrderBy) => {
        dispatch(articlesPageActions.setOrder(order));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        debounceData();
    }, [debounceData, dispatch]);

    const onChangeTab = useCallback((value: ArticleType) => {
        dispatch(articlesPageActions.setType(value));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
            <div className={cls.selectors}>
                <ArticleSortSelector
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    currentSort={sort}
                    currentOrder={order}
                />
                <ArticleViewSelector
                    view={view}
                    onChangeViewArticles={onChangeViewArticles}
                    className={cls.btnsViewArticles}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    className={cls.searchInput}
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>

            <ArticleTypeTabs
                onChangeTab={onChangeTab}
                currentType={type}
                className={cls.tabs}
            />
        </div>
    );
});
