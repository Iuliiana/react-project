import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { ArticleDetailsContentDeprecated } from './ArticleDetailsContentDeprecated/ArticleDetailsContentDeprecated';
import { ArticleDetailsContentRedesign } from './ArticleDetailsContentRedesign/ArticleDetailsContentRedesign';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticlesDetailsData';
import { fetchArticleDetailsData } from '../../model/services/fetchArticleDetailsData/fetchArticleDetailsData';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const asyncReducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;

    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const data = useSelector(getArticleDetailsData);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetailsData(id));
        }
    }, [dispatch, id]);

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ToggleFeatureFlag
                    feature="isAppRedesigned"
                    on={
                        <ArticleDetailsContentRedesign
                            isLoading={isLoading}
                            error={error}
                            data={data}
                        />
                    }
                    off={
                        <ArticleDetailsContentDeprecated
                            isLoading={isLoading}
                            error={error}
                            data={data}
                        />
                    }
                />
            </div>
        </DynamicModuleLoader>
    );
});
