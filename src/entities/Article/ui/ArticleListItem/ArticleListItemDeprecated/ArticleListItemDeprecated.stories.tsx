import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';

export default {
    title: 'STORIES_DIR/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleListItemDeprecated>;

const Template: ComponentStory<typeof ArticleListItemDeprecated> = (args) => (
    <ArticleListItemDeprecated {...args} />
);

export const ArticleListItemDeprecatedNormal = Template.bind({});
ArticleListItemDeprecatedNormal.args = {};

export const ArticleListItemDeprecatedDark = Template.bind({});
ArticleListItemDeprecatedDark.args = {};
ArticleListItemDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
