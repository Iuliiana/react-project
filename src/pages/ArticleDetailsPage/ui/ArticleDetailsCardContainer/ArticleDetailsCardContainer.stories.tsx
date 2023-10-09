import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { articleData } from '@/entities/Article/testing';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsCardContainer } from './ArticleDetailsCardContainer';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsCardContainer',
    component: ArticleDetailsCardContainer,
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: articleData,
            },
        }),
        RouterDecorator({
            initialEntries: ['/articles/1'],
            path: '/articles/:id',
        }),
    ],
} as ComponentMeta<typeof ArticleDetailsCardContainer>;

const Template: ComponentStory<typeof ArticleDetailsCardContainer> = (args) => (
    <ArticleDetailsCardContainer {...args} />
);

export const ArticleDetailsCardContainerNormal = Template.bind({});
ArticleDetailsCardContainerNormal.args = {};

export const ArticleDetailsCardContainerDark = Template.bind({});
ArticleDetailsCardContainerDark.args = {};
ArticleDetailsCardContainerDark.decorators = [ThemeDecorator(Theme.DARK)];
