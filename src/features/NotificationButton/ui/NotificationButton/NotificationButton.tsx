import React, { memo, useCallback, useState } from 'react';
import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/new/notify.svg';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import { useDetectDevice } from '@/shared/hooks/useDetectDevice/useDetectDevice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';
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
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIcon}
                    isClickable
                    onClick={onOpenDrawer}
                />
            }
            off={
                // eslint-disable-next-line jsx-a11y/interactive-supports-focus
                <div role="button" onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationIconDeprecated} />
                </div>
            }
        />
    );

    if (!isMobilDevice) {
        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <Popover
                        className={classNames(cls.NotificationPanel, {}, [
                            className,
                        ])}
                        btn={trigger}
                    >
                        <div className={cls.NotificationWrapper}>
                            <NotificationList />
                        </div>
                    </Popover>
                }
                off={
                    <PopoverDeprecated
                        className={classNames(cls.NotificationButton, {}, [
                            className,
                        ])}
                        btn={trigger}
                    >
                        <NotificationList />
                    </PopoverDeprecated>
                }
            />
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
