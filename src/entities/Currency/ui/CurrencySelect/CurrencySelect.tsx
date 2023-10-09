import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { DropdownDirection } from '@/shared/lib/types/ui';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
    value?: Currency;
    direction?: DropdownDirection;
}

const currencyList = [
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD },
    { value: Currency.EUR, text: Currency.EUR },
];
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        onChange,
        readonly,
        value,
        direction = 'top right',
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    const propsListbox = {
        className: classNames('', {}, [className]),
        options: currencyList,
        readonly,
        onChange: onChangeHandler,
        label: t('Валюта'),
        value,
        direction,
        defaultValue: value,
    };
    return (
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={<Listbox {...propsListbox} />}
            off={<ListboxDeprecated {...propsListbox} />}
        />
    );
});
