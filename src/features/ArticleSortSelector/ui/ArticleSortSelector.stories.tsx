import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'features/Article/ArticleSortSelector',
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
