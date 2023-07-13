import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
    addArticleDetailsComment,
} from '../../model/services/addArticleDetailsComment/addArticleDetailsComment';

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
