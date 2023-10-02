import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { MainLayout } from './MainLayout';

export default {
    title: 'shared/layouts/MainLayout',
    component: MainLayout,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
    <MainLayout {...args} />
);

export const MainLayoutNormal = Template.bind({});
MainLayoutNormal.args = {};

export const MainLayoutDark = Template.bind({});
MainLayoutDark.args = {};
MainLayoutDark.decorators = [ThemeDecorator(Theme.DARK)];
