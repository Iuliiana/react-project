import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesDetailsNavigationContainer } from './ArticlesDetailsNavigationContainer';

export default {
    title: 'STORIES_DIR/ArticlesDetailsNavigationContainer',
    component: ArticlesDetailsNavigationContainer,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticlesDetailsNavigationContainer>;

const Template: ComponentStory<typeof ArticlesDetailsNavigationContainer> = (
    args,
) => <ArticlesDetailsNavigationContainer {...args} />;

export const ArticlesDetailsNavigationContainerNormal = Template.bind({});
ArticlesDetailsNavigationContainerNormal.args = {};

export const ArticlesDetailsNavigationContainerDark = Template.bind({});
ArticlesDetailsNavigationContainerDark.args = {};
ArticlesDetailsNavigationContainerDark.decorators = [
    ThemeDecorator(Theme.DARK),
];
