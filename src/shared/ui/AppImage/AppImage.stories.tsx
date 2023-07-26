import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DefaultUserAvatar from '@/shared/assets/icons/carbon_user-avatar-filled.svg';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppImage } from './AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {},
    args: {
        errorFallback: <Icon Svg={DefaultUserAvatar} />,
        isLoadingFallback: <Skeleton height={50} width={50} radius="50%" />,
    },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const AppImageNormal = Template.bind({});
AppImageNormal.args = {};

export const AppImageDark = Template.bind({});
AppImageDark.args = {};
AppImageDark.decorators = [ThemeDecorator(Theme.DARK)];
