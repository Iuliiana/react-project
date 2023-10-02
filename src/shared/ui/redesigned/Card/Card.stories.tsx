import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Card } from './Card';
import { Text } from '../Text/Text';

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
CardNormal.args = {
    variant: 'standard',
};

export const CardDark = Template.bind({});
CardDark.args = {
    variant: 'standard',
};
CardDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CardOutline = Template.bind({});
CardOutline.args = {
    variant: 'outline',
};

export const CardOutlineDark = Template.bind({});
CardOutlineDark.args = {
    variant: 'outline',
};
CardOutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CardLight = Template.bind({});
CardLight.args = {
    variant: 'light',
};

export const CardLightDark = Template.bind({});
CardLightDark.args = {
    variant: 'light',
};
CardLightDark.decorators = [ThemeDecorator(Theme.DARK)];
