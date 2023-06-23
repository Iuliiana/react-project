import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/lib/types/ui';
import { Button } from '../Button/Button';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';

export interface DropdownItem {
    content?: ReactNode;
    href?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'top left': cls.topLeft,
    'top right': cls.topRight,
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    bottom: cls.bottom,
};

interface DropdownProps {
    className?: string,
    items: DropdownItem[],
    direction?: DropdownDirection,
    btn: ReactNode,
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className, btn, items, direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.btn}>
                {btn}
            </Menu.Button>
            <Menu.Items className={classNames(cls.MenuItems, {}, menuClasses)}>
                {
                    items?.map((item, index) => {
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
                                )}
                            >
                                {item.content}
                            </Button>
                        );
                        if (item.href) {
                            return (
                                // eslint-disable-next-line react/no-array-index-key
                                <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={index}>
                                    {content}
                                </Menu.Item>
                            );
                        }

                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <Menu.Item disabled={item.disabled} key={index} as="div">
                                {content}
                            </Menu.Item>
                        );
                    })
                }
            </Menu.Items>
        </Menu>
    );
});
