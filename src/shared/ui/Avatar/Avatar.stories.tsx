import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatariPicTest from '@/shared/assets/pic/test/test-avatar.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {
        pic: AvatariPicTest,
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarPrimary = Template.bind({});
AvatarPrimary.args = {};

export const AvatarSize = Template.bind({});
AvatarSize.args = {
    size: 50,
};
