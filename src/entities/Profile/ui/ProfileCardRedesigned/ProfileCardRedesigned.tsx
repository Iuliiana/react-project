import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Input } from '@/shared/ui/redesigned/Input';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCardRedesigned.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardRedesignedLoading = memo(() => (
    <VStack max align="center">
        <HStack justify="center" className={cls.ProfileCardAvatar}>
            <Skeleton radius="50%" height={128} width={128} />
        </HStack>
        <HStack
            gap="24"
            align="start"
            max
            className={classNames('', {}, [cls.Card])}
        >
            <VStack gap="16" align="start" max>
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
            </VStack>
            <VStack gap="16" align="start" max>
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
                <Skeleton radius="48px" height={38} width="100%" />
            </VStack>
        </HStack>
    </VStack>
));

export const ProfileCardRedesignedError = memo(() => {
    const { t } = useTranslation('profile');

    return (
        <VStack
            justify="center"
            className={classNames('', { [cls.Error]: true }, [cls.Card])}
        >
            <Text
                variant="error"
                size="l"
                title={t('Произошла ошибка')}
                text={t('Попробуйте перезагрузить страницу')}
                align="center"
            />
        </VStack>
    );
});

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeFirst,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
        'data-testid': dataTestId = 'ProfileCard',
    } = props;
    const { t } = useTranslation('profile');

    return (
        <Card
            max
            variant="clear"
            className={classNames(cls.ProfileCardRedesigned, {}, [className])}
            data-testid={dataTestId}
        >
            <VStack gap="16">
                <HStack gap="24" align="start" max>
                    <VStack gap="16" align="start" max>
                        <Input
                            value={data?.first}
                            onChange={onChangeFirst}
                            labelText={t('Имя')}
                            readonly={readonly}
                            data-testid="ProfileCard.firstname"
                        />

                        <Input
                            value={data?.lastname}
                            labelText={t('Фамилия')}
                            readonly={readonly}
                            onChange={onChangeLastname}
                            data-testid="ProfileCard.lastname"
                        />

                        <Input
                            value={data?.age}
                            labelText={t('Возраст')}
                            readonly={readonly}
                            onChange={onChangeAge}
                        />

                        <Input
                            value={data?.city}
                            labelText={t('Город')}
                            readonly={readonly}
                            onChange={onChangeCity}
                        />
                    </VStack>
                    <VStack gap="16" align="start" max>
                        <Input
                            value={data?.username}
                            labelText={t('Имя пользователя')}
                            readonly={readonly}
                            onChange={onChangeUsername}
                        />
                        <Input
                            value={data?.avatar}
                            labelText={t('Ссылка на аватар')}
                            readonly={readonly}
                            onChange={onChangeAvatar}
                        />

                        <CurrencySelect
                            readonly={readonly}
                            value={data?.currency}
                            onChange={onChangeCurrency}
                        />
                        <CountrySelect
                            readonly={readonly}
                            value={data?.country}
                            onChange={onChangeCountry}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});
