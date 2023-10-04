import { ReactElement } from 'react';
import { FeatureFlags } from '../../../types/featureFlags';
import { getFeaturesFlags } from '../../lib/setGetFeaturesFlags';

interface ToggleFeatureFlagProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}
export const ToggleFeatureFlag = ({
    off,
    on,
    feature,
}: ToggleFeatureFlagProps) => {
    if (getFeaturesFlags(feature)) {
        return on;
    }
    return off;
};
