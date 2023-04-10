import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comments';
import { CommentItem } from '../CommentItem/CommentItem';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string,
    comments: Comment[],
    isLoading?: boolean,
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {(comments?.length)
                ? comments.map((comment) => (<CommentItem comment={comment} isLoading={isLoading} key={comment.id} />))
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
