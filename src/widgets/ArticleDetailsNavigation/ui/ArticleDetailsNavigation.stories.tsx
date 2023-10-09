import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StickyLayoutDecorator } from '@/shared/configs/storybook/StickyLayoutDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsNavigation } from './ArticleDetailsNavigation';

export default {
    title: 'widgets/ArticleDetailsNavigation',
    component: ArticleDetailsNavigation,
    argTypes: {},
    args: {
        avatar: 'https://sun1-95.userapi.com/s/v1/ig2/xzx1BbeV9lr8KAWLbMiKM6fnfCD0H2p8R8xUUx25QcZHh4a8H4hjFSGrBKDd7O-_BkZmwM2-eokVbZWliFqknf47.jpg?size=400x400&quality=95&crop=95,79,426,426&ava=1',
        createdAt: '10.01.2000',
        views: 150,
        username: 'user',
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleDetailsNavigation>;

const Template: ComponentStory<typeof ArticleDetailsNavigation> = (args) => (
    <ArticleDetailsNavigation {...args} />
);

export const ArticleDetailsNavigationNormal = Template.bind({});
ArticleDetailsNavigationNormal.args = {};
ArticleDetailsNavigationNormal.decorators = [
    StickyLayoutDecorator({ ariaType: 'right' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const ArticleDetailsNavigationDark = Template.bind({});
ArticleDetailsNavigationDark.args = {};
ArticleDetailsNavigationDark.decorators = [
    StickyLayoutDecorator({ ariaType: 'right' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
