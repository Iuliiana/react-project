import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { ArticleType } from '../../model/consts/articleTypeConst';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
    args: {
        currentType: ArticleType.POLICY,
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />;

export const ArticleTypeTabsNormal = Template.bind({});
ArticleTypeTabsNormal.args = {};

export const ArticleTypeTabsDark = Template.bind({});
ArticleTypeTabsDark.args = {};
ArticleTypeTabsDark.decorators = [ThemeDecorator(Theme.DARK)];
