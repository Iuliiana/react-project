import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationList } from './NotificationList';
import { notificationList } from '../../model/tests/notificationList';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator(), StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications?_expand=user`,
                method: 'GET',
                status: 200,
                response: notificationList,
            },
        ],
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const NotificationListNormal = Template.bind({});
NotificationListNormal.args = {};

export const NotificationListDark = Template.bind({});
NotificationListDark.args = {};
NotificationListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NotificationListNormalRedesigned = Template.bind({});
NotificationListNormalRedesigned.args = {};
NotificationListNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const NotificationListDarkRedesigned = Template.bind({});
NotificationListDarkRedesigned.args = {};
NotificationListDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
