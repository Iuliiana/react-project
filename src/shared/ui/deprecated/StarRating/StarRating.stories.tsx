import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { StarRating } from './StarRating';

export default {
    title: 'shared/deprecated/StarRating',
    component: StarRating,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const StarRatingNormal = Template.bind({});
StarRatingNormal.args = {};

export const StarRatingNormalSelect = Template.bind({});
StarRatingNormalSelect.args = {
    selectesStars: 4,
};

export const StarRatingDark = Template.bind({});
StarRatingDark.args = {};
StarRatingDark.decorators = [ThemeDecorator(Theme.DARK)];
