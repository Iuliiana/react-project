import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { Page } from './Page';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {},
    args: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageNormal = Template.bind({});
PageNormal.args = {};
PageNormal.decorators = [StoreDecorator({})];

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
