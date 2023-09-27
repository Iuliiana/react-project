import React, { memo, useCallback, useState } from 'react';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Popover } from '@/shared/ui/deprecated/Popups';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    const isMobilDevice = useDetectDevice();
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const onCloseDrawer = useCallback(() => {
        setIsOpenDrawer(false);
    }, []);

    const onOpenDrawer = useCallback(() => {
        setIsOpenDrawer(true);
    }, []);

    const trigger = (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div role="button" onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} />
        </div>
    );

    if (!isMobilDevice) {
        return (
            <Popover
                className={classNames(cls.NotificationButton, {}, [className])}
                btn={trigger}
            >
                <NotificationList />
            </Popover>
        );
    }

    return (
        <>
            {trigger}
            {isOpenDrawer && (
                <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            )}
        </>
    );
});
