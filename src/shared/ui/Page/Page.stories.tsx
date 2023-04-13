import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/configs/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const PageNormal = Template.bind({});
PageNormal.args = {};

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [ThemeDecorator(Theme.DARK)];
