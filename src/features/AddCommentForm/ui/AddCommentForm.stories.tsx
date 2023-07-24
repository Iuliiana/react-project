import React from 'react';
import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />;

export const AddCommentFormNormal = Template.bind({});
AddCommentFormNormal.args = {};
AddCommentFormNormal.decorators = [StoreDecorator({})];

export const AddCommentFormDark = Template.bind({});
AddCommentFormDark.args = {};
AddCommentFormDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
