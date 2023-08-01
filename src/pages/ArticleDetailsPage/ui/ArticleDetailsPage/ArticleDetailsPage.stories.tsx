import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { articleData } from '@/entities/Article/testing';
import { articleRecommendationsListData } from '@/features/ArticleRecommendationsList/testing';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: articleData,
            },
        }),
        RouterDecorator({
            initialEntries: ['/articles/1'],
            path: '/articles/:id',
        }),
    ],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    <ArticleDetailsPage {...args} />
);

export const ArticleDetailsPageNormal = Template.bind({});
ArticleDetailsPageNormal.args = {};
ArticleDetailsPageNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4`,
            method: 'GET',
            status: 200,
            response: articleRecommendationsListData,
        },
        {
            url: `${__API__}/article-ratings?userId=&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    articleId: '77',
                    userId: '1',
                    rate: 1,
                    feedback: 'uu',
                    id: 'u4OVz3h',
                },
            ],
        },
    ],
};

export const ArticleDetailsPageDark = Template.bind({});
ArticleDetailsPageDark.args = {};
ArticleDetailsPageDark.decorators = [ThemeDecorator(Theme.DARK)];
ArticleDetailsPageDark.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4`,
            method: 'GET',
            status: 200,
            response: articleRecommendationsListData,
        },
        {
            url: `${__API__}/article-ratings?userId=&articleId=1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    articleId: '77',
                    userId: '1',
                    rate: 1,
                    feedback: 'uu',
                    id: 'u4OVz3h',
                },
            ],
        },
    ],
};
