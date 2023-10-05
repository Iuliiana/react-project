import { FC, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal, ModalTheme } from '@/shared/ui/Modals';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { isOpen, onClose, className } = props;

    // fixme
    const loader = (
        // @ts-ignore
        <ToggleFeatureFlag feature="isAppRedesigned" on="" off={<Loader />} />
    );
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames('', {}, [className])}
            lazy
            modalTheme={ModalTheme.CLEAR}
        >
            <Suspense fallback={loader}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
