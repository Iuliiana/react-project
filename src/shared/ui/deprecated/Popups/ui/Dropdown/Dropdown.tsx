import { memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/lib/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/Popups.module.scss';

export interface DropdownItem {
    content?: ReactNode;
    href?: string;
    disabled?: boolean;
    onClick?: () => void;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    direction?: DropdownDirection;
    btn: ReactNode;
}

/**
 * @deprecated
 * Этот компонент устарел и больше не поддерживается
 */
export const Dropdown = memo((props: DropdownProps) => {
    const { className, btn, items, direction = 'bottom right' } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [
                className,
                popupsCls.popup,
            ])}
        >
            <Menu.Button className={cls.btn}>{btn}</Menu.Button>
            <Menu.Items
                className={classNames(popupsCls.options, {}, menuClasses)}
            >
                {items?.map((item, index) => {
                    const content = ({ active }: { active: boolean }) => (
                        <Button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(
                                cls.MenuItem,
                                {
                                    [cls.active]: active,
                                },
                                [popupsCls.popupItem],
                            )}
                        >
                            {item.content}
                        </Button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                                // eslint-disable-next-line react/no-array-index-key
                                key={`dropdown-index-${index}`}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item
                            disabled={item.disabled}
                            // eslint-disable-next-line react/no-array-index-key
                            key={`dropdown-index-${index}`}
                            as="div"
                        >
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
