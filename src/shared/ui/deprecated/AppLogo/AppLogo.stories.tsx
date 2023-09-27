import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLogo } from './AppLogo';

export default {
    title: 'STORIES_DIR/AppLogo',
    component: AppLogo,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof AppLogo>;

const Template: ComponentStory<typeof AppLogo> = (args) => (
    <AppLogo {...args} />
);

export const AppLogoNormal = Template.bind({});
AppLogoNormal.args = {};

export const AppLogoDark = Template.bind({});
AppLogoDark.args = {};
AppLogoDark.decorators = [ThemeDecorator(Theme.DARK)];
