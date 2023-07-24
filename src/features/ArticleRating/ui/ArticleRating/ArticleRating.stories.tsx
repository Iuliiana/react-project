import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ArticleRating from './ArticleRating';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const ArticleRatingSelected = Template.bind({});
ArticleRatingSelected.args = {};
ArticleRatingSelected.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1`,
            method: 'GET',
            status: 200,
            response: [{
                articleId: '77',
                userId: '1',
                rate: 1,
                feedback: 'uu',
                id: 'u4OVz3h',
            }],
        },
    ],
};
export const ArticleRatingNoSelectedDark = Template.bind({});
ArticleRatingNoSelectedDark.args = {};
ArticleRatingNoSelectedDark.decorators = [ThemeDecorator(Theme.DARK)];
ArticleRatingNoSelectedDark.parameters = {
    mockData: [
        {
            url: `${__API__}/article-ratings?userId=1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
