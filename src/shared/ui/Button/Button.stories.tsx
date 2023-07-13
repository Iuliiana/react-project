import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    themeButton: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    themeButton: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    themeButton: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    themeButton: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    themeButton: ButtonTheme.BACKGROUND,
};

export const BackgroundThemeDark = Template.bind({});
BackgroundThemeDark.args = {
    themeButton: ButtonTheme.BACKGROUND,
};
BackgroundThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    themeButton: ButtonTheme.BACKGROUND_INVERTRD,
};

export const BackgroundInvertedThemeDark = Template.bind({});
BackgroundInvertedThemeDark.args = {
    themeButton: ButtonTheme.BACKGROUND_INVERTRD,
};
BackgroundInvertedThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
};

export const SquareMDark = Template.bind({});
SquareMDark.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
};
SquareMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};

export const SquareLDark = Template.bind({});
SquareLDark.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};
SquareLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};

export const SquareXLDark = Template.bind({});
SquareXLDark.args = {
    children: '>',
    themeButton: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};
SquareXLDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineM = Template.bind({});
OutlineM.args = {
    themeButton: ButtonTheme.OUTLINE,
    size: ButtonSize.M,
};

export const OutlineL = Template.bind({});
OutlineL.args = {
    themeButton: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    themeButton: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const DisabledBackground = Template.bind({});
DisabledBackground.args = {
    themeButton: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    disabled: true,
};

export const DisabledBackgroundDark = Template.bind({});
DisabledBackgroundDark.args = {
    themeButton: ButtonTheme.BACKGROUND,
    size: ButtonSize.M,
    disabled: true,
};
DisabledBackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];
