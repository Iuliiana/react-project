import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormPrimary = Template.bind({});
LoginFormPrimary.args = {};

export const LoginFormPrimaryDark = Template.bind({});
LoginFormPrimaryDark.args = {};
LoginFormPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
