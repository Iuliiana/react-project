import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const ProfileCardLoading = Template.bind({});
ProfileCardLoading.args = {
    data: undefined,
    isLoading: true,
    error: '',
};
ProfileCardLoading.decorators = [StoreDecorator({})];

export const ProfileCardError = Template.bind({});
ProfileCardError.args = {
    data: undefined,
    error: 'true',
};
ProfileCardError.decorators = [StoreDecorator({})];
