import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'pages/ArticlesPage/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const ArticleInfiniteListNormal = Template.bind({});
ArticleInfiniteListNormal.args = {};
ArticleInfiniteListNormal.decorators = [StoreDecorator({})];

export const ArticleInfiniteListDark = Template.bind({});
ArticleInfiniteListDark.args = {};
ArticleInfiniteListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
