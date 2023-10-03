// import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Listbox as ListboxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Listbox } from '@/shared/ui/redesigned/Popups';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    readonly?: boolean;
    onChange?: (value: Country) => void;

    value?: Country;
}

const countryList = [
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Canada, text: Country.Canada },
];
export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, onChange, readonly, value } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    const propsListbox = {
        className: classNames('', {}, [className]),
        options: countryList,
        readonly,
        onChange: onChangeHandler,
        label: t('Страна'),
        value,
        direction: 'top right' as const,
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
