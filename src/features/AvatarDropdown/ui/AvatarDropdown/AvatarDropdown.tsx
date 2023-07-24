import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
    getUserAuthData, isAdminRole, isManagerRole, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/route';

interface AvatarDropdownProps {
    className?: string,
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isAdminRole);
    const isManager = useSelector(isManagerRole);
    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logoutUser());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            btn={<Avatar size={50} pic={authData?.avatar} />}
            direction="bottom left"
            items={[
                {
                    content: t('Выйти'),
                    onClick: onLogoutClick,
                },
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                ...(isAdminPanelAvailable ? [{
                    content: t('Админка'),
                    href: RoutePath.admin_panel,
                }] : []
                ),
            ]}
        />
    );
});
