import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { FeatureFlags } from '../../types/featureFlags';
import { updateFeatureFlagMutation } from '../api/featuresApi';
import { getAllFeaturesFlags } from '../lib/setGetFeaturesFlags';

interface UpdateFeatureFlagOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeaturesFlag = createAsyncThunk<
    void,
    UpdateFeatureFlagOptions,
    ThunkConfig<string>
>('users/updateFeatureFlag', async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
        if (!userId) {
            return rejectWithValue('error query, no user data available');
        }

        await dispatch(
            updateFeatureFlagMutation({
                userId,
                features: { ...getAllFeaturesFlags(), ...newFeatures },
            }),
        );
        window.location.reload();
        return undefined;
    } catch (e) {
        return rejectWithValue('error query users updateFeatureFlag');
    }
});
