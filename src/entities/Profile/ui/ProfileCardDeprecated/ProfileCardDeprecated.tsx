import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Input } from '@/shared/ui/deprecated/Input';
import { Loader } from '@/shared/ui/deprecated/Loader';
import {
    Text,
    TextAlign,
    TextSize,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardDeprecatedLoading = memo(() => (
    <VStack justify="center" className={classNames('', {}, [cls.minH])}>
        <Loader />
    </VStack>
));

export const ProfileCardDeprecatedError = memo(() => {
    const { t } = useTranslation('profile');

    return (
        <VStack justify="center" className={classNames('', {}, [cls.minH])}>
            <Text
                textTheme={TextTheme.ERROR}
                size={TextSize.L}
                title={t('Произошла ошибка')}
                text={t('Попробуйте перезагрузить страницу')}
                align={TextAlign.CENTER}
            />
        </VStack>
    );
});

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
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
        <div
            className={classNames('', {}, [className])}
            data-testid={dataTestId}
        >
            <div className={cls.content}>
                <HStack justify="center">
                    {data?.avatar && (
                        <Avatar alt={t('Фото')} pic={data?.avatar} size={150} />
                    )}
                </HStack>
                <VStack gap="16" align="start" max>
                    <Input
                        className={cls.input}
                        value={data?.first}
                        onChange={onChangeFirst}
                        placeholder={t('Ваше имя')}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />

                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        readonly={readonly}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.lastname"
                    />

                    <Input
                        className={cls.input}
                        value={data?.age}
                        placeholder={t('Возраст')}
                        readonly={readonly}
                        onChange={onChangeAge}
                    />

                    <Input
                        className={cls.input}
                        value={data?.city}
                        placeholder={t('Город')}
                        readonly={readonly}
                        onChange={onChangeCity}
                    />

                    <Input
                        className={cls.input}
                        value={data?.username}
                        placeholder={t('Логин')}
                        readonly={readonly}
                        onChange={onChangeUsername}
                    />

                    <Input
                        className={cls.input}
                        value={data?.avatar}
                        placeholder={t('Фото')}
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
            </div>
        </div>
    );
});
