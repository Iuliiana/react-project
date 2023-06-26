import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isAdminRole, isManagerRole, userActions,
} from 'entities/User';
import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import { Text } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isAdminRole);
    const isManager = useSelector(isManagerRole);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logoutUser());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('Iuliia_App')} className={cls.mainTitle} />
                <AppLink
                    to={RoutePath.articles_create}
                    className={cls.btnNewArtile}
                    theme={AppLinkTheme.NORMAL}
                >
                    {t('Создать статью')}
                </AppLink>
                <Dropdown
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
                    className={cls.navLinks}

                />
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
