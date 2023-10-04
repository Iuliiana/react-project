import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';

export default {
    title: 'STORIES_DIR/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleListItemRedesigned>;

const Template: ComponentStory<typeof ArticleListItemRedesigned> = (args) => (
    <ArticleListItemRedesigned {...args} />
);

export const ArticleListItemRedesignedNormal = Template.bind({});
ArticleListItemRedesignedNormal.args = {};

export const ArticleListItemRedesignedDark = Template.bind({});
ArticleListItemRedesignedDark.args = {};
ArticleListItemRedesignedDark.decorators = [ThemeDecorator(Theme.DARK)];
