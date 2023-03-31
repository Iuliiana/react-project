import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectPrimary = Template.bind({});
CurrencySelectPrimary.args = {};

export const CurrencySelectPrimaryDark = Template.bind({});
CurrencySelectPrimaryDark.args = {};
CurrencySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
