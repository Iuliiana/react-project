import React from 'react';
import { ComponentStory, ComponentMeta, Story } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Avatar } from '../../../Avatar/Avatar';
import { Button } from '../../../Button/Button';
import { Dropdown } from './Dropdown';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {},
    args: {
        btn: <Avatar size={30} pic="https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png" />,
        direction: 'bottom left',
        items: [
            {
                content: <Button>Account settings</Button>,
            },
        ],
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DropdownNormal = Template.bind({});
DropdownNormal.args = {};
DropdownNormal.decorators = [(StoryComponent: Story) => <div style={{ margin: '10rem' }}><StoryComponent /></div>];

export const DropdownDark = Template.bind({});
DropdownDark.args = {};
DropdownDark.decorators = [ThemeDecorator(Theme.DARK), (StoryComponent: Story) => <div style={{ margin: '10rem' }}><StoryComponent /></div>];
