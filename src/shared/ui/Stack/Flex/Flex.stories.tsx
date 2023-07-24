import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {},
    args: {
        /* eslint-disable-next-line */
        children: <><div>block 1</div><div>block 2</div><div>block 3</div><div>block 4</div></>,
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexNormal = Template.bind({});
FlexNormal.args = {};

export const FlexDark = Template.bind({});
FlexDark.args = {};
FlexDark.decorators = [ThemeDecorator(Theme.DARK)];

export const FlexJustifyCenter = Template.bind({});
FlexJustifyCenter.args = {
    justify: 'center',
    gap: '16',
};

export const FlexAlignCenter = Template.bind({});
FlexAlignCenter.args = {
    align: 'center',
    gap: '32',
};

export const FlexDirectionColumn = Template.bind({});
FlexDirectionColumn.args = {
    direction: 'column',
    gap: '8',
};
