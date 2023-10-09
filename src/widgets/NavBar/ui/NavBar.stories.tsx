import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayoutDecorator } from '@/shared/configs/storybook/MainLayoutDecorator';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NavBar } from './NavBar';

export default {
    title: 'widgets/NavBar',
    component: NavBar,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;
export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const AuthUserLight = Template.bind({});
AuthUserLight.args = {};
AuthUserLight.decorators = [
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
];

export const AuthUserDark = Template.bind({});
AuthUserDark.args = {};
AuthUserDark.decorators = [
    ThemeDecorator(Theme.DARK),
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
];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    MainLayoutDecorator({ ariaType: 'header' }),
    NewDesignDecorator,
    StoreDecorator({}),
];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    MainLayoutDecorator({ ariaType: 'header' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const AuthUserLightRedesigned = Template.bind({});
AuthUserLightRedesigned.args = {};
AuthUserLightRedesigned.decorators = [
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
    MainLayoutDecorator({ ariaType: 'header' }),
    NewDesignDecorator,
];

export const AuthUserDarkRedesigned = Template.bind({});
AuthUserDarkRedesigned.args = {};
AuthUserDarkRedesigned.decorators = [
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
    MainLayoutDecorator({ ariaType: 'header' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
