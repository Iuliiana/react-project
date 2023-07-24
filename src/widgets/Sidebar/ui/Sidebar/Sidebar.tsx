import React, {
    memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = memo(({ className } :SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemsList = useSelector(getSidebarItems);
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(() => (
        sidebarItemsList
            .map((item) => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            ))
    ), [collapsed, sidebarItemsList]);

    return (
        <aside
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

            <VStack gap="16" align="end" role="navigation">
                {itemsList}
            </VStack>

            <div className={cls.switcherContainer}>
                <LangSwitcher short={!collapsed} />
                <ThemeSwitcher />
            </div>
        </aside>
    );
});
