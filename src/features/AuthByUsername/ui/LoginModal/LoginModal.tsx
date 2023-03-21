import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal, ModalTheme } from 'shared/ui/Modals/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
