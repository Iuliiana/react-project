import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
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
