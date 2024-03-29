import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/lib/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/Popups.module.scss';

interface PopoverProps {
    className?: string;
    children: ReactNode;
    direction?: DropdownDirection;
    btn: ReactNode;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Popover = memo((props: PopoverProps) => {
    const { className, children, btn, direction = 'bottom left' } = props;

    const mapClasses = [
        mapDirectionClass[direction],
        popupsCls.options,
        className,
    ];

    return (
        <HPopover className={classNames('', {}, [popupsCls.popup])}>
            <HPopover.Button className={classNames(cls.button)} as="div">
                {btn}
            </HPopover.Button>

            <HPopover.Panel className={classNames(cls.panel, {}, mapClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
