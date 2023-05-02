import React, {
    FC, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

export const ModalTheme = {
    CLEAR: 'clear',
} as const;

type ValueOf<T> = T[keyof T];
// type ModalTheme = typeof ModalTheme[keyof typeof ModalTheme]
type ModalThemeType = ValueOf<typeof ModalTheme>;
interface ModalsProps {
    className?: string,
    children?: ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean,
    modalTheme?: ModalThemeType
}

const ANIMATION_DELAY = 300;

export const Modal:FC<ModalsProps> = (props) => {
    const {
        className, children, onClose, isOpen, lazy, modalTheme = ModalTheme.CLEAR,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onContentClick = (event:React.MouseEvent) => {
        event.stopPropagation();
    };

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className, cls[modalTheme]])}>
                <div
                    className={cls.overlay}
                    onClick={closeHandler}
                >
                    <div
                        className={cls.content}
                        onClick={(event) => onContentClick(event)}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
