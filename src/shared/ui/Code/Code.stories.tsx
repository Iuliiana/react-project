import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Code } from './Code';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
    args: {
        text: ' case ArticleBlockType.CODE:\n'
            + '            return (\n'
            + '                <ArticleCodeBlockComponent\n'
            + '                    block={block}\n'
            + '                    key={block.id}\n'
            + '                    className={cls.block}\n'
            + '                />\n'
            + '            );\n'
            + '        case ArticleBlockType.TEXT:\n'
            + '            return (\n'
            + '                <ArticleTextBlockComponent\n'
            + '                    block={block}\n'
            + '                    key={block.id}\n'
            + '                    className={cls.block}',
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodeNormal = Template.bind({});
CodeNormal.args = {};

export const CodeDark = Template.bind({});
CodeDark.args = {};
CodeDark.decorators = [ThemeDecorator(Theme.DARK)];
