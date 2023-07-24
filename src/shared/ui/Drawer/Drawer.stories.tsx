import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
// eslint-disable-next-line itretiakova-plugin/layer-imports
import { NotificationList } from '@/entities/Notification';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { notificationList } from '@/entities/Notification/testing';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { Drawer } from './Drawer';
import { Theme } from '@/shared/const/theme';

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
