import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {},
    args: {
        value: Currency.EUR,
        direction: 'bottom right',
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
);

export const CurrencySelectPrimary = Template.bind({});
CurrencySelectPrimary.args = {};

export const CurrencySelectPrimaryDark = Template.bind({});
CurrencySelectPrimaryDark.args = {};
CurrencySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CurrencySelectPrimaryRedesigned = Template.bind({});
CurrencySelectPrimaryRedesigned.args = {};
CurrencySelectPrimaryRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const CurrencySelectPrimaryDarkRedesigned = Template.bind({});
CurrencySelectPrimaryDarkRedesigned.args = {};
CurrencySelectPrimaryDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
