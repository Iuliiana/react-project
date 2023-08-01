import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationButton } from './NotificationButton';

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const NotificationButtonNormal = Template.bind({});
NotificationButtonNormal.args = {};
NotificationButtonNormal.decorators = [StoreDecorator({})];
export const NotificationButtonDark = Template.bind({});
NotificationButtonDark.args = {};
NotificationButtonDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
