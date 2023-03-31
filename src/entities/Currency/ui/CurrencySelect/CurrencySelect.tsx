import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string,
    readonly?: boolean,
    onChange?: (value: Currency) => void,
    value?: Currency
}

const currencyList = [
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD },
    { value: Currency.EUR, text: Currency.EUR },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className, onChange, readonly, value,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            options={currencyList}
            readonly={readonly}
            onChange={onChangeHandler}
            label={t('Валюта')}
            value={value}
        />
    );
});