import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { ProfileErrorsCode } from '../../consts/profileErrorsCodeConsts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ProfileErrorsCode[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;
        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);
        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const result = await extra.api.put(`/profile/${formData?.id}`, formData);

            if (!result.data) {
                throw new Error('error');
            }

            return result.data;
        } catch (e) {
            return rejectWithValue([ProfileErrorsCode.SERVER_ERROR]);
        }
    },
);
