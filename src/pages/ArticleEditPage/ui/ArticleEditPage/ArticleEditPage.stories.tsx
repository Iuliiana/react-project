import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import ArticleEditPage from './ArticleEditPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const ArticleEditPageNormal = Template.bind({});
ArticleEditPageNormal.args = {};
ArticleEditPageNormal.decorators = [StoreDecorator({})];

export const ArticleEditPageDark = Template.bind({});
ArticleEditPageDark.args = {};
ArticleEditPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
