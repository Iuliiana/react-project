import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { StickyContentLayout } from '@/shared/layouts';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesFiltersContainer } from '../ArticlesFiltersContainer/ArticlesFiltersContainer';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ViewSelectorContaner } from '../ViewSelectorContaner/ViewSelectorContaner';

interface ArticlesPageProps {
    className?: string;
}

const asyncReducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <VStack
                    max
                    justify="between"
                    align="stretch"
                    data-testid="ArticlesPage"
                >
                    <StickyContentLayout
                        content={
                            <ArticleInfiniteList
                                className={classNames('', {}, [className])}
                            />
                        }
                        right={<ArticlesFiltersContainer />}
                        left={<ViewSelectorContaner />}
                    />
                </VStack>
            }
            off={
                <VStack
                    max
                    justify="between"
                    align="stretch"
                    data-testid="ArticlesPage"
                >
                    <ArticlesPageFilters />
                    <ArticleInfiniteList
                        className={classNames('', {}, [className])}
                    />
                </VStack>
            }
        />
    );

    return (
        <DynamicModuleLoader
            asyncReducers={asyncReducers}
            removeAfterUnmount={false}
        >
            {content}
            <ArticlePageGreeting />
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
