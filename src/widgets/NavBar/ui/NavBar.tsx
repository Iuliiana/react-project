import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modals/Modal';
import { Button } from 'shared/ui/Button/Button';
import cls from './NavBar.module.scss';

interface NavBarProps {
    className?: string
}

export const NavBar = (props: NavBarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onClickAuthModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.navLinks}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModal} onClose={onClickAuthModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi delectus rem tenetur veniam.
                </Modal>
                <Button
                    onClick={onClickAuthModal}
                    type="button"
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>

    );
};
