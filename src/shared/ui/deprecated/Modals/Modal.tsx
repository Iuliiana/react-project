import React, { FC, ReactNode } from 'react';
import { useModal } from '@/shared/hooks/useModal/useModal';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';

export const ModalTheme = {
    CLEAR: 'clear',
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

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Modal: FC<ModalsProps> = (props) => {
    const {
        className,
        children,
        onClose,
        isOpen,
        lazy,
        modalTheme = ModalTheme.CLEAR,
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

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    cls[modalTheme],
                ])}
            >
                <Overlay onClick={closeHandler} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
