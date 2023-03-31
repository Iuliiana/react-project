import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
    args: {
        label: 'Тестовый label',
        options: [
            {
                value: 'test 1',
                text: 'test 1',
            },
            {
                value: 'test 2',
                text: 'test 2',
            },
            {
                value: 'test 3',
                text: 'test 3',
            },
        ],
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPrimary = Template.bind({});
SelectPrimary.args = {

};

export const SelectPrimaryDark = Template.bind({});
SelectPrimaryDark.args = {};
SelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SelectReadonly = Template.bind({});
SelectReadonly.args = {
    readonly: true,
};

export const SelectReadonlyDark = Template.bind({});
SelectReadonlyDark.args = {
    readonly: true,
};
SelectReadonlyDark.decorators = [ThemeDecorator(Theme.DARK)];
