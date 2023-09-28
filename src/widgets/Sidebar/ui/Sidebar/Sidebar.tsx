import React, { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import Arrow from '@/shared/assets/icons/new/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonSize,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemsList = useSelector(getSidebarItems);
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="test-sidebar"
                    className={classNames(
                        cls.SidebarRedesigned,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? '60' : '40'}
                        className={cls.AppLogo}
                    />
                    <Button
                        data-testid="test-button-sidebar"
                        onClick={toggleCollapsed}
                        className={classNames(cls.collapsedButton)}
                    >
                        <Icon
                            className={classNames(cls.arrow, {
                                [cls.isButtonCollapsed]: collapsed,
                            })}
                            Svg={Arrow}
                        />
                    </Button>

                    <VStack
                        className={cls.SidebarListItems}
                        gap="8"
                        role="navigation"
                    >
                        {itemsList}
                    </VStack>

                    <div className={cls.switcherContainer}>
                        <ThemeSwitcher />
                        <LangSwitcher short={collapsed} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="test-sidebar"
                    className={classNames(
                        cls.Sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <ButtonDeprecated
                        type="button"
                        data-testid="test-button-sidebar"
                        onClick={toggleCollapsed}
                        className={classNames(cls.collapsedButton)}
                        themeButton={ButtonTheme.BACKGROUND}
                        square
                        size={ButtonSize.L}
                    >
                        {collapsed ? '<' : '>'}
                    </ButtonDeprecated>

                    <VStack gap="16" align="end" role="navigation">
                        {itemsList}
                    </VStack>

                    <div className={cls.switcherContainer}>
                        <LangSwitcher short={!collapsed} />
                        <ThemeSwitcher />
                    </div>
                </aside>
            }
        />
    );
});
