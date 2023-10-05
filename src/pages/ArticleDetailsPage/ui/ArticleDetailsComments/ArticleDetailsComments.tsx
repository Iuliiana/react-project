import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddCommentForm';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments/comments';
import { addArticleDetailsComment } from '../../model/services/addArticleDetailsComment/addArticleDetailsComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo(
    (props: ArticleDetailsCommentsProps) => {
        const { className, id } = props;
        const { t } = useTranslation('article-details');
        const dispatch = useAppDispatch();
        const commentsIsLoading = useSelector(
            getArticleDetailsCommentsIsLoading,
        );
        const commentsList = useSelector(getArticleComments.selectAll);

        useInitialEffect(() => {
            dispatch(fetchCommentsByArticleId(id));
        });

        const onSendComment = useCallback(
            (text: string) => {
                dispatch(addArticleDetailsComment(text));
            },
            [dispatch],
        );

        return (
            <VStack
                gap="16"
                max
                align="stretch"
                className={classNames('', {}, [className])}
                data-testid="ArticleDetailsComments"
            >
                <ToggleFeatureFlag
                    feature="isAppRedesigned"
                    on={<Text title={t('Комментарии')} />}
                    off={<TextDeprecated title={t('Комментарии')} />}
                />

                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={commentsList}
                    isLoading={commentsIsLoading}
                />
            </VStack>
        );
    },
);
