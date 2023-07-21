import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';
import {
    getUserAuthData,
} from '@/entities/User';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './NavBar.module.scss';
import { RoutePath } from '@/shared/const/route';

interface NavBarProps {
    className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
                <HStack gap="16" className={cls.navLinks}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
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
