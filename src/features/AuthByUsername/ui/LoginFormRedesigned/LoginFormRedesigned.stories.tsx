import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { LoginFormRedesigned } from './LoginFormRedesigned';

export default {
    title: 'features/LoginForm/LoginFormRedesigned',
    component: LoginFormRedesigned,
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: 'edf' },
        }),
    ],
} as ComponentMeta<typeof LoginFormRedesigned>;

const Template: ComponentStory<typeof LoginFormRedesigned> = (args) => (
    <LoginFormRedesigned {...args} />
);

export const LoginFormRedesignedNormal = Template.bind({});
LoginFormRedesignedNormal.args = {};

export const LoginFormRedesignedDark = Template.bind({});
LoginFormRedesignedDark.args = {};
LoginFormRedesignedDark.decorators = [ThemeDecorator(Theme.DARK)];
