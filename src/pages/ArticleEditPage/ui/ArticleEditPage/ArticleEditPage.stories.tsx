import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
);

export const ArticleEditPageNormal = Template.bind({});
ArticleEditPageNormal.args = {};
ArticleEditPageNormal.decorators = [StoreDecorator({})];

export const ArticleEditPageDark = Template.bind({});
ArticleEditPageDark.args = {};
ArticleEditPageDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
