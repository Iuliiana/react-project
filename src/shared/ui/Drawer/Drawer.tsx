import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Portal } from '../Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';

interface DrawerProps {
    className?: string,
    children: ReactNode,
    isOpen: boolean,
    onClick: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className, children, onClick, isOpen,
    } = props;

    const mods: Mods = {
        [cls.opened]: isOpen,
    };

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [className, 'app_drawer'])}>
                <Overlay onClick={onClick} />
                <div className={classNames(cls.DrawerContent)}>
                    {children}
                </div>
            </div>
        </Portal>

    );
});
