import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';

export default {
    title: 'entities/ProfileCard/ProfileCardRedesigned',
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
ProfileCardRedesignedNormal.decorators = [NewDesignDecorator];

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
ProfileCardRedesignedDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
