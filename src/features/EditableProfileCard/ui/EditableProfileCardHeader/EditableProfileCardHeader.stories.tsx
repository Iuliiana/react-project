import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

export default {
    title: 'STORIES_DIR/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof EditableProfileCardHeader>;

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />;

export const EditableProfileCardHeaderNormal = Template.bind({});
EditableProfileCardHeaderNormal.args = {};

export const EditableProfileCardHeaderDark = Template.bind({});
EditableProfileCardHeaderDark.args = {};
EditableProfileCardHeaderDark.decorators = [ThemeDecorator(Theme.DARK)];
