import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from 'shared/configs/storybook/RouterDecorator';
import { NavBar } from './NavBar';

export default {
    title: 'widgets/NavBar',
    component: NavBar,
    argTypes: {},
    decorators: [RouterDecorator()],
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
AuthUserLight.decorators = [StoreDecorator({
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
})];

export const AuthUserDark = Template.bind({});
AuthUserDark.args = {};
AuthUserDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
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
})];
