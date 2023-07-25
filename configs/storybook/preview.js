import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/configs/storybook/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/configs/storybook/ThemeDecorator';
// import { RouterDecorator } from '../../src/shared/configs/storybook/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/configs/storybook/SuspenseDecorator';
import { Theme } from '@/shared/const/theme';


export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout:'fullscreen'
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator());
addDecorator(SuspenseDecorator);
