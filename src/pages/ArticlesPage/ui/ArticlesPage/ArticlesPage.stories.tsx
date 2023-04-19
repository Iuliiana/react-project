import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const ArticlesPageNormal = Template.bind({});
ArticlesPageNormal.args = {};
ArticlesPageNormal.decorators = [StoreDecorator({})];

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.args = {};
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
