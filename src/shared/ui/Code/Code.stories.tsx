import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
    args: {
        text:
            ' case ArticleBlockType.CODE:\n' +
            '            return (\n' +
            '                <ArticleCodeBlockComponent\n' +
            '                    block={block}\n' +
            '                    key={block.id}\n' +
            '                    className={cls.block}\n' +
            '                />\n' +
            '            );\n' +
            '        case ArticleBlockType.TEXT:\n' +
            '            return (\n' +
            '                <ArticleTextBlockComponent\n' +
            '                    block={block}\n' +
            '                    key={block.id}\n' +
            '                    className={cls.block}',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodeNormal = Template.bind({});
CodeNormal.args = {};

export const CodeDark = Template.bind({});
CodeDark.args = {};
CodeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CodeNormalRedesigned = Template.bind({});
CodeNormalRedesigned.args = {};
CodeNormalRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const CodeDarkRedesigned = Template.bind({});
CodeDarkRedesigned.args = {};
CodeDarkRedesigned.decorators = [
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
