import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageLoaderLayout } from './PageLoaderLayout';

export default {
    title: 'shared/layouts/PageLoaderLayout',
    component: PageLoaderLayout,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof PageLoaderLayout>;

const Template: ComponentStory<typeof PageLoaderLayout> = () => (
    <PageLoaderLayout />
);

export const PageLoaderLayoutNormal = Template.bind({});
PageLoaderLayoutNormal.args = {};

export const PageLoaderLayoutDark = Template.bind({});
PageLoaderLayoutDark.args = {};
PageLoaderLayoutDark.decorators = [ThemeDecorator(Theme.DARK)];
