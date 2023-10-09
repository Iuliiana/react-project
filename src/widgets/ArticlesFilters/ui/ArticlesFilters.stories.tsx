import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesFilters } from './ArticlesFilters';

export default {
    title: 'widgets/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {},
    args: {
        currentOrder: 'desc',
        currentSort: ArticleSortField.VIEWS,
        currentType: ArticleType.ECONOMY,
    },
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
    <ArticlesFilters {...args} />
);

export const ArticlesFiltersNormal = Template.bind({});
ArticlesFiltersNormal.args = {};

export const ArticlesFiltersDark = Template.bind({});
ArticlesFiltersDark.args = {};
ArticlesFiltersDark.decorators = [ThemeDecorator(Theme.DARK)];
