import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsEditButton } from './ArticleDetailsEditButton';

export default {
    title: 'STORIES_DIR/ArticleDetailsEditButton',
    component: ArticleDetailsEditButton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsEditButton>;

const Template: ComponentStory<typeof ArticleDetailsEditButton> = (args) => (
    <ArticleDetailsEditButton {...args} />
);

export const ArticleDetailsEditButtonNormal = Template.bind({});
ArticleDetailsEditButtonNormal.args = {};

export const ArticleDetailsEditButtonDark = Template.bind({});
ArticleDetailsEditButtonDark.args = {};
ArticleDetailsEditButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
