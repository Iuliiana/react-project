import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayoutDecorator } from '@/shared/configs/storybook/MainLayoutDecorator';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Sidebar } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
    <Sidebar {...args} />
);
export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
export const LightAuth = Template.bind({});
LightAuth.args = {};
LightAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
];

export const DarkAuth = Template.bind({});
DarkAuth.args = {};
DarkAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
    ThemeDecorator(Theme.DARK),
];

export const LightRedesigned = Template.bind({});
LightRedesigned.args = {};
LightRedesigned.decorators = [
    MainLayoutDecorator({ ariaType: 'sidebar' }),
    NewDesignDecorator,
];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [
    MainLayoutDecorator({ ariaType: 'sidebar' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];

export const LightRedesignedAuth = Template.bind({});
LightRedesignedAuth.args = {};
LightRedesignedAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
    MainLayoutDecorator({ ariaType: 'sidebar' }),
    NewDesignDecorator,
];

export const DarkRedesignedAuth = Template.bind({});
DarkRedesignedAuth.args = {};
DarkRedesignedAuth.decorators = [
    StoreDecorator({
        user: {
            authData: {},
        },
    }),
    MainLayoutDecorator({ ariaType: 'sidebar' }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
