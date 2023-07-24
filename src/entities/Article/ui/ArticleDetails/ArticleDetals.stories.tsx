import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetails } from './ArticleDetails';
import { articleData } from '../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleDetals',
    component: ArticleDetails,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

export const ArticleDetalsPrimary = Template.bind({});
ArticleDetalsPrimary.args = {};
ArticleDetalsPrimary.decorators = [StoreDecorator({
    articleDetails: {
        data: articleData,
    },
})];

export const ArticleDetalsPrimaryDark = Template.bind({});
ArticleDetalsPrimaryDark.args = {};
ArticleDetalsPrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        data: articleData,
    },
})];

export const ArticleDetalsLoading = Template.bind({});
ArticleDetalsLoading.args = {};
ArticleDetalsLoading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const ArticleDetalsLoadingDark = Template.bind({});
ArticleDetalsLoadingDark.args = {};
ArticleDetalsLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const ArticleDetalsError = Template.bind({});
ArticleDetalsError.args = {};
ArticleDetalsError.decorators = [StoreDecorator({
    articleDetails: {
        error: 'true',
    },
})];
