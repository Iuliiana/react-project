import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { UiDesignSwitcher } from './UiDesignSwitcher';

export default {
    title: 'features/UiDesignSwitcher',
    component: UiDesignSwitcher,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof UiDesignSwitcher>;

const Template: ComponentStory<typeof UiDesignSwitcher> = (args) => (
    <UiDesignSwitcher {...args} />
);

export const UiDesignSwitcherNormal = Template.bind({});
UiDesignSwitcherNormal.args = {};

export const UiDesignSwitcherDark = Template.bind({});
UiDesignSwitcherDark.args = {};
UiDesignSwitcherDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
