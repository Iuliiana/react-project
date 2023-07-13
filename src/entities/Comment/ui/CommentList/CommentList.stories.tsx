import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comments/CommentList',
    component: CommentList,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const CommentListNormal = Template.bind({});
CommentListNormal.args = {
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
};

export const CommentListDark = Template.bind({});
CommentListDark.args = {
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
};
CommentListDark.decorators = [ThemeDecorator(Theme.DARK)];
