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
    layout:'fullscreen',
    parameters: {
        themes: {
            default: 'light',
            list: [
                { name: 'dark', class: Theme.DARK, color: '#000000' },
                { name: 'light', class: Theme.LIGHT, color: '#d8d8d8' },
                { name: 'chocolate', class: Theme.CHOCOLATE, color: '#462f29' }
            ],
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator());
addDecorator(SuspenseDecorator);
