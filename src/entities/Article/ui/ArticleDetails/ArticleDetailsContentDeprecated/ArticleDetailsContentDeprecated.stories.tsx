import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsContentDeprecated } from './ArticleDetailsContentDeprecated';

export default {
    title: 'STORIES_DIR/ArticleDetailsContentDeprecated',
    component: ArticleDetailsContentDeprecated,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsContentDeprecated>;

const Template: ComponentStory<typeof ArticleDetailsContentDeprecated> = (
    args,
) => <ArticleDetailsContentDeprecated {...args} />;

export const ArticleDetailsContentDeprecatedNormal = Template.bind({});
ArticleDetailsContentDeprecatedNormal.args = {};

export const ArticleDetailsContentDeprecatedDark = Template.bind({});
ArticleDetailsContentDeprecatedDark.args = {};
ArticleDetailsContentDeprecatedDark.decorators = [ThemeDecorator(Theme.DARK)];
