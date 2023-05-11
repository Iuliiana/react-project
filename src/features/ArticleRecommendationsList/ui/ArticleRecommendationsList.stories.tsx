import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

export default {
    title: 'STORIES_DIR/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const ArticleRecommendationsListNormal = Template.bind({});
ArticleRecommendationsListNormal.args = {};

export const ArticleRecommendationsListDark = Template.bind({});
ArticleRecommendationsListDark.args = {};
ArticleRecommendationsListDark.decorators = [ThemeDecorator(Theme.DARK)];
