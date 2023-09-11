import { addDecorator } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '../../src/shared/configs/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/configs/storybook/SuspenseDecorator';
// import { RouterDecorator } from '../../src/shared/configs/storybook/RouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    parameters: {
        themes: {
            default: 'light',
            list: [
                { name: 'dark', class: Theme.DARK, color: '#000000' },
                { name: 'light', class: Theme.LIGHT, color: '#d8d8d8' },
                { name: 'chocolate', class: Theme.CHOCOLATE, color: '#462f29' },
            ],
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(
    StoreDecorator({
        user: {
            authData: {
                jsonSettings: {
                    theme: Theme.LIGHT,
                    isVisitedArticlesPage: true,
                },
            },
        },
    }),
);
// addDecorator(RouterDecorator());
addDecorator(SuspenseDecorator);
