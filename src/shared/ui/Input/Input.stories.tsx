import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
    args: {
        placeholder: 'Введите текст',
        value: '123456',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputPrimary = Template.bind({});
InputPrimary.args = {};

export const InputPrimaryDark = Template.bind({});
InputPrimaryDark.args = {};
InputPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
