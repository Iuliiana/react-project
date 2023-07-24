import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import ProfileRating from './ProfileRating';

export default {
    title: 'features/ProfileRating',
    component: ProfileRating,
    argTypes: {},
    args: {
        profileId: '2',
    },
    decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const ProfileRatingNormal = Template.bind({});
ProfileRatingNormal.args = {};
ProfileRatingNormal.parameters = {
    mockData: [
        {
            // @ts-ignore
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [{
                profileId: '2',
                userId: '1',
                rate: 1,
                feedback: 'uu',
                id: 'u4OVz3h',
            }],
        },
    ],
};

export const ProfileRatingDark = Template.bind({});
ProfileRatingDark.args = {};
ProfileRatingDark.decorators = [ThemeDecorator(Theme.DARK)];
ProfileRatingDark.parameters = {
    mockData: [
        {
            // @ts-ignore
            url: `${__API__}/profile-ratings?userId=&profileId=2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
