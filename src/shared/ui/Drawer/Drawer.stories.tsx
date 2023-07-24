import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
// eslint-disable-next-line itretiakova-plugin/layer-imports
import { NotificationList } from '@/entities/Notification';
import { notificationList } from '@/entities/Notification/testing';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Drawer } from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {},
    args: {
        children: <NotificationList />,
        isOpen: true,
    },
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
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const DrawerNormal = Template.bind({});
DrawerNormal.args = {};
DrawerNormal.decorators = [StoreDecorator({})];

export const DrawerDark = Template.bind({});
DrawerDark.args = {};
DrawerDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
