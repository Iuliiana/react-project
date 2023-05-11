import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'STORIES_DIR/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => <ArticleDetailsComments {...args} />;

export const ArticleDetailsCommentsNormal = Template.bind({});
ArticleDetailsCommentsNormal.args = {};

export const ArticleDetailsCommentsDark = Template.bind({});
ArticleDetailsCommentsDark.args = {};
ArticleDetailsCommentsDark.decorators = [ThemeDecorator(Theme.DARK)];
