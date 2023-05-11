import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'STORIES_DIR/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const ArticleInfiniteListNormal = Template.bind({});
ArticleInfiniteListNormal.args = {};

export const ArticleInfiniteListDark = Template.bind({});
ArticleInfiniteListDark.args = {};
ArticleInfiniteListDark.decorators = [ThemeDecorator(Theme.DARK)];
