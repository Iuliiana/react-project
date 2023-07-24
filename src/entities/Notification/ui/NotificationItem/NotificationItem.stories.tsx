import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { notificationItem, notificationItemHref } from '../../model/tests/notification';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {},
    args: {

    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const NotificationItemNormal = Template.bind({});
NotificationItemNormal.args = {
    item: notificationItem,
};

export const NotificationItemDark = Template.bind({});
NotificationItemDark.args = {
    item: notificationItem,
};
NotificationItemDark.decorators = [ThemeDecorator(Theme.DARK)];

export const NotificationItemHref = Template.bind({});
NotificationItemHref.args = {
    item: notificationItemHref,
};

export const NotificationItemHrefDark = Template.bind({});
NotificationItemHrefDark.args = {
    item: notificationItemHref,
};
NotificationItemHrefDark.decorators = [ThemeDecorator(Theme.DARK)];
