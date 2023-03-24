import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { NavBar } from './NavBar';

export default {
    title: 'widgets/NavBar',
    component: NavBar,
    argTypes: {},
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
        authData: {},
    },
})];

export const AuthUserDark = Template.bind({});
AuthUserDark.args = {};
AuthUserDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {},
    },
})];
