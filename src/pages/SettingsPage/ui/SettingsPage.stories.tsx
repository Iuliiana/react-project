import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import SettingsPage from './SettingsPage';

export default {
    title: 'pages/SettinsgPage',
    component: SettingsPage,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args) => (
    <SettingsPage {...args} />
);

export const SettinsgPageNormal = Template.bind({});
SettinsgPageNormal.args = {};

export const SettinsgPageDark = Template.bind({});
SettinsgPageDark.args = {};
SettinsgPageDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];
