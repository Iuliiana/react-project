import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useGetNotificationsQuery } from '../../api/notificationApi';

interface NotificationListProps {
    className?: string,
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading, error } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (!isLoading && error) {
        return null;
    }

    if (isLoading) {
        return (
            <VStack gap="16" max className={classNames('', {}, [className])}>
                <Skeleton width="100%" radius="8px" height="8.5rem" />
                <Skeleton width="100%" radius="8px" height="8.5rem" />
                <Skeleton width="100%" radius="8px" height="8.5rem" />
            </VStack>
        );
    }

    return (
        <VStack gap="16" max className={classNames('', {}, [className])}>
            {
                data?.map((item) => <NotificationItem item={item} key={item.id} />)
            }
        </VStack>
    );
});
