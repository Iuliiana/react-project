import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
    args: {},
    decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const TextPrimary = Template.bind({});
TextPrimary.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
    variant: 'primary',
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
    variant: 'primary',
};
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextError = Template.bind({});
TextError.args = {
    variant: 'error',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};

export const TextErrorDark = Template.bind({});
TextErrorDark.args = {
    variant: 'error',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};
TextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextAccent = Template.bind({});
TextAccent.args = {
    variant: 'accent',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};

export const TextAccentDark = Template.bind({});
TextAccentDark.args = {
    variant: 'accent',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};
TextAccentDark.decorators = [ThemeDecorator(Theme.DARK)];
