import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../../entities/Article/model/consts/articleViewConst';

export default {
    title: 'features/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const ArticleViewSelectorNormal = Template.bind({});
ArticleViewSelectorNormal.args = {
    view: ArticleView.LIST,
};

export const ArticleViewSelectorDark = Template.bind({});
ArticleViewSelectorDark.args = {
    view: ArticleView.LIST,
};
ArticleViewSelectorDark.decorators = [ThemeDecorator(Theme.DARK)];
