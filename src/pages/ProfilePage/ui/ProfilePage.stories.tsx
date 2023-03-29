import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const ProfilePagePrimary = Template.bind({});
ProfilePagePrimary.args = {};
ProfilePagePrimary.decorators = [StoreDecorator({
    profile: {
        data: {
            first: 'Test',
            lastname: 'Test',
        },
    },
    user: {
        authData: {},
    },
})];

export const ProfilePagePrimaryDark = Template.bind({});
ProfilePagePrimaryDark.args = {};
ProfilePagePrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        data: {
            first: 'Test',
            lastname: 'Test',
        },
    },
    user: {
        authData: {},
    },
})];
