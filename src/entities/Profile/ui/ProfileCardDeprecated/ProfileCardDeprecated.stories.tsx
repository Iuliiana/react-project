import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';

export default {
    title: 'entities/ProfileCardDeprecated',
    component: ProfileCardDeprecated,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfileCardDeprecated>;

const Template: ComponentStory<typeof ProfileCardDeprecated> = (args) => (
    <ProfileCardDeprecated {...args} />
);

export const ProfileCardDeprecatedNormal = Template.bind({});
ProfileCardDeprecatedNormal.args = {
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
ProfileCardDeprecatedNormal.decorators = [StoreDecorator({})];

export const ProfileCardDeprecatedEditState = Template.bind({});
ProfileCardDeprecatedEditState.args = {
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
ProfileCardDeprecatedEditState.decorators = [StoreDecorator({})];

export const ProfileCardDeprecatedLoading = Template.bind({});
ProfileCardDeprecatedLoading.args = {
    data: undefined,
    isLoading: true,
};
ProfileCardDeprecatedLoading.decorators = [StoreDecorator({})];

export const ProfileCardDeprecatedError = Template.bind({});
ProfileCardDeprecatedError.args = {
    data: undefined,
    error: 'true',
};
ProfileCardDeprecatedError.decorators = [StoreDecorator({})];
