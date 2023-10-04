import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import SettingsPage from './SettingsPage';

export default {
    title: 'STORIES_DIR/SettinsgPage',
    component: SettingsPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof SettingsPage>;

const Template: ComponentStory<typeof SettingsPage> = (args) => (
    <SettingsPage {...args} />
);

export const SettinsgPageNormal = Template.bind({});
SettinsgPageNormal.args = {};

export const SettinsgPageDark = Template.bind({});
SettinsgPageDark.args = {};
SettinsgPageDark.decorators = [ThemeDecorator(Theme.DARK)];
