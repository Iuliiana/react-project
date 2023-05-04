import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleViewType } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/Page';
import { getArticleRecommendations } from '../../model/slice/articleDetailsRecommendationsSlice';
import {
    getArticleDetailsRecommendationsSchemaIsLoading,
} from '../../model/selectors/recommendations/recommendations';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { addArticleDetailsComment } from '../../model/services/addArticleDetailsComment/addArticleDetailsComment';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsHeader } from '../ArticleDetailsHeader/ArticleDetailsHeader';

interface ArticleDetailsPageProps {
    className?: string,
}

const asyncReducers:ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string}>();
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsList = useSelector(getArticleComments.selectAll);
    const recomendationsIsLoading = useSelector(getArticleDetailsRecommendationsSchemaIsLoading);
    const recomendationsList = useSelector(getArticleRecommendations.selectAll);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });
    const onSendComment = useCallback((text: string) => {
        dispatch(addArticleDetailsComment(text));
    }, [dispatch]);

    if (!id) {
        return (
            <Page className={classNames('', {}, [className])}>
                <Text title={t('Статья не найдена')} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ArticleDetailsHeader />
                <ArticleDetails id={id} />

                <div className={cls.recommendationsWrapper}>
                    <Text title={t('Читайте также')} className={cls.commentsTitle} />
                    <ArticleList
                        isLoading={recomendationsIsLoading}
                        articles={recomendationsList}
                        view={ArticleViewType.GRID}
                        className={cls.recomendationsList}
                        target="_blank"
                    />
                </div>

                <div className={cls.commentsWrapper}>
                    <Text title={t('Комментарии')} className={cls.commentsTitle} />
                    <AddCommentForm
                        onSendComment={onSendComment}
                        className={cls.commentsAddForm}
                    />
                    <CommentList
                        comments={commentsList}
                        isLoading={commentsIsLoading}
                    />
                </div>
            </Page>
        </DynamicModuleLoader>

    );
};

export default memo(ArticleDetailsPage);
