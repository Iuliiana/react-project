import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
    title: 'entities/ProfileCardRedesigned',
    component: ProfileCardRedesigned,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfileCardRedesigned>;

const Template: ComponentStory<typeof ProfileCardRedesigned> = (args) => (
    <ProfileCardRedesigned {...args} />
);

export const ProfileCardRedesignedNormal = Template.bind({});
ProfileCardRedesignedNormal.args = {
    data: {
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
};

export const ProfileCardRedesignedDark = Template.bind({});
ProfileCardRedesignedDark.args = {
    data: {
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
};
ProfileCardRedesignedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileCardRedesignedLoading = Template.bind({});
ProfileCardRedesignedLoading.args = {
    data: undefined,
    isLoading: true,
};
ProfileCardRedesignedLoading.decorators = [StoreDecorator({})];

export const ProfileCardRedesignedError = Template.bind({});
ProfileCardRedesignedError.args = {
    data: undefined,
    error: 'true',
};
ProfileCardRedesignedError.decorators = [StoreDecorator({})];
