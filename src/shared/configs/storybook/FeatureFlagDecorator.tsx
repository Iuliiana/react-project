import { Story } from '@storybook/react';
import { setFeaturesFlags } from '@/shared/lib/features';
import { FeatureFlags } from '@/shared/lib/types/featureFlags';

export const FeatureFlagDecorator =
    (props: FeatureFlags) => (StoryComponent: Story) => {
        setFeaturesFlags(props);
        return <StoryComponent />;
    };
