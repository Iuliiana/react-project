import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewType } from 'entities/Article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const ArticleViewSelectorNormal = Template.bind({});
ArticleViewSelectorNormal.args = {
    view: ArticleViewType.LIST,
};

export const ArticleViewSelectorDark = Template.bind({});
ArticleViewSelectorDark.args = {
    view: ArticleViewType.LIST,
};
ArticleViewSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
