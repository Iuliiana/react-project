import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import AvatariPicTest from 'shared/assets/pic/test/test-avatar.jpg';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
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
        avatar: AvatariPicTest,
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
        avatar: AvatariPicTest,
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