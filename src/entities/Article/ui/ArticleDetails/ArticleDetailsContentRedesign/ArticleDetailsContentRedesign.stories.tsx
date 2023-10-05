import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsContentRedesign } from './ArticleDetailsContentRedesign';

export default {
    title: 'STORIES_DIR/ArticleDetailsContentRedesign',
    component: ArticleDetailsContentRedesign,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsContentRedesign>;

const Template: ComponentStory<typeof ArticleDetailsContentRedesign> = (
    args,
) => <ArticleDetailsContentRedesign {...args} />;

export const ArticleDetailsContentRedesignNormal = Template.bind({});
ArticleDetailsContentRedesignNormal.args = {};

export const ArticleDetailsContentRedesignDark = Template.bind({});
ArticleDetailsContentRedesignDark.args = {};
ArticleDetailsContentRedesignDark.decorators = [ThemeDecorator(Theme.DARK)];
