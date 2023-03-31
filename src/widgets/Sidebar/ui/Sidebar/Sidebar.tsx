import React, {
    memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = memo(({ className } :SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(() => (
        SidebarItemsList
            .map((item) => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            ))
    ), [collapsed]);

    return (
        <div
            data-testid="test-sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <Button
                type="button"
                data-testid="test-button-sidebar"
                onClick={toggleCollapsed}
                className={classNames(cls.collapsedButton)}
                themeButton={ButtonTheme.BACKGROUND}
                square
                size={ButtonSize.L}
            >
                { collapsed ? '<' : '>'}
            </Button>

            <div className={cls.items}>
                {itemsList}
            </div>

            <div className={cls.switcherContainer}>
                <LangSwitcher short={!collapsed} />
                <ThemeSwitcher />
            </div>
        </div>
    );
});
