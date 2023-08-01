import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterDecorator } from '@/shared/configs/storybook/RouterDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {},
    decorators: [RouterDecorator()],
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
    <ThemeSwitcher {...args} />
);
export const Page = Template.bind({});
Page.args = {};

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [ThemeDecorator(Theme.DARK)];
