import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesFilters } from './ArticlesFilters';

export default {
    title: 'STORIES_DIR/ArticlesFilters',
    component: ArticlesFilters,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlesFilters>;

const Template: ComponentStory<typeof ArticlesFilters> = (args) => (
    <ArticlesFilters {...args} />
);

export const ArticlesFiltersNormal = Template.bind({});
ArticlesFiltersNormal.args = {};

export const ArticlesFiltersDark = Template.bind({});
ArticlesFiltersDark.args = {};
ArticlesFiltersDark.decorators = [ThemeDecorator(Theme.DARK)];
