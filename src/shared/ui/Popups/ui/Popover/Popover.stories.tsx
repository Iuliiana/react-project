import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const PopoverNormal = Template.bind({});
PopoverNormal.args = {};

export const PopoverDark = Template.bind({});
PopoverDark.args = {};
PopoverDark.decorators = [ThemeDecorator(Theme.DARK)];
