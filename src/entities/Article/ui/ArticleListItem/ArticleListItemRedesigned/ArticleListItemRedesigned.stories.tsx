import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned';
import { articleData } from '../../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleListItem/ArticleListItemRedesigned',
    component: ArticleListItemRedesigned,
    argTypes: {},
    args: {
        article: articleData,
    },
    decorators: [StoreDecorator({}), RouterDecorator()],
} as ComponentMeta<typeof ArticleListItemRedesigned>;

const Template: ComponentStory<typeof ArticleListItemRedesigned> = (args) => (
    <ArticleListItemRedesigned {...args} />
);

export const ArticleListItemRedesignedNormal = Template.bind({});
ArticleListItemRedesignedNormal.args = {};

export const ArticleListItemRedesignedDark = Template.bind({});
ArticleListItemRedesignedDark.args = {};
ArticleListItemRedesignedDark.decorators = [ThemeDecorator(Theme.DARK)];
