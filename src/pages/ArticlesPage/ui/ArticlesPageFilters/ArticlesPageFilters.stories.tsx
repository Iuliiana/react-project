import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ArticlesPageFilters } from './ArticlesPageFilters';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
    argTypes: {},
    decorators: [RouterDecorator()],
    args: {},
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />;

export const ArticlesPageFiltersNormal = Template.bind({});
ArticlesPageFiltersNormal.args = {};
ArticlesPageFiltersNormal.decorators = [StoreDecorator({})];

export const ArticlesPageFiltersDark = Template.bind({});
ArticlesPageFiltersDark.args = {};
ArticlesPageFiltersDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
