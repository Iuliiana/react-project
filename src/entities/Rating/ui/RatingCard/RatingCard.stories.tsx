import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { RatingCard } from './RatingCard';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {},
    args: {
        title: 'Как вам статья?',
        feedbackTitle: 'Введите отзыв',
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const RatingCardNormal = Template.bind({});
RatingCardNormal.args = {};

export const RatingCardDark = Template.bind({});
RatingCardDark.args = {};
RatingCardDark.decorators = [ThemeDecorator(Theme.DARK)];
