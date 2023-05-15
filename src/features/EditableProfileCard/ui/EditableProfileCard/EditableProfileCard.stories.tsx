import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
// import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCard } from './EditableProfileCard';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const EditableProfileCardNormal = Template.bind({});
EditableProfileCardNormal.args = {};

export const EditableProfileCardDark = Template.bind({});
EditableProfileCardDark.args = {};
EditableProfileCardDark.decorators = [ThemeDecorator(Theme.DARK)];
// StoreDecorator({})
