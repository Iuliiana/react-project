import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ArticleDetailsHeader } from './ArticleDetailsHeader';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsHeader',
    component: ArticleDetailsHeader,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ArticleDetailsHeader>;

const Template: ComponentStory<typeof ArticleDetailsHeader> = (args) => <ArticleDetailsHeader {...args} />;

export const ArticleDetailsHeaderNormal = Template.bind({});
ArticleDetailsHeaderNormal.args = {};
ArticleDetailsHeaderNormal.decorators = [StoreDecorator({})];

export const ArticleDetailsHeaderDark = Template.bind({});
ArticleDetailsHeaderDark.args = {};
ArticleDetailsHeaderDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
