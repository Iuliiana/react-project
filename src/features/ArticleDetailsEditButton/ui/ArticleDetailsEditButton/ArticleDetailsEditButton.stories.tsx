import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsEditButton } from './ArticleDetailsEditButton';

export default {
    title: 'features/Article/ArticleDetailsEditButton',
    component: ArticleDetailsEditButton,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({}), RouterDecorator()],
} as ComponentMeta<typeof ArticleDetailsEditButton>;

const Template: ComponentStory<typeof ArticleDetailsEditButton> = (args) => (
    <ArticleDetailsEditButton {...args} />
);

export const ArticleDetailsEditButtonNormal = Template.bind({});
ArticleDetailsEditButtonNormal.args = {};

export const ArticleDetailsEditButtonDark = Template.bind({});
ArticleDetailsEditButtonDark.args = {};
ArticleDetailsEditButtonDark.decorators = [ThemeDecorator(Theme.DARK)];
