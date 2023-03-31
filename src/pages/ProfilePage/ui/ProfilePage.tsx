import { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    ProfileErrorsCode,
    ProfilePageHeader,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
    className?: string,
}

const asyncReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = memo((props:ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const errorsMap = {
        [ProfileErrorsCode.INCORRECT_USERDATA]: t('Введите корректные пользовательские данные'),
        [ProfileErrorsCode.INCORRECT_AGE]: t('Введите корректный возраст'),
        [ProfileErrorsCode.INCORRECT_CITY]: t('Введите корректный город'),
        [ProfileErrorsCode.INCORRECT_USERNAME]: t('Введите корректный логин'),
        [ProfileErrorsCode.EMPTY_DATA]: t('Вы пытаетесь отправить пустой профиль'),
        [ProfileErrorsCode.SERVER_ERROR]: t('Ошибка при обновлении данных. Попробуйте ещё раз.'),
    };

    const onChangeFirst = useCallback((value?: string) => {
        dispatch(profileActions.setFormData({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.setFormData({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const age = value?.trim().replace('[^0-9]', '');
        dispatch(profileActions.setFormData({ age: Number(age) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.setFormData({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.setFormData({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.setFormData({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(profileActions.setFormData({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(profileActions.setFormData({ country: value }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            {
                validateErrors && validateErrors.map((error) => (
                    <Text textTheme={TextTheme.ERROR} text={errorsMap[error]} key={errorsMap[error]} />
                ))
            }

            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                <ProfileCard
                    data={data}
                    readonly={readonly}
                    error={error}
                    isLoading={isLoading}
                    onChangeFirst={onChangeFirst}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}

                />
            </div>
        </DynamicModuleLoader>

    );
});
export default ProfilePage;
