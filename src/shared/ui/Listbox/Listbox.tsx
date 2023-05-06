import { Fragment } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/lib/types/ui';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';
import cls from './Listbox.module.scss';

export interface ListboxOption {
    value: string;
    text: string;
    disabled?: boolean;
}

const dropdownDirectionMap: Record<DropdownDirection, string> = {
    'top left': cls.topLeft,
    'top right': cls.topRight,
    'bottom right': cls.bottomRight,
    'bottom left': cls.bottomLeft,
    bottom: cls.bottom,
};

interface ListboxProps {
    className?: string,
    label?: string,
    value?: string,
    defaultValue?: string,
    readonly?: boolean,
    onChange?: (value: string) => void,
    options?: ListboxOption[],
    direction?: DropdownDirection,
}

export const Listbox = (props: ListboxProps) => {
    const {
        className,
        label,
        value,
        readonly,
        onChange,
        options,
        defaultValue,
        direction = 'bottom',
    } = props;

    const optionClasses = [
        dropdownDirectionMap[direction],
    ];

    return (
        <HStack gap="4" justify="start">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                value={value}
                onChange={onChange}
                disabled={readonly}
                className={classNames(cls.Listbox, {}, [className])}
            >
                <HListbox.Button as="div">
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListbox.Button>

                <HListbox.Options className={classNames(cls.options, {}, optionClasses)}>
                    {options?.map((option) => (
                        <HListbox.Option
                            key={option.value}
                            value={option.value}
                            as={Fragment}
                            disabled={option.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.ListboxItem,
                                        {
                                            [cls.active]: active,
                                            [cls.selected]: selected,
                                            [cls.disabled]: option.disabled,
                                        },
                                    )}
                                >
                                    {option.text}
                                </li>
                            )}
                        </HListbox.Option>
                    ))}
                </HListbox.Options>
            </HListbox>
        </HStack>
    );
};
