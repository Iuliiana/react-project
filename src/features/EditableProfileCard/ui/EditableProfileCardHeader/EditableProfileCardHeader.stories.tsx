import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'features/ProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const EditableProfileCardHeaderNormal = Template.bind({});
EditableProfileCardHeaderNormal.args = {};
EditableProfileCardHeaderNormal.decorators = [
    StoreDecorator({
        editableProfileCard: {
            readonly: false,
        },
    }),
];

export const EditableProfileCardHeaderDark = Template.bind({});
EditableProfileCardHeaderDark.args = {};
EditableProfileCardHeaderDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        editableProfileCard: {
            readonly: false,
        },
    }),
];

export const EditableProfileCardHeaderNormalReadonly = Template.bind({});
EditableProfileCardHeaderNormalReadonly.args = {};
EditableProfileCardHeaderNormalReadonly.decorators = [
    StoreDecorator({
        editableProfileCard: {
            readonly: true,
        },
    }),
];

export const EditableProfileCardHeaderReadonlyDark = Template.bind({});
EditableProfileCardHeaderReadonlyDark.args = {};
EditableProfileCardHeaderReadonlyDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        editableProfileCard: {
            readonly: true,
        },
    }),
];
