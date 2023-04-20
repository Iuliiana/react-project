import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logoutUser());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('MyApp')} className={cls.mainTitle} />
                <AppLink
                    to={RoutePath.articles_create}
                    className={cls.btnNewArtile}
                    theme={AppLinkTheme.NORMAL}
                >
                    {t('Создать статью')}
                </AppLink>
                <div className={cls.navLinks}>
                    <Button
                        onClick={onLogoutClick}
                        type="button"
                        themeButton={ButtonTheme.HIGHLIGHT}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                {
                    isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                }
                <Button
                    onClick={onShowModal}
                    type="button"
                    themeButton={ButtonTheme.HIGHLIGHT}
                >
                    {t('Войти')}
                </Button>
            </div>
        </header>

    );
});
