import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage/ArticlesPage',
    component: ArticlesPage,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const ArticlesPageNormal = Template.bind({});
ArticlesPageNormal.args = {};

export const ArticlesPageDark = Template.bind({});
ArticlesPageDark.args = {};
ArticlesPageDark.decorators = [ThemeDecorator(Theme.DARK)];
