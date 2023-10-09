import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
    args: {
        tabsList: [
            {
                text: 'ALL',
                value: 'ALL',
            },
            {
                text: 'IT',
                value: 'IT',
            },
            {
                text: 'SCIENCE',
                value: 'SCIENCE',
            },
            {
                text: 'POLICY',
                value: 'POLICY',
            },
            {
                text: 'ECONOMY',
                value: 'ECONOMY',
            },
        ],
        currentTab: 'SCIENCE',
        direction: 'column',
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsNormal = Template.bind({});
TabsNormal.args = {};

export const TabsDark = Template.bind({});
TabsDark.args = {};
TabsDark.decorators = [ThemeDecorator(Theme.DARK)];
