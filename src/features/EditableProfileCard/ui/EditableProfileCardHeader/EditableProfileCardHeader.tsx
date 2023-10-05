import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getFeaturesFlags, ToggleFeatureFlag } from '@/shared/lib/features';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text } from '@/shared/ui/deprecated/Text';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack } from '@/shared/ui/Stack';
import cls from './EditableProfileCardHeader.module.scss';
import { useEditableProfile } from '../../model/lib/hooks/useEditableProfile';

export interface EditableProfileCardHeaderProps {
    className?: string;
    isLoading?: boolean;
    avatar?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className, isLoading, avatar } = props;
        const { t } = useTranslation('profile');
        const { isEditProfile, onEdit, readonly, onSave, onCancel } =
            useEditableProfile();
        const isArrRedisigned = getFeaturesFlags('isAppRedesigned');

        const avatarRender = (
            <HStack justify="center">
                {avatar && <Avatar alt={t('Фото')} src={avatar} size={128} />}
            </HStack>
        );

        if (!isEditProfile) {
            if (isArrRedisigned) {
                return avatarRender;
            }
            return null;
        }

        if (isLoading) {
            return null;
        }

        return (
            <ToggleFeatureFlag
                feature="isAppRedesigned"
                on={
                    <div className={cls.wrapper}>
                        <div className={cls.left}>
                            {!readonly && (
                                <Button
                                    variant="cancel"
                                    onClick={onCancel}
                                    disabled={isLoading}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                            )}
                        </div>
                        <div className={cls.avatar}>{avatarRender}</div>
                        <div className={cls.righ}>
                            {readonly ? (
                                <Button
                                    variant="outline"
                                    onClick={onEdit}
                                    disabled={isLoading}
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать')}
                                </Button>
                            ) : (
                                <Button
                                    variant="save"
                                    onClick={onSave}
                                    disabled={isLoading}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            )}
                        </div>
                    </div>
                }
                off={
                    <HStack className={classNames('', {}, [className])}>
                        <Text title={t('Профиль')} />
                        {isEditProfile && (
                            <div>
                                {readonly ? (
                                    <ButtonDeprecated
                                        onClick={onEdit}
                                        themeButton={ButtonTheme.OUTLINE}
                                        disabled={isLoading}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать')}
                                    </ButtonDeprecated>
                                ) : (
                                    <HStack gap="16">
                                        <ButtonDeprecated
                                            onClick={onCancel}
                                            themeButton={ButtonTheme.CANCEL}
                                            disabled={isLoading}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                        >
                                            {t('Отменить')}
                                        </ButtonDeprecated>
                                        <ButtonDeprecated
                                            onClick={onSave}
                                            themeButton={ButtonTheme.OUTLINE}
                                            disabled={isLoading}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                        >
                                            {t('Сохранить')}
                                        </ButtonDeprecated>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                }
            />
        );
    },
);
