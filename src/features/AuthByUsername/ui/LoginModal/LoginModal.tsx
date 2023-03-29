import { FC, Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalTheme } from 'shared/ui/Modals/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void
}

export const LoginModal:FC<LoginModalProps> = (props) => {
    const { isOpen, onClose, className } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
            modalTheme={ModalTheme.CLEAR}
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
