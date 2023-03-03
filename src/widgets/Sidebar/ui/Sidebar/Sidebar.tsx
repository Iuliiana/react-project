import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import HomePageIcon from 'shared/assets/icons/home-page-icon.svg';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
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

            <div className={cls.items}>
                <AppLink to={RoutePath.main} className={cls.link}>
                    <HomePageIcon />
                    <span className={cls.linkTitle}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink to={RoutePath.about} className={cls.link}>
                    <AboutPageIcon />
                    <span className={cls.linkTitle}>
                        {t('О нас')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.switcherContainer}>
                <LangSwitcher short={!collapsed} />
                <ThemeSwitcher />
            </div>
        </div>
    );
};
