import React, { FC, ReactNode } from 'react';
import { useModal } from '@/shared/hooks/useModal/useModal';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { toggleFeatureFlag } from '@/shared/lib/features';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

export const ModalTheme = {
    CLEAR: 'clear',
    STANDARD: 'standard',
} as const;

type ValueOf<T> = T[keyof T];
// type ModalTheme = typeof ModalTheme[keyof typeof ModalTheme]
type ModalThemeType = ValueOf<typeof ModalTheme>;
interface ModalsProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    modalTheme?: ModalThemeType;
}

export const Modal: FC<ModalsProps> = (props) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
        modalTheme = 'standard',
    } = props;

    const { isClosing, closeHandler, isMounted } = useModal({
        isOpen,
        onClose,
        animationDelay: 300,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const modalClass = toggleFeatureFlag({
        name: 'isAppRedesigned',
        on: () => cls.modalRedesigned,
        off: () => cls.modalOld,
    });

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    cls[modalTheme],
                    modalClass,
                ])}
            >
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
