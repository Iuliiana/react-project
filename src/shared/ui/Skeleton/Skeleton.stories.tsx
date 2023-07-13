import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonNormal = Template.bind({});
SkeletonNormal.args = {
    width: '100%',
    height: '10rem',
};

export const SkeletonDark = Template.bind({});
SkeletonDark.args = {
    width: '100%',
    height: '10rem',
};
SkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonNormalCircle = Template.bind({});
SkeletonNormalCircle.args = {
    width: '5rem',
    height: '5rem',
    radius: '50%',
};

export const SkeletonDarkCircle = Template.bind({});
SkeletonDarkCircle.args = {
    width: '5rem',
    height: '5rem',
    radius: '50%',
};
SkeletonDarkCircle.decorators = [ThemeDecorator(Theme.DARK)];
