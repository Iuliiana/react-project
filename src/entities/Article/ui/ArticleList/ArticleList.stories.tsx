import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ArticleView } from '../../model/consts/articleViewConst';
import { articleData } from '../../model/tests/articleData';
import { ArticleList } from './ArticleList';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleList>;

const articles = new Array(10)
    .fill(0)
    .map((item, index) => ({
        ...articleData,
        id: String(index),
    }));

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;
export const ArticlesGrid = Template.bind({});
ArticlesGrid.args = {
    articles,
    view: ArticleView.GRID,
};
ArticlesGrid.decorators = [StoreDecorator({})];
export const ArticlesGridDark = Template.bind({});
ArticlesGridDark.args = {
    articles,
    view: ArticleView.GRID,
};
ArticlesGridDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const ArticlesList = Template.bind({});
ArticlesList.args = {
    articles: new Array(3)
        .fill(0)
        .map((item, index) => ({
            ...articleData,
            id: String(index),
        })),
    view: ArticleView.LIST,
};
ArticlesList.decorators = [StoreDecorator({})];

export const ArticlesListDark = Template.bind({});
ArticlesListDark.args = {
    articles: new Array(3)
        .fill(0)
        .map((item, index) => ({
            ...articleData,
            id: String(index),
        })),
    view: ArticleView.LIST,
};
ArticlesListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const ArticlesGridIsLoading = Template.bind({});
ArticlesGridIsLoading.args = {
    articles: [],
    view: ArticleView.GRID,
    isLoading: true,
};
ArticlesGridIsLoading.decorators = [StoreDecorator({})];

export const ArticlesGridIsLoadingDark = Template.bind({});
ArticlesGridIsLoadingDark.args = {
    articles: [],
    view: ArticleView.GRID,
    isLoading: true,
};
ArticlesGridIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const ArticlesListIsLoading = Template.bind({});
ArticlesListIsLoading.args = {
    articles: [],
    view: ArticleView.LIST,
    isLoading: true,
};
ArticlesListIsLoading.decorators = [StoreDecorator({})];

export const ArticlesListIsLoadingDark = Template.bind({});
ArticlesListIsLoadingDark.args = {
    articles: [],
    view: ArticleView.LIST,
    isLoading: true,
};
ArticlesListIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
