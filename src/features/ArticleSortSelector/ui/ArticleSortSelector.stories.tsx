import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortField } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'features/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
    args: {
        currentSort: ArticleSortField.VIEWS,
        currentOrder: 'desc',
    },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
    <ArticleSortSelector {...args} />
);

export const ArticleSortSelectorNormal = Template.bind({});
ArticleSortSelectorNormal.args = {};

export const ArticleSortSelectorDark = Template.bind({});
ArticleSortSelectorDark.args = {};
ArticleSortSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticleSortSelectorNormalRedesigned = Template.bind({});
ArticleSortSelectorNormalRedesigned.args = {};
ArticleSortSelectorNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticleSortSelectorDarkRedesigned = Template.bind({});
ArticleSortSelectorDarkRedesigned.args = {};
ArticleSortSelectorDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
