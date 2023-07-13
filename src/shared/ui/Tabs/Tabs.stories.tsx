import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { ArticleType } from '@/entities/Article';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
    args: {
        tabsList: [
            {
                text: ArticleType.ALL,
                value: ArticleType.ALL,
            },
            {
                text: ArticleType.IT,
                value: ArticleType.IT,
            },
            {
                text: ArticleType.SCIENCE,
                value: ArticleType.SCIENCE,
            },
            {
                text: ArticleType.POLICY,
                value: ArticleType.POLICY,
            },
            {
                text: ArticleType.ECONOMY,
                value: ArticleType.ECONOMY,
            },
        ],
        currentTab: ArticleType.SCIENCE,
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsNormal = Template.bind({});
TabsNormal.args = {};

export const TabsDark = Template.bind({});
TabsDark.args = {};
TabsDark.decorators = [ThemeDecorator(Theme.DARK)];
