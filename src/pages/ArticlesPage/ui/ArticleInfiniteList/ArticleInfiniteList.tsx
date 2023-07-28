import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/hooks/useDebounce/useDebounce';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleInfiniteList.module.scss';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string,
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const { className } = props;
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const articles = useSelector(getArticles.selectAll);
    const dispatch = useAppDispatch();

    const onLoadMoreArticles = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    const debounceOnLoadMoreArticles = useDebounce(onLoadMoreArticles, 1000);

    const onScrollEnd = useCallback(() => {
        debounceOnLoadMoreArticles();
    }, [debounceOnLoadMoreArticles]);

    return (
        <div
            className={classNames(cls.ArticleInfiniteList, {}, [className])}
        >
            <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                onScrollEnd={onScrollEnd}
                isVirtuoso
            />
        </div>
    );
});
