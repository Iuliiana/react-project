import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
// import AvatariPicTest from 'shared/assets/pic/test/test-avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const ProfileCardPrimary = Template.bind({});
ProfileCardPrimary.args = {
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
ProfileCardPrimary.decorators = [StoreDecorator({})];

export const ProfileCardEditState = Template.bind({});
ProfileCardEditState.args = {
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
    readonly: false,
};
ProfileCardEditState.decorators = [StoreDecorator({})];

export const ProfileCardLoading = Template.bind({});
ProfileCardLoading.args = {
    data: undefined,
    isLoading: true,
};
ProfileCardLoading.decorators = [StoreDecorator({
})];

export const ProfileCardError = Template.bind({});
ProfileCardError.args = {
    data: undefined,
    error: 'true',
};
ProfileCardError.decorators = [StoreDecorator({})];
