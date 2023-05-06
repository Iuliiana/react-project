import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { ArticleDetailsHeader } from './ArticleDetailsHeader';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsHeader',
    component: ArticleDetailsHeader,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => <ArticleDetailsHeader {...args} />;

export const ArticleDetailsHeaderNormal = Template.bind({});
ArticleDetailsHeaderNormal.args = {};
ArticleDetailsHeaderNormal.decorators = [StoreDecorator({})];

export const ArticleDetailsHeaderDark = Template.bind({});
ArticleDetailsHeaderDark.args = {};
ArticleDetailsHeaderDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
