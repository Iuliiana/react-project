import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();
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
