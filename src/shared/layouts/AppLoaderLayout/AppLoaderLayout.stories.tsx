import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLoaderLayout } from './AppLoaderLayout';

export default {
    title: 'shared/layouts/AppLoaderLayout',
    component: AppLoaderLayout,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof AppLoaderLayout>;

const Template: ComponentStory<typeof AppLoaderLayout> = () => (
    <AppLoaderLayout />
);

export const AppLoaderLayoutNormal = Template.bind({});
AppLoaderLayoutNormal.args = {};

export const AppLoaderLayoutDark = Template.bind({});
AppLoaderLayoutDark.args = {};
AppLoaderLayoutDark.decorators = [ThemeDecorator(Theme.DARK)];
