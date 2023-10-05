import { LOCAL_STORAGE_STYLING_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '../../types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_STYLING_KEY) === 'new',
};

let featuresFlags: FeatureFlags = { ...defaultFeatures };
export function setFeaturesFlags(newFlags?: FeatureFlags) {
    if (newFlags) {
        featuresFlags = newFlags;
    }
}

export function getFeaturesFlags(flag: keyof FeatureFlags) {
    return featuresFlags?.[flag];
}

export function getAllFeaturesFlags() {
    return featuresFlags;
}
