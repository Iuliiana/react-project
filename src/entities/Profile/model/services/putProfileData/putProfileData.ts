import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/ProfileSchema';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const putProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/putProfileData',
    async (_, thunkAPI) => {
        const {
            rejectWithValue, extra, getState,
        } = thunkAPI;
        const formData = getProfileForm(getState());

        try {
            const result = await extra.api.put('/profile', formData);

            if (!result.data) {
                throw new Error('error');
            }

            return result.data;
        } catch (e) {
            return rejectWithValue('Ошибка обновления данных');
        }
    },
);
