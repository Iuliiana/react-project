import { addDecorator } from '@storybook/react';
import { FeatureFlagDecorator } from '../../src/shared/configs/storybook/FeatureFlagDecorator';
import { RouterDecorator } from '../../src/shared/configs/storybook/RouterDecorator';
import { StyleDecorator } from '../../src/shared/configs/storybook/StyleDecorator';
import { SuspenseDecorator } from '../../src/shared/configs/storybook/SuspenseDecorator';
import { ThemeDecorator } from '../../src/shared/configs/storybook/ThemeDecorator';
import { withI18next } from '../../src/shared/configs/storybook/withI18next';
import { Theme } from '../../src/shared/const/theme';
// eslint-disable-next-line
import i18n from '../../src/shared/configs/i18n/i18n.ts';

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
addDecorator(RouterDecorator());
addDecorator(withI18next);
addDecorator(SuspenseDecorator);
addDecorator(FeatureFlagDecorator({}));
