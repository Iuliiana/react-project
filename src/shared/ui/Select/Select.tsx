import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TestsProps } from '@/shared/lib/types/tests';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    text: string;
}

interface SelectProps<T extends string> extends TestsProps {
    className?: string,
    label?: string,
    value?: T,
    readonly?: boolean,
    onChange?: (value: T) => void,
    options?: SelectOption<T>[]

}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        value,
        readonly,
        onChange,
        options,
        'data-testid': dataTestId = 'Select',
    } = props;

    const optionsList = useMemo(() => options?.map((optionItem) => (
        <option
            className={cls.option}
            value={optionItem.value}
            key={optionItem.value}
        >
            {optionItem.text}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <div className={classNames(cls.WrapperContainer, {}, [className])}>
            {label && (
                <span className={cls.label}>
                    {`${label}>`}
                </span>
            )}
            <div className={cls.SelectWrapper}>
                <select
                    className={cls.select}
                    onChange={onChangeHandler}
                    disabled={readonly}
                    value={value}
                    data-testid={dataTestId}
                >
                    {optionsList}
                </select>
            </div>
        </div>
    );
};
