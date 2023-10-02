import React, { Fragment, useMemo } from 'react';
import { Listbox as HListbox } from '@headlessui/react';
import Arrow from '@/shared/assets/icons/new/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestsProps } from '@/shared/lib/types/tests';
import { DropdownDirection } from '@/shared/lib/types/ui';
import cls from './Listbox.module.scss';
import { HStack } from '../../../../Stack';
import { Button } from '../../../Button';
import { mapDirectionClass } from '../../styles/consts';
import popupsCls from '../../styles/Popups.module.scss';

export interface ListboxOption<T extends string> {
    value: T;
    text: string;
    disabled?: boolean;
}

interface ListboxProps<T extends string> extends TestsProps {
    className?: string;
    label?: string;
    value?: T;
    defaultValue?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
    options?: ListboxOption<T>[];
    direction?: DropdownDirection;
    isArrow?: boolean;
}

export const Listbox = <T extends string>(props: ListboxProps<T>) => {
    const {
        className,
        label,
        value,
        readonly,
        onChange,
        options,
        defaultValue,
        direction = 'bottom',
        isArrow = true,
    } = props;

    const optionClasses = [mapDirectionClass[direction]];
    const currentValue = useMemo(
        () => options?.find((option) => option.value === value),
        [options, value],
    );

    return (
        <HStack gap="4" justify="start">
            {label && <span>{`${label}>`}</span>}
            <HListbox
                as="div"
                value={currentValue?.text}
                onChange={onChange}
                disabled={readonly}
                className={classNames(cls.Listbox, {}, [
                    className,
                    popupsCls.popup,
                ])}
            >
                <HListbox.Button as={React.Fragment}>
                    {({ open }) => (
                        <Button
                            className={classNames(cls.ListboxButton, {
                                [cls.btnOpen]: open,
                            })}
                            disabled={readonly}
                        >
                            {currentValue?.text ?? defaultValue}
                            {isArrow && (
                                <Arrow
                                    className={classNames(
                                        cls.ListboxButtonArrow,
                                        { [cls.open]: open },
                                    )}
                                />
                            )}
                        </Button>
                    )}
                </HListbox.Button>

                <HListbox.Options
                    className={classNames(popupsCls.options, {}, optionClasses)}
                >
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
                                        [popupsCls.popupItem],
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
