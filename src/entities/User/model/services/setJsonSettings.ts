import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../api/userApi';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { JsonSettings } from '../types/jsonSettings';

export const setJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('users/setJsonSettings', async (jsonSettings, thunkAPI) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;
    const userData = getUserAuthData(getState());

    try {
        if (!userData?.id) {
            return rejectWithValue('error query, no user data available');
        }
        const result = await dispatch(
            setJsonSettingsMutation({
                userId: userData.id,
                jsonSettings: { ...userData.jsonSettings, ...jsonSettings },
            }),
        ).unwrap();

        if (!result.jsonSettings) {
            throw new Error('error');
        }

        return result.jsonSettings;
    } catch (e) {
        return rejectWithValue('error query users setJsonSettings');
    }
});
