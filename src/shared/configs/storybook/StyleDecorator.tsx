// eslint-disable-next-line itretiakova-plugin/layer-imports
import '@/app/styles/index.scss';
import React from 'react';
import { Story } from '@storybook/react';

// export const StyleDecorator = (story: () => Story) => {
//     return <div> {story()} </div>;
// }

export const StyleDecorator = (StoryComponent: Story) => (
    <div id="app">
        <StoryComponent />
    </div>
);
