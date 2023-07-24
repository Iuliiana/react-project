import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Text, TextTheme } from '@/shared/ui/Text';
import { ProfileCard } from '@/entities/Profile';
import { ProfileErrorsCode } from '../../model/consts/profileErrorsCodeConsts';
import {
    EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from '../../model/slices/editableProfileCardSlice';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
    getProfileValidateErrors,
} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';

interface EditableProfileCardProps {
    className?: string,
    id: string
}

const asyncReducers: ReducersList = {
    editableProfileCard: editableProfileCardReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirst = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.setFormData({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.setFormData({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        const age = value?.trim().replace('[^0-9]', '');
        dispatch(editableProfileCardActions.setFormData({ age: Number(age) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.setFormData({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.setFormData({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.setFormData({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((value?: Currency) => {
        dispatch(editableProfileCardActions.setFormData({ currency: value }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value?: Country) => {
        dispatch(editableProfileCardActions.setFormData({ country: value }));
    }, [dispatch]);

    const errorsMap = {
        [ProfileErrorsCode.INCORRECT_USERDATA]: t('Введите корректные пользовательские данные'),
        [ProfileErrorsCode.INCORRECT_AGE]: t('Введите корректный возраст'),
        [ProfileErrorsCode.INCORRECT_CITY]: t('Введите корректный город'),
        [ProfileErrorsCode.INCORRECT_USERNAME]: t('Введите корректный логин'),
        [ProfileErrorsCode.EMPTY_DATA]: t('Вы пытаетесь отправить пустой профиль'),
        [ProfileErrorsCode.SERVER_ERROR]: t('Ошибка при обновлении данных. Попробуйте ещё раз.'),
    };

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <EditableProfileCardHeader isLoading={isLoading} />
            {
                validateErrors && validateErrors.map((error) => (
                    <Text
                        textTheme={TextTheme.ERROR}
                        text={errorsMap[error]}
                        key={errorsMap[error]}
                        data-testid="EditableProfileCard.Error"
                    />
                ))
            }
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
                className={classNames('', {}, [className])}
                data-testid="EditableProfileCard.ProfileCard"
            />
        </DynamicModuleLoader>
    );
});
