import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleListItem } from './ArticleListItem';
import { ArticleView } from '../../model/consts/articleViewConst';
import { articleData } from '../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {},
    args: {
        article: articleData,
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;
export const ArticleItemGrid = Template.bind({});
ArticleItemGrid.args = {
    view: ArticleView.GRID,
};

export const ArticleItemGridDark = Template.bind({});
ArticleItemGridDark.args = {
    view: ArticleView.GRID,
};
ArticleItemGridDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticleItemList = Template.bind({});
ArticleItemList.args = {
    view: ArticleView.LIST,
};

export const ArticleItemListDark = Template.bind({});
ArticleItemListDark.args = {
    view: ArticleView.LIST,
};
ArticleItemListDark.decorators = [ThemeDecorator(Theme.DARK)];
