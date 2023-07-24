import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />;

export const ArticleSortSelectorNormal = Template.bind({});
ArticleSortSelectorNormal.args = {};

export const ArticleSortSelectorDark = Template.bind({});
ArticleSortSelectorDark.args = {};
ArticleSortSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
