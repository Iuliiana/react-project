import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import {
    articleRecommendationsListData,
} from '../model/tests/articleRecommendationsListData';

export default {
    title: 'features/Article/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {},
    args: {},
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [withMock, RouterDecorator()],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const ArticleRecommendationsListNormal = Template.bind({});
ArticleRecommendationsListNormal.args = {};
ArticleRecommendationsListNormal.decorators = [
    StoreDecorator({}),
];

ArticleRecommendationsListNormal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4`,
            method: 'GET',
            status: 200,
            response: articleRecommendationsListData,
        },
    ],
};

export const ArticleRecommendationsListDark = Template.bind({});
ArticleRecommendationsListDark.args = {};
ArticleRecommendationsListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
ArticleRecommendationsListDark.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_expand=user&_limit=4`,
            method: 'GET',
            status: 200,
            response: articleRecommendationsListData,
        },
    ],
};
