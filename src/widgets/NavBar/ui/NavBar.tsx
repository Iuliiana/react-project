import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                <AppLink to="/" className={cls.navLinksItem}>
                    {t('Главная')}
                </AppLink>
                <AppLink to="/about">
                    {t('О нас')}
                </AppLink>
            </div>
        </div>

    );
};
