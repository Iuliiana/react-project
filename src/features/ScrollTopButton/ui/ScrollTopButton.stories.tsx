import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ScrollTopButton } from './ScrollTopButton';

export default {
    title: 'STORIES_DIR/ScrollTopButton',
    component: ScrollTopButton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ScrollTopButton>;

const Template: ComponentStory<typeof ScrollTopButton> = (args) => (
    <ScrollTopButton {...args} />
);

export const ScrollTopButtonNormal = Template.bind({});
ScrollTopButtonNormal.args = {};

export const ScrollTopButtonDark = Template.bind({});
ScrollTopButtonDark.args = {};
ScrollTopButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
