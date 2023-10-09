import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleList } from './ArticleList';
import { ArticleView } from '../..';
import { articlesArray } from '../../model/tests/articlesArray';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    argTypes: {},
    args: {
        articles: articlesArray,
    },
    decorators: [StoreDecorator({}), RouterDecorator()],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const ArticlesViewList = Template.bind({});
ArticlesViewList.args = {
    view: ArticleView.LIST,
};

export const ArticlesViewListDark = Template.bind({});
ArticlesViewListDark.args = {
    view: ArticleView.LIST,
};
ArticlesViewListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticlesViewGrid = Template.bind({});
ArticlesViewGrid.args = {
    view: ArticleView.GRID,
};

export const ArticlesViewGridDark = Template.bind({});
ArticlesViewGridDark.args = {
    view: ArticleView.GRID,
};
ArticlesViewGridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticlesViewListLoading = Template.bind({});
ArticlesViewListLoading.args = {
    isLoading: true,
    articles: undefined,
    view: ArticleView.LIST,
};

export const ArticlesViewListLoadingDark = Template.bind({});
ArticlesViewListLoadingDark.args = {
    isLoading: true,
    articles: undefined,
    view: ArticleView.LIST,
};
ArticlesViewListLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticlesViewGridLoading = Template.bind({});
ArticlesViewGridLoading.args = {
    isLoading: true,
    articles: undefined,
    view: ArticleView.GRID,
};

export const ArticlesViewGridLoadingDark = Template.bind({});
ArticlesViewGridLoadingDark.args = {
    isLoading: true,
    articles: undefined,
    view: ArticleView.GRID,
};
ArticlesViewGridLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticlesViewListRedesigneg = Template.bind({});
ArticlesViewListRedesigneg.args = {
    view: ArticleView.LIST,
};
ArticlesViewListRedesigneg.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticlesViewListDarkRedesigneg = Template.bind({});
ArticlesViewListDarkRedesigneg.args = {
    view: ArticleView.LIST,
};
ArticlesViewListDarkRedesigneg.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const ArticlesViewGridRedesigneg = Template.bind({});
ArticlesViewGridRedesigneg.args = {
    view: ArticleView.GRID,
};
ArticlesViewGridRedesigneg.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticlesViewGridDarkRedesigneg = Template.bind({});
ArticlesViewGridDarkRedesigneg.args = {
    view: ArticleView.GRID,
};
ArticlesViewGridDarkRedesigneg.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
