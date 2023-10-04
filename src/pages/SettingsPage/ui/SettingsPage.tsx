import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';

export interface SettinsgPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettinsgPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <VStack
            max
            align="start"
            gap="16"
            justify="start"
            className={classNames('', {}, [className])}
        >
            <Text title={t('Настройки пользователя')} />
            <UiDesignSwitcher />
        </VStack>
    );
});

export default SettingsPage;
