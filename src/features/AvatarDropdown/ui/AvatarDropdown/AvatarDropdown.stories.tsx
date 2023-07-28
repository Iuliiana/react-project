import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {},
    args: {},
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [
        StoreDecorator({
            user: {
                _isInitAuth: true,
                authData: {
                    id: '1',
                    username: 'admin',
                    password: '123',
                    // @ts-ignore
                    roles: ['MANAGER', 'ADMIN'],
                    avatar: 'https://sun1-95.userapi.com/s/v1/ig2/xzx1BbeV9lr8KAWLbMiKM6fnfCD0H2p8R8xUUx25QcZHh4a8H4hjFSGrBKDd7O-_BkZmwM2-eokVbZWliFqknf47.jpg?size=400x400&quality=95&crop=95,79,426,426&ava=1',
                },
            },
        }),
        RouterDecorator(),
    ],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const AvatarDropdownNormal = Template.bind({});
AvatarDropdownNormal.args = {};

export const AvatarDropdownDark = Template.bind({});
AvatarDropdownDark.args = {};
AvatarDropdownDark.decorators = [ThemeDecorator(Theme.DARK)];
