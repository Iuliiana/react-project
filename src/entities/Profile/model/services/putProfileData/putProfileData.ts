import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { Profile, ProfileErrorsCode } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const putProfileData = createAsyncThunk<Profile, void, ThunkConfig<ProfileErrorsCode[]>>(
    'profile/putProfileData',
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
            const result = await extra.api.put('/profile', formData);

            if (!result.data) {
                throw new Error('error');
            }

            return result.data;
        } catch (e) {
            return rejectWithValue([ProfileErrorsCode.SERVER_ERROR]);
        }
    },
);
