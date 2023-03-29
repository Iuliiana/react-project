import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    // const error = useSelector(getProfileError);
    // const isloading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button className={cls.editBtn}>{t('Редактировать')}</Button>
            </div>

            <div className={cls.content}>
                <Input
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Ваше имя')}
                />

                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия')}
                />
            </div>

        </div>
    );
};
