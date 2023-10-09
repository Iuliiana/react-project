import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {},
    decorators: [RouterDecorator(), StoreDecorator({})],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);
export const Page = Template.bind({});
Page.args = {};

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PageRedesigned = Template.bind({});
PageRedesigned.args = {};
PageRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.LIGHT)];

export const PageRedesignedDark = Template.bind({});
PageRedesignedDark.args = {};
PageRedesignedDark.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
