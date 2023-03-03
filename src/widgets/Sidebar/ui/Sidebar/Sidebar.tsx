import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
// import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    // const { t } = useTranslation();
    const toggleCollapsed = () => {
        setCollapsed((prevState) => !prevState);
    };
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
            <div className={cls.switcherContainer}>
                <LangSwitcher />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
