import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectPrimary = Template.bind({});
CountrySelectPrimary.args = {};

export const CountrySelectPrimaryDark = Template.bind({});
CountrySelectPrimaryDark.args = {};
CountrySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
