import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    argTypes: {},
    args: {
        comments: [
            {
                id: '1',
                text: 'some comment 1',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://sun9-11.userapi.com/impg/x1BCzJ8lDEad3xAef-dL4MFgA168qasFDpOfFA/4xNFKwt6TDE.jpg?size=523x604&quality=96&sign=89c368a882b478fa487741c3feb4f888&type=album',
                },
            },
            {
                id: '2',
                text: 'some comment 2',
                user: {
                    id: '1',
                    username: 'admin',
                    avatar: 'https://sun9-11.userapi.com/impg/x1BCzJ8lDEad3xAef-dL4MFgA168qasFDpOfFA/4xNFKwt6TDE.jpg?size=523x604&quality=96&sign=89c368a882b478fa487741c3feb4f888&type=album',
                },
            },
        ],
    },
    decorators: [RouterDecorator()],
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const CommentListNormal = Template.bind({});
CommentListNormal.args = {};

export const CommentListDark = Template.bind({});
CommentListDark.args = {};
CommentListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CommentListNormalRedesigned = Template.bind({});
CommentListNormalRedesigned.args = {};
CommentListNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const CommentListDarkRedesigned = Template.bind({});
CommentListDarkRedesigned.args = {};
CommentListDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
