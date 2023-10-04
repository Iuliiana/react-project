import { getFeaturesFlags } from './setGetFeaturesFlags';
import { FeatureFlags } from '../../types/featureFlags';

interface toggleFeatureFlagProps<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}
export function toggleFeatureFlag<T>({
    off,
    on,
    name,
}: toggleFeatureFlagProps<T>): T {
    if (getFeaturesFlags(name)) {
        return on();
    }
    return off();
}
