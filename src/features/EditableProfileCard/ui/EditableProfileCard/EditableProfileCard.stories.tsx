import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/configs/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/configs/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';
import { ProfileErrorsCode } from '../../model/consts/profileErrorsCodeConsts';

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

const data = {
    first: 'Джейн',
    lastname: 'Доу',
    age: 28,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Moscow',
    username: 'admin',
    avatar: 'https://cs13.pikabu.ru/avatars/658/x658267-1013849002.png',
};

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const EditableProfileCardNormal = Template.bind({});
EditableProfileCardNormal.args = {};
EditableProfileCardNormal.decorators = [StoreDecorator({
    editableProfileCard: {
        form: data,
        readonly: true,
    },
})];

export const EditableProfileCardDark = Template.bind({});
EditableProfileCardDark.args = {};
EditableProfileCardDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    editableProfileCard: {
        form: data,
        readonly: true,
    },
})];
// StoreDecorator({})

export const EditableProfileCardIsEdit = Template.bind({});
EditableProfileCardIsEdit.args = {};
EditableProfileCardIsEdit.decorators = [StoreDecorator({
    editableProfileCard: {
        form: data,
        readonly: false,
    },
})];

export const EditableProfileCardValidationErrors = Template.bind({});
EditableProfileCardValidationErrors.args = {};
EditableProfileCardValidationErrors.decorators = [StoreDecorator({
    editableProfileCard: {
        form: data,
        validationErrors: [
            ProfileErrorsCode.INCORRECT_USERDATA,
            ProfileErrorsCode.INCORRECT_CITY,

        ],
        readonly: false,
    },
})];

export const EditableProfileCardError = Template.bind({});
EditableProfileCardError.args = {};
EditableProfileCardError.decorators = [StoreDecorator({
    editableProfileCard: {
        error: '123',
    },
})];
