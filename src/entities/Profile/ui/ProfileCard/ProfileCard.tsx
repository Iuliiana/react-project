import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Text, TextAlign, TextSize, TextTheme,
} from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Loader } from 'shared/ui/Loader/Loader';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/ProfileSchema';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {

    data?: Profile,
    readonly?:boolean,
    isLoading?: boolean,
    error?: string,
    className?: string,
    onChangeFirst?: (value:string) => void,
    onChangeLastname?: (value:string) => void,
    onChangeAge?: (value:string) => void,
    onChangeCity?: (value:string) => void,
    onChangeUsername?: (value:string) => void,
    onChangeAvatar?: (value:string) => void,
    onChangeCurrency?: (value:Currency) => void,
    onChangeCountry?: (value:Country) => void,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirst,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    textTheme={TextTheme.ERROR}
                    size={TextSize.L}
                    title={t('Произошла ошибка')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.avatar}>
                    {data?.avatar && <Avatar alt={t('Фото')} pic={data?.avatar} size={150} />}
                </div>
                <div className={cls.fields}>
                    <Input
                        className={cls.input}
                        value={data?.first}
                        onChange={onChangeFirst}
                        placeholder={t('Ваше имя')}
                        readonly={readonly}
                    />

                    <Input
                        className={cls.input}
                        value={data?.lastname}
                        placeholder={t('Ваша фамилия')}
                        readonly={readonly}
                        onChange={onChangeLastname}
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

                </div>

            </div>
        </div>
    );
};
