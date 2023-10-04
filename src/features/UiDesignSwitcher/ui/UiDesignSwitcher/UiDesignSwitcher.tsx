import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeaturesFlags } from '@/shared/lib/features';
import { updateFeaturesFlag } from '@/shared/lib/features/services/updateFeaturesFlag';
import { RadioGroup } from '@/shared/ui/RadioGroup';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack } from '@/shared/ui/Stack';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isNewDesign = getFeaturesFlags('isAppRedesigned');
    const userData = useSelector(getUserAuthData);
    const [isLoading, setIsLoading] = useState(false);

    const options = [
        {
            value: 'new',
            text: t('Новый дизайн'),
        },
        {
            value: 'old',
            text: t('Старый дизайн'),
        },
    ];

    const onChange = async (value: string) => {
        if (userData) {
            setIsLoading(true);
            await dispatch(
                updateFeaturesFlag({
                    userId: userData.id,
                    newFeatures: { isAppRedesigned: value === 'new' },
                }),
            );
            setIsLoading(false);
        }
    };

    return (
        <HStack
            max
            align="center"
            gap="8"
            justify="start"
            className={classNames('', {}, [className])}
        >
            <Text text={t('Изменить дизайн')} marginBottom="0" />
            {isLoading ? (
                <Skeleton width={300} height={50} />
            ) : (
                <RadioGroup
                    value={isNewDesign ? 'new' : 'old'}
                    options={options}
                    onChange={onChange}
                />
            )}
        </HStack>
    );
});
