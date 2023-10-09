import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ArticleType } from '../../../entities/Article/model/consts/articleTypeConst';

export default {
    title: 'features/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
    args: {
        currentType: ArticleType.POLICY,
    },
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => (
    <ArticleTypeTabs {...args} />
);

export const ArticleTypeTabsNormal = Template.bind({});
ArticleTypeTabsNormal.args = {};

export const ArticleTypeTabsDark = Template.bind({});
ArticleTypeTabsDark.args = {};
ArticleTypeTabsDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ArticleTypeTabsNormalRedesigned = Template.bind({});
ArticleTypeTabsNormalRedesigned.args = {};
ArticleTypeTabsNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticleTypeTabsDarkRedesigned = Template.bind({});
ArticleTypeTabsDarkRedesigned.args = {};
ArticleTypeTabsDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
