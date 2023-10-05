import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../services/updateProfileData/updateProfileData';
import { editableProfileCardActions } from '../../slices/editableProfileCardSlice';

export const useEditableProfile = () => {
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

    return {
        readonly,
        isEditProfile,
        onEdit,
        onCancel,
        onSave,
    };
};
