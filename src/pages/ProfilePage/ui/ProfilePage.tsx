import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
    className?: string,
}

const asyncReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo((props:ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicModuleLoader>

    );
});
export default ProfilePage;
