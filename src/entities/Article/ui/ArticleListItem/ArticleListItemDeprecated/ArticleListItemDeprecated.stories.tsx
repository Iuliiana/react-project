import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated';
import { articleData } from '../../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleListItem/ArticleListItemDeprecated',
    component: ArticleListItemDeprecated,
    argTypes: {},
    args: {
        article: articleData,
    },
    decorators: [StoreDecorator({}), RouterDecorator()],
} as ComponentMeta<typeof ArticleListItemDeprecated>;

const Template: ComponentStory<typeof ArticleListItemDeprecated> = (args) => (
    <ArticleListItemDeprecated {...args} />
);

export const ArticleListItemDeprecatedNormal = Template.bind({});
ArticleListItemDeprecatedNormal.args = {};

export const ArticleListItemDeprecatedDark = Template.bind({});
ArticleListItemDeprecatedDark.args = {};
ArticleListItemDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
