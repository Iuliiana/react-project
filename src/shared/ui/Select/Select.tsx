import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    text: string;
}

interface SelectProps {
    className?: string,
    label?: string,
    value?: string,
    readonly?: boolean,
    onChange?: (value: string) => void,
    options?: SelectOption[]

}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        value,
        readonly,
        onChange,
        options,
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
        onChange?.(e.target.value);
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
                >
                    {optionsList}
                </select>
            </div>
        </div>
    );
});
