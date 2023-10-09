import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageError } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {},
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
    <PageError {...args} />
);
export const Page = Template.bind({});
Page.args = {};

export const PageDark = Template.bind({});
PageDark.args = {};
PageDark.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];
