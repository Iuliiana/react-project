import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { CommentItem } from './CommentItem';

export default {
    title: 'entities/Comments/CommentItem',
    component: CommentItem,
    argTypes: {},
    args: {
        comment: {
            id: '2',
            text: 'some comment 2',
            user: {
                id: '1',
                username: 'admin',
                avatar: 'https://sun9-11.userapi.com/impg/x1BCzJ8lDEad3xAef-dL4MFgA168qasFDpOfFA/4xNFKwt6TDE.jpg?size=523x604&quality=96&sign=89c368a882b478fa487741c3feb4f888&type=album',
            },
        },
    },
    parameters: {
        loki: {
            skip: true,
        },
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof CommentItem>;

const Template: ComponentStory<typeof CommentItem> = (args) => <CommentItem {...args} />;

export const CommentItemNormal = Template.bind({});
CommentItemNormal.args = {};

export const CommentItemDark = Template.bind({});
CommentItemDark.args = {};
CommentItemDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CommentItemIsLoading = Template.bind({});
CommentItemIsLoading.args = {
    isLoading: true,
};

export const CommentItemIsLoadingDark = Template.bind({});
CommentItemIsLoadingDark.args = {
    isLoading: true,
};
CommentItemIsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
