import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatariPicTest from './test-avatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {
        pic: AvatariPicTest,
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarPrimary = Template.bind({});
AvatarPrimary.args = {};

export const AvatarSize = Template.bind({});
AvatarSize.args = {
    size: 50,
};
