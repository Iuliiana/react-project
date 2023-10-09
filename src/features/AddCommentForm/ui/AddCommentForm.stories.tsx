import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import AddCommentForm from './AddCommentForm';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {},
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => (
    <AddCommentForm {...args} />
);

export const AddCommentFormNormal = Template.bind({});
AddCommentFormNormal.args = {};

export const AddCommentFormDark = Template.bind({});
AddCommentFormDark.args = {};
AddCommentFormDark.decorators = [ThemeDecorator(Theme.DARK)];

export const AddCommentFormRedesignedNormal = Template.bind({});
AddCommentFormRedesignedNormal.args = {};
AddCommentFormRedesignedNormal.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const AddCommentFormRedesignedDark = Template.bind({});
AddCommentFormRedesignedDark.args = {};
AddCommentFormRedesignedDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
