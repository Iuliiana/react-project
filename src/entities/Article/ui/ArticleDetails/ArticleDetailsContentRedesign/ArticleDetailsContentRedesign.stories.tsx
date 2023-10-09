import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsContentRedesign } from './ArticleDetailsContentRedesign';
import { articleData } from '../../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleDetals/ArticleDetailsContentRedesign',
    component: ArticleDetailsContentRedesign,
    argTypes: {},
    args: {
        data: articleData,
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleDetailsContentRedesign>;

const Template: ComponentStory<typeof ArticleDetailsContentRedesign> = (
    args,
) => <ArticleDetailsContentRedesign {...args} />;

export const ArticleDetailsContentRedesignNormal = Template.bind({});
ArticleDetailsContentRedesignNormal.args = {};

export const ArticleDetailsContentRedesignDark = Template.bind({});
ArticleDetailsContentRedesignDark.args = {};
ArticleDetailsContentRedesignDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
