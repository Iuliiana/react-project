import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
    className?: string;
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

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            onScrollEnd={onLoadMoreArticles}
            isVirtuoso
            className={className}
        />
    );
});
