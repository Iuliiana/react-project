import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import { Comment } from '../../model/types/comments';
import cls from './CommentItem.module.scss';

interface CommentItemProps {
    className?: string,
    isLoading?: boolean,
    comment: Comment
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} width="50px" height="50px" radius="50%" />
                    <Skeleton className={cls.headerTitle} width="50%" height="1.5rem" />
                </div>
                <div className={cls.content}>
                    <Skeleton width="100%" height="1.5rem" />
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <AppLink to={RoutePath.profile + comment.user.id}>
                <div className={cls.header}>
                    {comment.user?.avatar
                        ? (
                            <Avatar
                                pic={comment.user?.avatar}
                                alt={comment.user.username}
                                size={50}
                                className={cls.avatar}
                            />
                        )
                        : null}
                    <Text title={comment.user.username} className={cls.headerTitle} />
                </div>
            </AppLink>

            <div className={cls.content}>
                <Text text={comment.text} className={cls.contentText} />
            </div>
        </div>
    );
});