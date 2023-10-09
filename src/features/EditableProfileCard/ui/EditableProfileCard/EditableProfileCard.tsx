import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileCard } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect/useInitialEffect';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { TestsProps } from '@/shared/lib/types/tests';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useProfileCardError } from '../../model/lib/hooks/useProfileCardError';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from '../../model/slices/editableProfileCardSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps extends TestsProps {
    className?: string;
    id: string;
}

const asyncReducers: ReducersList = {
    editableProfileCard: editableProfileCardReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();
    const data = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const { validateErrors, errorsMap } = useProfileCardError();
    const { t } = useTranslation('profile');

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirst = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.setFormData({ first: value || '' }),
            );
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.setFormData({
                    lastname: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            const age = value?.trim().replace('[^0-9]', '');
            dispatch(
                editableProfileCardActions.setFormData({ age: Number(age) }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.setFormData({ city: value || '' }),
            );
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.setFormData({
                    username: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.setFormData({ avatar: value || '' }),
            );
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (value?: Currency) => {
            dispatch(
                editableProfileCardActions.setFormData({ currency: value }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (value?: Country) => {
            dispatch(
                editableProfileCardActions.setFormData({ country: value }),
            );
        },
        [dispatch],
    );

    if (error && !isLoading) {
        return <Text align="center" title={t('Профиль не найден')} />;
    }

    return (
        <DynamicModuleLoader
            asyncReducers={asyncReducers}
            removeAfterUnmount={false}
        >
            <EditableProfileCardHeader
                isLoading={isLoading}
                avatar={data?.avatar}
            />
            {validateErrors &&
                validateErrors.map((error) => (
                    <ToggleFeatureFlag
                        key={errorsMap[error]}
                        feature="isAppRedesigned"
                        on={
                            <Text
                                variant="error"
                                text={errorsMap[error]}
                                key={errorsMap[error]}
                                data-testid="EditableProfileCard.Error"
                            />
                        }
                        off={
                            <TextDeprecated
                                textTheme={TextTheme.ERROR}
                                text={errorsMap[error]}
                                key={errorsMap[error]}
                                data-testid="EditableProfileCard.Error"
                            />
                        }
                    />
                ))}
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
