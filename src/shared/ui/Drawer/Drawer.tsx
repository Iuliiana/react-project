import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useModal } from 'shared/hooks/useModal/useModal';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClose: () => void,
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, onClose, isOpen, lazy,
    } = props;

    const {
        isClosing,
        closeHandler,
        isMounted,
    } = useModal({
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
            <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={closeHandler} />
                <div className={classNames(cls.DrawerContent)}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
