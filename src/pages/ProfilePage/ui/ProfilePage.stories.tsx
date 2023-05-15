import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
// import AvatariPicTest from 'shared/assets/pic/test/test-avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
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
    editableProfileCard: {
        form: {
            first: 'Джейн',
            lastname: 'Доу',
            age: 28,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
        },
        readonly: true,
    },
})];

export const ProfilePagePrimaryDark = Template.bind({});
ProfilePagePrimaryDark.args = {};
ProfilePagePrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    editableProfileCard: {
        form: {
            first: 'Джейн',
            lastname: 'Доу',
            age: 28,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
        },
        readonly: true,
    },
})];

export const ProfilePageEditState = Template.bind({});
ProfilePageEditState.args = {};
ProfilePageEditState.decorators = [StoreDecorator({
    editableProfileCard: {
        form: {
            first: 'Джейн',
            lastname: 'Доу',
            age: 28,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
        },
        readonly: false,
    },
})];

export const ProfilePageEditStateDark = Template.bind({});
ProfilePageEditStateDark.args = {};
ProfilePageEditStateDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    editableProfileCard: {
        form: {
            first: 'Джейн',
            lastname: 'Доу',
            age: 28,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin',
            avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
        },
        readonly: false,
    },
})];
