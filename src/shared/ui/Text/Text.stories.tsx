import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const OnlyTextPrimary = Template.bind({});
OnlyTextPrimary.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    textTheme: TextTheme.PRIMARY,
};
export const OnlyTitePrimary = Template.bind({});
OnlyTitePrimary.args = {
    title: 'Lorem ipsum dolor sit amet',
    textTheme: TextTheme.PRIMARY,
};

export const OnlyTextPrimaryDark = Template.bind({});
OnlyTextPrimaryDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    textTheme: TextTheme.PRIMARY,
};
OnlyTextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitePrimaryDark = Template.bind({});
OnlyTitePrimaryDark.args = {
    title: 'Lorem ipsum dolor sit amet',
    textTheme: TextTheme.PRIMARY,
};
OnlyTitePrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
    textTheme: TextTheme.PRIMARY,
};

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
    textTheme: TextTheme.PRIMARY,
};
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextPrimaryError = Template.bind({});
TextPrimaryError.args = {
    textTheme: TextTheme.ERROR,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};

export const TextPrimaryErrorDark = Template.bind({});
TextPrimaryErrorDark.args = {
    textTheme: TextTheme.ERROR,
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorem error itaque? Ab ameta spernatur deserunt distinctio dolores doloribus enim eum, iste libero obcaecati odio qui reiciendisrepellendus totam voluptatem?',
    title: 'Lorem ipsum dolor sit amet',
};
TextPrimaryErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
