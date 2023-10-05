import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsNavigation } from './ArticleDetailsNavigation';

export default {
    title: 'STORIES_DIR/ArticleDetailsNavigation',
    component: ArticleDetailsNavigation,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsNavigation>;

const Template: ComponentStory<typeof ArticleDetailsNavigation> = (args) => (
    <ArticleDetailsNavigation {...args} />
);

export const ArticleDetailsNavigationNormal = Template.bind({});
ArticleDetailsNavigationNormal.args = {};

export const ArticleDetailsNavigationDark = Template.bind({});
ArticleDetailsNavigationDark.args = {};
ArticleDetailsNavigationDark.decorators = [ThemeDecorator(Theme.DARK)];
