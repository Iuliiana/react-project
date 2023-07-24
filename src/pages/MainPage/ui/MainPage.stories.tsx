import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Page = Template.bind({});
Page.args = {};
Page.decorators = [StoreDecorator({})];

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
