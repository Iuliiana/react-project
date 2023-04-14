import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import { Page } from 'widgets/Page/Page';
import { addArticleDetailsComment } from '../../model/services/addArticleDetailsComment/addArticleDetailsComment';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsPageProps {
    className?: string,
}

const asyncReducers:ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string}>();
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsList = useSelector(getArticleComments.selectAll);
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const onSendComment = useCallback((text: string) => {
        dispatch(addArticleDetailsComment(text));
    }, [dispatch]);

    const onBackToArticles = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Text title={t('Статья не найдена')} />
            </Page>
        );
    }

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button
                    onClick={onBackToArticles}
                    themeButton={ButtonTheme.HIGHLIGHT}
                    className={cls.btnBack}
                >
                    {t('Назад к списку статей')}
                </Button>
                <ArticleDetails id={id} />

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
