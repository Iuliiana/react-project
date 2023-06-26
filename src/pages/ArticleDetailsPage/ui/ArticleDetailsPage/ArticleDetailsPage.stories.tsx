import React from 'react';
import {
    ComponentStory, ComponentMeta,
} from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/configs/storybook/RouterDecorator';
import { articleData } from 'entities/Article/mockData/articleData';
import {
    articleRecommendationsListData,
} from 'features/ArticleRecommendationsList/mockData/articleRecommendationsListData';
import withMock from 'storybook-addon-mock';
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
        withMock,
    ],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

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
    ],
};
