import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Listbox } from './Listbox';

export default {
    title: 'shared/Listbox',
    component: Listbox,
    argTypes: {},
    args: {
        options: [
            { value: '1', text: 'Durward Reynolds' },
            { value: '2', text: 'Kenton Towne' },
            { value: '3', text: 'Therese Wunsch' },
            { value: '4', text: 'Benedict Kessler' },
            { value: '5', text: 'Katelyn Rohan' },
        ],
        label: 'select an option',
        value: 'Benedict Kessler',
        readonly: false,
        onChange: () => {},
    },
} as ComponentMeta<typeof Listbox>;

const Template: ComponentStory<typeof Listbox> = (args) => <Listbox {...args} />;

export const ListboxNormal = Template.bind({});
ListboxNormal.args = {};

export const ListboxDark = Template.bind({});
ListboxDark.args = {};
ListboxDark.decorators = [ThemeDecorator(Theme.DARK)];
