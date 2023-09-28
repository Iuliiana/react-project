import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
    args: {
        children: 'Test',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Save = Template.bind({});
Save.args = {
    variant: 'save',
};

export const SaveDark = Template.bind({});
SaveDark.args = {
    variant: 'save',
};
SaveDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Cancel = Template.bind({});
Cancel.args = {
    variant: 'cancel',
};

export const CancelDark = Template.bind({});
CancelDark.args = {
    variant: 'cancel',
};
CancelDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'm',
};

export const SquareMDark = Template.bind({});
SquareMDark.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'm',
};
SquareMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'l',
};

export const SquareLDark = Template.bind({});
SquareLDark.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'l',
};
SquareLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'xl',
};

export const SquareXLDark = Template.bind({});
SquareXLDark.args = {
    children: '>',
    variant: 'clear',
    square: true,
    size: 'xl',
};
SquareXLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'clear',
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    variant: 'clear',
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
