import { Story } from '@storybook/react';
import { setFeaturesFlags } from '@/shared/lib/features';
import { getAllFeaturesFlags } from '@/shared/lib/features/lib/setGetFeaturesFlags';
import { FeatureFlags } from '@/shared/lib/types/featureFlags';

export const FeatureFlagDecorator =
    (props: FeatureFlags) => (StoryComponent: Story) => {
        const defaultFeatures = getAllFeaturesFlags();
        setFeaturesFlags({ ...defaultFeatures, ...props });

        return (
            <div className="app-redesigned">
                <StoryComponent />
            </div>
        );
    };
