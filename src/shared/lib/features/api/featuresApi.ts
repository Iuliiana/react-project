import { rtkApi } from '@/shared/api/rtkApi';
import { FeatureFlags } from '../../types/featureFlags';

interface UpdateFeatureFlagsOptions {
    userId: string;
    features: Partial<FeatureFlags>;
}

const featuresApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateFeatureFlag: build.mutation<void, UpdateFeatureFlagsOptions>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { features },
            }),
        }),
    }),
    overrideExisting: false,
});

export const updateFeatureFlagMutation =
    featuresApi.endpoints.updateFeatureFlag.initiate;
