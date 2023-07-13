import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { articleData } from '../../model/tests/articleData';
import { ArticleDetails } from './ArticleDetails';

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
