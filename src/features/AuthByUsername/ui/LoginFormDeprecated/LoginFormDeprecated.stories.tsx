import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { LoginFormDeprecated } from './LoginFormDeprecated';

export default {
    title: 'features/LoginForm/LoginFormDeprecated',
    component: LoginFormDeprecated,
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: 'admin', password: 'edf' },
        }),
    ],
} as ComponentMeta<typeof LoginFormDeprecated>;

const Template: ComponentStory<typeof LoginFormDeprecated> = (args) => (
    <LoginFormDeprecated {...args} />
);

export const LoginFormDeprecatedNormal = Template.bind({});
LoginFormDeprecatedNormal.args = {};

export const LoginFormDeprecatedDark = Template.bind({});
LoginFormDeprecatedDark.args = {};
LoginFormDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
