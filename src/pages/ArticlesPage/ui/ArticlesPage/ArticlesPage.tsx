import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleViewType } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { Page } from 'shared/ui/Page/Page';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPage';
import { articlesPageReducer, articlesPageActions, getArticles } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string,
}

const asyncReducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);

    const onChangeViewArticles = useCallback((view: ArticleViewType) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage());
    });

    const onLoadMoreArticles = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadMoreArticles}
            >
                <ArticleViewSelector
                    view={view}
                    onChangeViewArticles={onChangeViewArticles}
                    className={cls.btnsViewArticles}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticlesPage);
