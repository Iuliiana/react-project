import { FeatureFlags } from '../types/featureFlags';

let featuresFlags: FeatureFlags;
export function setFeaturesFlags(newFlags?: FeatureFlags) {
    if (newFlags) {
        featuresFlags = newFlags;
    }
}

export function getFeaturesFlags(flag: keyof FeatureFlags) {
    return featuresFlags?.[flag];
}
