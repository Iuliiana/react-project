import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
        children: 'Test',
    },
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    variant: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Red = Template.bind({});
Red.args = {
    variant: 'red',
};

export const RedDark = Template.bind({});
RedDark.args = {
    variant: 'red',
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
