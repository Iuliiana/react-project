import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {},
    args: {
        value: Country.Canada,
        direction: 'bottom right',
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
    <CountrySelect {...args} />
);

export const CountrySelectPrimary = Template.bind({});
CountrySelectPrimary.args = {};

export const CountrySelectPrimaryDark = Template.bind({});
CountrySelectPrimaryDark.args = {};
CountrySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CountrySelectPrimaryRedesigned = Template.bind({});
CountrySelectPrimaryRedesigned.args = {};
CountrySelectPrimaryRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const CountrySelectPrimaryDarkRedesigned = Template.bind({});
CountrySelectPrimaryDarkRedesigned.args = {};
CountrySelectPrimaryDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
