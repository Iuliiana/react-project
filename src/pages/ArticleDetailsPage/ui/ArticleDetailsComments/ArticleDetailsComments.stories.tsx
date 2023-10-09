import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsComments } from './ArticleDetailsComments';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {},
    args: {
        id: '1',
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const ArticleDetailsCommentsNormal = Template.bind({});
ArticleDetailsCommentsNormal.args = {};
ArticleDetailsCommentsNormal.decorators = [StoreDecorator({})];

export const ArticleDetailsCommentsDark = Template.bind({});
ArticleDetailsCommentsDark.args = {};
ArticleDetailsCommentsDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
];

export const RedesignedCommentsNormal = Template.bind({});
RedesignedCommentsNormal.args = {};
RedesignedCommentsNormal.decorators = [
    StoreDecorator({}),
    NewDesignDecorator,
    ThemeDecorator(Theme.LIGHT),
];

export const RedesignedCommentsDark = Template.bind({});
RedesignedCommentsDark.args = {};
RedesignedCommentsDark.decorators = [
    StoreDecorator({}),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
