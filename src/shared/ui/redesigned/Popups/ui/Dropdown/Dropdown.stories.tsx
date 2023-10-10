import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import AvatariPicTest from 'shared/assets/pic/test/test-avatar.jpg';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Dropdown } from './Dropdown';
import { Avatar } from '../../../Avatar/Avatar';
import { Button } from '../../../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
    args: {
        btn: <Avatar size={30} src={AvatariPicTest} />,
        direction: 'bottom left',
        items: [
            {
                content: <Button>Account settings</Button>,
            },
        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const DropdownNormal = Template.bind({});
DropdownNormal.args = {};
DropdownNormal.decorators = [
    (StoryComponent: Story) => (
        <div style={{ margin: '10rem' }}>
            <StoryComponent />
        </div>
    ),
];

export const DropdownDark = Template.bind({});
DropdownDark.args = {};
DropdownDark.decorators = [
    ThemeDecorator(Theme.DARK),
    (StoryComponent: Story) => (
        <div style={{ margin: '10rem' }}>
            <StoryComponent />
        </div>
    ),
];
