import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewDesignDecorator } from '@/shared/configs/storybook/NewDesignDecorator';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';
import { ProfileErrorsCode } from '../../model/consts/profileErrorsCodeConsts';
import { testProfile } from '../../model/test/testProfile';

export default {
    title: 'features/ProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
    args: {},
    parameters: {
        loki: {
            skip: true,
        },
    },
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const EditableProfileCardNormal = Template.bind({});
EditableProfileCardNormal.args = {};
EditableProfileCardNormal.decorators = [
    StoreDecorator({
        editableProfileCard: {
            form: testProfile,
            readonly: true,
        },
    }),
];

export const EditableProfileCardDark = Template.bind({});
EditableProfileCardDark.args = {};
EditableProfileCardDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        editableProfileCard: {
            form: testProfile,
            readonly: true,
        },
    }),
];
// StoreDecorator({})

export const EditableProfileCardIsEdit = Template.bind({});
EditableProfileCardIsEdit.args = {};
EditableProfileCardIsEdit.decorators = [
    StoreDecorator({
        editableProfileCard: {
            form: testProfile,
            readonly: false,
        },
    }),
];

export const EditableProfileCardValidationErrors = Template.bind({});
EditableProfileCardValidationErrors.args = {};
EditableProfileCardValidationErrors.decorators = [
    StoreDecorator({
        editableProfileCard: {
            form: testProfile,
            validationErrors: [
                ProfileErrorsCode.INCORRECT_USERDATA,
                ProfileErrorsCode.INCORRECT_CITY,
            ],
            readonly: false,
        },
    }),
];

export const EditableProfileCardError = Template.bind({});
EditableProfileCardError.args = {};
EditableProfileCardError.decorators = [
    StoreDecorator({
        editableProfileCard: {
            error: '123',
        },
    }),
];

export const ProfileRedesignedCardNormal = Template.bind({});
ProfileRedesignedCardNormal.args = {};
ProfileRedesignedCardNormal.decorators = [
    StoreDecorator({
        editableProfileCard: {
            form: testProfile,
            readonly: true,
        },
    }),
    NewDesignDecorator,
    ThemeDecorator(Theme.DARK),
];
