import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from '../../model/types/currency';
import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {},
    args: {
        value: Currency.EUR,
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectPrimary = Template.bind({});
CurrencySelectPrimary.args = {};

export const CurrencySelectPrimaryDark = Template.bind({});
CurrencySelectPrimaryDark.args = {};
CurrencySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
