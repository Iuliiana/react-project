import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { useDetectDevice } from 'shared/hooks/useDetectDevice/useDetectDevice';
import { Button } from 'shared/ui/Button/Button';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string,
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
        <Button onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} />
        </Button>
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
            { trigger }
            {
                isOpenDrawer && (
                    <Drawer isOpen={isOpenDrawer} onClick={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                )
            }
        </>
    );
});
