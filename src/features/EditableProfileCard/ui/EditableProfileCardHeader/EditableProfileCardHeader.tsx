import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { editableProfileCardActions } from '../../model/slices/editableProfileCardSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
    isLoading?: boolean;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className, isLoading } = props;
        const { t } = useTranslation('profile');

        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);

        const isEditProfile = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(editableProfileCardActions.setReadonly(false));
        }, [dispatch]);

        const onCancel = useCallback(() => {
            dispatch(editableProfileCardActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <HStack className={classNames('', {}, [className])}>
                <Text title={t('Профиль')} />
                {isEditProfile && (
                    <div>
                        {readonly ? (
                            <Button
                                onClick={onEdit}
                                themeButton={ButtonTheme.OUTLINE}
                                disabled={isLoading}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="16">
                                <Button
                                    onClick={onCancel}
                                    themeButton={ButtonTheme.CANCEL}
                                    disabled={isLoading}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    themeButton={ButtonTheme.OUTLINE}
                                    disabled={isLoading}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    },
);
