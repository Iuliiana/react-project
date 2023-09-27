import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { getRouteArticlesCreate } from '@/shared/const/route';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { AppLink, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/Stack';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string;
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
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                off={
                    <header className={classNames(cls.Navbar, {}, [className])}>
                        <Text
                            title={t('Iuliia_App')}
                            className={cls.mainTitle}
                        />
                        <AppLink
                            to={getRouteArticlesCreate()}
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
                }
                on={
                    <header
                        className={classNames(cls.NavbarRedesigned, {}, [
                            className,
                        ])}
                    >
                        <HStack gap="16" className={cls.navLinks}>
                            <NotificationButton />
                            <AvatarDropdown />
                        </HStack>
                    </header>
                }
            />
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
                )}
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
