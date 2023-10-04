import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { RadioGroup } from './RadioGroup';

export default {
    title: 'STORIES_DIR/RadioGroup',
    component: RadioGroup,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
    <RadioGroup {...args} />
);

export const RadioGroupNormal = Template.bind({});
RadioGroupNormal.args = {};

export const RadioGroupDark = Template.bind({});
RadioGroupDark.args = {};
RadioGroupDark.decorators = [ThemeDecorator(Theme.DARK)];
