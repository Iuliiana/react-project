import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/SidebarItemsType';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
    const isAuthUser = useSelector(getUserAuthData);

    if (item.authOnly && !isAuthUser) {
        return null;
    }

    return (
        <NavLink
            className={({ isActive }) => classNames(cls.link, { [cls.active]: isActive, [cls.collapsed]: collapsed })}
            to={item.path}
        >
            <item.Icon />
            <span className={cls.linkTitle}>
                {t(item.text)}
            </span>
        </NavLink>
    );
});
