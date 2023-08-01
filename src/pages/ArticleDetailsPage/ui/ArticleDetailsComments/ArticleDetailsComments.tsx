import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import {
    addArticleDetailsComment,
} from '../../model/services/addArticleDetailsComment/addArticleDetailsComment';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string,
    id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');
    const dispatch = useAppDispatch();
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const commentsList = useSelector(getArticleComments.selectAll);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addArticleDetailsComment(text));
    }, [dispatch]);

    return (
        <VStack
            gap="8"
            align="stretch"
            className={classNames('', {}, [className])}
            data-testid="ArticleDetailsComments"
        >
            <Text title={t('Комментарии')} />
            <AddCommentForm
                onSendComment={onSendComment}
            />
            <CommentList
                comments={commentsList}
                isLoading={commentsIsLoading}
            />
        </VStack>
    );
});
