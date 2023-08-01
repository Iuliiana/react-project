import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// import AvatariPicTest from 'shared/assets/pic/test/test-avatar.jpg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    args: {},
    decorators: [
        RouterDecorator({
            path: '/profile/:id',
            initialEntries: ['/profile/1'],
        }),
    ],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const ProfilePagePrimary = Template.bind({});
ProfilePagePrimary.args = {};
ProfilePagePrimary.decorators = [
    StoreDecorator({
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
    }),
];
ProfilePagePrimary.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const ProfilePagePrimaryDark = Template.bind({});
ProfilePagePrimaryDark.args = {};
ProfilePagePrimaryDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
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
    }),
];
ProfilePagePrimaryDark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const ProfilePageEditState = Template.bind({});
ProfilePageEditState.args = {};
ProfilePageEditState.decorators = [
    StoreDecorator({
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
    }),
];
ProfilePageEditState.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};

export const ProfilePageEditStateDark = Template.bind({});
ProfilePageEditStateDark.args = {};
ProfilePageEditStateDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
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
    }),
];
ProfilePageEditStateDark.parameters = {
    mockData: [
        {
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
