import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StickyContentLayout } from './StickyContentLayout';

export default {
    title: 'shared/layouts/StickyContentLayout',
    component: StickyContentLayout,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof StickyContentLayout>;

const Template: ComponentStory<typeof StickyContentLayout> = (args) => (
    <StickyContentLayout {...args} />
);

export const StickyContentLayoutNormal = Template.bind({});
StickyContentLayoutNormal.args = {};

export const StickyContentLayoutDark = Template.bind({});
StickyContentLayoutDark.args = {};
StickyContentLayoutDark.decorators = [ThemeDecorator(Theme.DARK)];
