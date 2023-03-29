import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const PagePrimary = Template.bind({});
PagePrimary.args = {};
PagePrimary.decorators = [StoreDecorator({})];

export const PagePrimaryDark = Template.bind({});
PagePrimaryDark.args = {};
PagePrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
