import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectPrimary = Template.bind({});
CountrySelectPrimary.args = {};

export const CountrySelectPrimaryDark = Template.bind({});
CountrySelectPrimaryDark.args = {};
CountrySelectPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
