import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsCardContainer } from './ArticleDetailsCardContainer';

export default {
    title: 'STORIES_DIR/ArticleDetailsCardContainer',
    component: ArticleDetailsCardContainer,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetailsCardContainer>;

const Template: ComponentStory<typeof ArticleDetailsCardContainer> = (args) => (
    <ArticleDetailsCardContainer {...args} />
);

export const ArticleDetailsCardContainerNormal = Template.bind({});
ArticleDetailsCardContainerNormal.args = {};

export const ArticleDetailsCardContainerDark = Template.bind({});
ArticleDetailsCardContainerDark.args = {};
ArticleDetailsCardContainerDark.decorators = [ThemeDecorator(Theme.DARK)];
