import { Story } from '@storybook/react';
import { setFeaturesFlags } from '@/shared/lib/features';
import { getAllFeaturesFlags } from '@/shared/lib/features/lib/setGetFeaturesFlags';

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeaturesFlags({ ...getAllFeaturesFlags(), isAppRedesigned: true });
    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
