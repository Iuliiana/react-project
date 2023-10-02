import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Card, CardTheme } from './Card';
import { Text } from '../Text/Text';

export default {
    title: 'shared/deprecated/Card',
    component: Card,
    argTypes: {},
    args: {
        children: <Text title="Test" text="TextText" />,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardNormal = Template.bind({});
CardNormal.args = {};

export const CardDark = Template.bind({});
CardDark.args = {};
CardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CardOutline = Template.bind({});
CardOutline.args = {
    theme: CardTheme.OUTLINE,
};

export const CardOutlineDark = Template.bind({});
CardOutlineDark.args = {
    theme: CardTheme.OUTLINE,
};
CardOutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
