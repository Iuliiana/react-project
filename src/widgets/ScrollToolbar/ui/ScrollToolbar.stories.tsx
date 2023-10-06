import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ScrollToolbar } from './ScrollToolbar';

export default {
    title: 'STORIES_DIR/ScrollToolbar',
    component: ScrollToolbar,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ScrollToolbar>;

const Template: ComponentStory<typeof ScrollToolbar> = (args) => (
    <ScrollToolbar {...args} />
);

export const ScrollToolbarNormal = Template.bind({});
ScrollToolbarNormal.args = {};

export const ScrollToolbarDark = Template.bind({});
ScrollToolbarDark.args = {};
ScrollToolbarDark.decorators = [ThemeDecorator(Theme.DARK)];
