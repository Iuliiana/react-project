import { memo } from 'react';
import { getRouteProfile } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
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
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <Card
                        className={classNames(cls.CommentItemRedesign, {}, [
                            className,
                        ])}
                    >
                        <HStack
                            max
                            align="start"
                            gap="16"
                            justify="start"
                            className={cls.header}
                        >
                            <Skeleton width="32px" height="32px" radius="50%" />
                            <Skeleton width="100%" height="50px" />
                        </HStack>
                    </Card>
                }
                off={
                    <div
                        className={classNames(cls.CommentItem, {}, [className])}
                    >
                        <div className={cls.header}>
                            <SkeletonDeprecated
                                className={cls.avatar}
                                width="50px"
                                height="50px"
                                radius="50%"
                            />
                            <SkeletonDeprecated
                                className={cls.headerTitle}
                                width="50%"
                                height="1.5rem"
                            />
                        </div>
                        <div className={cls.content}>
                            <SkeletonDeprecated width="100%" height="1.5rem" />
                        </div>
                    </div>
                }
            />
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Card
                    max
                    className={classNames('', {}, [className])}
                    data-testid="CommentItem"
                    variant="clear"
                >
                    <HStack max align="start" gap="16" justify="start">
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <VStack gap="8">
                                {comment.user?.avatar ? (
                                    <Avatar
                                        src={comment.user?.avatar}
                                        alt={comment.user.username}
                                        size={32}
                                    />
                                ) : null}
                                <Text
                                    text={comment.user.username}
                                    marginBottom="0"
                                />
                            </VStack>
                        </AppLink>
                        <Text
                            text={comment.text}
                            data-testid="CommentItem.Text"
                            marginBottom="0"
                        />
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.CommentItem, {}, [className])}
                    data-testid="CommentItem"
                >
                    <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                        <div className={cls.header}>
                            {comment.user?.avatar ? (
                                <AvatarDeprecated
                                    pic={comment.user?.avatar}
                                    alt={comment.user.username}
                                    size={50}
                                    className={cls.avatar}
                                />
                            ) : null}
                            <TextDeprecated
                                title={comment.user.username}
                                className={cls.headerTitle}
                            />
                        </div>
                    </AppLinkDeprecated>
                    <div className={cls.content}>
                        <TextDeprecated
                            text={comment.text}
                            className={cls.contentText}
                            data-testid="CommentItem.Text"
                        />
                    </div>
                </div>
            }
        />
    );
});
