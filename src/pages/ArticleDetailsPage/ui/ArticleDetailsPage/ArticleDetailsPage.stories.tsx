import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'STORIES_DIR/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const ArticleDetailsPageNormal = Template.bind({});
ArticleDetailsPageNormal.args = {};

export const ArticleDetailsPageDark = Template.bind({});
ArticleDetailsPageDark.args = {};
ArticleDetailsPageDark.decorators = [ThemeDecorator(Theme.DARK)];
