import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
        const result = await extra.api.get<Profile>(`/profile/${profileId}`);

        if (!result.data) {
            throw new Error('error');
        }

        return result.data;
    } catch (e) {
        return rejectWithValue('error profile query');
    }
});
