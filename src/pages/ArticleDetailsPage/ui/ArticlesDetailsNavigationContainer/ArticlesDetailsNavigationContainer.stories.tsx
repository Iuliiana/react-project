import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { articleData } from '@/entities/Article/testing';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StickyLayoutDecorator } from '@/shared/configs/storybook/StickyLayoutDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesDetailsNavigationContainer } from './ArticlesDetailsNavigationContainer';

export default {
    title: 'pages/ArticleDetailsPage/ArticlesDetailsNavigationContainer',
    component: ArticlesDetailsNavigationContainer,
    argTypes: {},
    args: {},
    decorators: [
        StoreDecorator({
            // @ts-ignore
            articleDetails: {
                data: articleData,
            },
        }),
        RouterDecorator(),
    ],
} as ComponentMeta<typeof ArticlesDetailsNavigationContainer>;

const Template: ComponentStory<typeof ArticlesDetailsNavigationContainer> = (
    args,
) => <ArticlesDetailsNavigationContainer {...args} />;

export const ArticlesDetailsNavigationContainerNormal = Template.bind({});
ArticlesDetailsNavigationContainerNormal.args = {};
ArticlesDetailsNavigationContainerNormal.decorators = [
    StickyLayoutDecorator({ ariaType: 'right' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticlesDetailsNavigationContainerDark = Template.bind({});
ArticlesDetailsNavigationContainerDark.args = {};
ArticlesDetailsNavigationContainerDark.decorators = [
    StickyLayoutDecorator({ ariaType: 'right' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
