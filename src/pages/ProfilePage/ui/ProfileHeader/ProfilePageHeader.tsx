import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileData, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { getProfileReadonly } from '../../../../entities/Profile/model/selectors/getProfileReadonly/getProfileReadonly';

interface ProfilePageHeaderProps {
    className?: string,
    isLoading?: boolean
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const {
        className,
        isLoading,
    } = props;
    const { t } = useTranslation();

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const isEditProfile = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            { isEditProfile && (
                <div>
                    {
                        readonly ? (
                            <Button
                                onClick={onEdit}
                                themeButton={ButtonTheme.OUTLINE}
                                disabled={isLoading}
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="16">
                                <Button
                                    onClick={onCancel}
                                    themeButton={ButtonTheme.CANCEL}
                                    disabled={isLoading}
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    onClick={onSave}
                                    themeButton={ButtonTheme.OUTLINE}
                                    disabled={isLoading}
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        )
                    }
                </div>
            )}
        </HStack>
    );
});
