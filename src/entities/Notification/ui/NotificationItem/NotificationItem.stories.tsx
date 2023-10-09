import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NotificationItem } from './NotificationItem';
import {
    notificationItem,
    notificationItemHref,
} from '../../model/tests/notification';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

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

export const NotificationItemNormalRedesigned = Template.bind({});
NotificationItemNormalRedesigned.args = {
    item: notificationItem,
};
NotificationItemNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const NotificationItemDarkRedesigned = Template.bind({});
NotificationItemDarkRedesigned.args = {
    item: notificationItem,
};
NotificationItemDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
