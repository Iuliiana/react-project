import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.args = {};
LoginFormPrimary.decorators = [
    StoreDecorator({
        loginForm: { username: 'admin', password: 'rrr' },
    }),
];

export const LoginFormPrimaryDark = Template.bind({});
LoginFormPrimaryDark.args = {};
LoginFormPrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: { username: 'admin', password: 'edf' },
    }),
];

export const LoginFormError = Template.bind({});
LoginFormError.args = {};
LoginFormError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: 'sdsd',
            error: 'Введен неверный логин / пароль',
        },
    }),
];

export const LoginFormErrorDark = Template.bind({});
LoginFormErrorDark.args = {};
LoginFormErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'admin',
            password: 'rrr',
            error: 'Введен неверный логин / пароль',
        },
    }),
];
