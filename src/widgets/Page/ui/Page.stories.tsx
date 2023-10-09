import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Page } from './Page';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageNormal = Template.bind({});
PageNormal.args = {};
PageNormal.decorators = [StoreDecorator({})];

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];
