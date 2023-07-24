import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { NotificationList } from './NotificationList';
import { notificationList } from '../../model/tests/notificationList';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {},
    args: {},
    decorators: [withMock, RouterDecorator()],
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

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const NotificationListNormal = Template.bind({});
NotificationListNormal.args = {};
NotificationListNormal.decorators = [StoreDecorator({})];

export const NotificationListDark = Template.bind({});
NotificationListDark.args = {};
NotificationListDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
