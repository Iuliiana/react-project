import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';
import cls from './CommentItem.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentItemProps {
    className?: string;
    isLoading?: boolean;
    comment?: Comment;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton
                        className={cls.avatar}
                        width="50px"
                        height="50px"
                        radius="50%"
                    />
                    <Skeleton
                        className={cls.headerTitle}
                        width="50%"
                        height="1.5rem"
                    />
                </div>
                <div className={cls.content}>
                    <Skeleton width="100%" height="1.5rem" />
                </div>
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentItem, {}, [className])}
            data-testid="CommentItem"
        >
            <AppLink to={getRouteProfile(comment.user.id)}>
                <div className={cls.header}>
                    {comment.user?.avatar ? (
                        <Avatar
                            pic={comment.user?.avatar}
                            alt={comment.user.username}
                            size={50}
                            className={cls.avatar}
                        />
                    ) : null}
                    <Text
                        title={comment.user.username}
                        className={cls.headerTitle}
                    />
                </div>
            </AppLink>

            <div className={cls.content}>
                <Text
                    text={comment.text}
                    className={cls.contentText}
                    data-testid="CommentItem.Text"
                />
            </div>
        </div>
    );
});
