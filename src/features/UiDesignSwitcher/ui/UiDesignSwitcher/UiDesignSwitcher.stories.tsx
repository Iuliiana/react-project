import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
// import { StoreDecorator } from 'shared/configs/storybook/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => <UiDesignSwitcher {...args} />;

export const UiDesignSwitcherNormal = Template.bind({});
UiDesignSwitcherNormal.args = {};

export const UiDesignSwitcherDark = Template.bind({});
UiDesignSwitcherDark.args = {};
UiDesignSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
// StoreDecorator({})
