import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsContentDeprecated } from './ArticleDetailsContentDeprecated';
import { articleData } from '../../../model/tests/articleData';

export default {
    title: 'entities/Article/ArticleDetals/ArticleDetailsContentDeprecated',
    component: ArticleDetailsContentDeprecated,
    argTypes: {},
    args: {
        data: articleData,
    },
} as ComponentMeta<typeof ArticleDetailsContentDeprecated>;

const Template: ComponentStory<typeof ArticleDetailsContentDeprecated> = (
    args,
) => <ArticleDetailsContentDeprecated {...args} />;

export const ArticleDetailsContentDeprecatedNormal = Template.bind({});
ArticleDetailsContentDeprecatedNormal.args = {};

export const ArticleDetailsContentDeprecatedDark = Template.bind({});
ArticleDetailsContentDeprecatedDark.args = {};
ArticleDetailsContentDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
