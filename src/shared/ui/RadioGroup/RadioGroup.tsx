import { Fragment, memo, useMemo } from 'react';
import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RadioGroup.module.scss';

interface RadioOption<T extends string> {
    value: T;
    text: string;
    disabled?: boolean;
}

type RadioDirection = 'vertical' | 'horizontal';

interface RadioGroupProps<T extends string> {
    className?: string;
    value?: T;
    options?: RadioOption<T>[];
    label?: string;
    readonly?: boolean;
    onChange?: (value: T) => void;
    direction?: RadioDirection;
}

export const RadioGroup = memo(
    <T extends string>(props: RadioGroupProps<T>) => {
        const {
            className,
            value,
            options,
            label,
            onChange,
            readonly,
            direction = 'horizontal',
        } = props;
        const currentValue = useMemo(
            () => options?.find((option) => option.value === value),
            [options, value],
        );

        return (
            <HRadioGroup
                value={currentValue?.value}
                onChange={onChange}
                disabled={readonly}
                className={classNames(cls.RadioGroup, {}, [
                    className,
                    cls[direction],
                ])}
            >
                <HRadioGroup.Label>{label}</HRadioGroup.Label>

                {options?.map((option) => (
                    <HRadioGroup.Option
                        key={option.value}
                        value={option.value}
                        disabled={option?.disabled}
                        as={Fragment}
                    >
                        {({ active, checked }) => (
                            <li
                                className={classNames(cls.RadioGroupOption, {
                                    [cls.active]: active,
                                    [cls.checked]: checked,
                                })}
                            >
                                {option.text}
                            </li>
                        )}
                    </HRadioGroup.Option>
                ))}
            </HRadioGroup>
        );
    },
);
