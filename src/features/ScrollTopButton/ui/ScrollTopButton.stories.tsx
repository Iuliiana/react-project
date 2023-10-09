import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ScrollTopButton } from './ScrollTopButton';

export default {
    title: 'features/ScrollTopButton',
    component: ScrollTopButton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ScrollTopButton>;

const Template: ComponentStory<typeof ScrollTopButton> = (args) => (
    <ScrollTopButton {...args} />
);

export const ScrollTopButtonNormal = Template.bind({});
ScrollTopButtonNormal.args = {};
ScrollTopButtonNormal.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ScrollTopButtonDark = Template.bind({});
ScrollTopButtonDark.args = {};
ScrollTopButtonDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
