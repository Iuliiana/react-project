import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Icon } from 'shared/ui/Icon/Icon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string,
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            btn={<Icon Svg={NotificationIcon} />}
        >
            <NotificationList />
        </Popover>
    );
});
