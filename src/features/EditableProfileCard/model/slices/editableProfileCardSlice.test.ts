import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileErrorsCode } from '../consts/profileErrorsCodeConsts';
import { EditableProfileCardSchema } from '../types/EditableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { editableProfileCardActions, editableProfileCardReducer } from './editableProfileCardSlice';

const data = {
    first: 'Джейн',
    lastname: 'Доу',
    age: 28,
    currency: Currency.USD,
    country: Country.Canada,
    city: 'Moscow',
    username: 'admin',
    avatar: '',
};

describe('editableProfileCardSlice.test', () => {
    test('setReadonly', () => {
        const state: EditableProfileCardSchema = {
            readonly: true,
            isLoading: false,
        };

        expect(
            editableProfileCardReducer(state, editableProfileCardActions.setReadonly(false)),
        ).toEqual({ readonly: false, isLoading: false });
    });

    test('setFormData', () => {
        const state: EditableProfileCardSchema = {
            readonly: true,
            isLoading: false,
            form: {
                first: 'Джейн',
            },
        };
        expect(
            editableProfileCardReducer(state, editableProfileCardActions.setFormData({ first: 'Джулия' })),
        ).toEqual({ ...state, form: { ...state.form, first: 'Джулия' } });
    });

    test('undefined state', () => {
        expect(
            editableProfileCardReducer(undefined, editableProfileCardActions.cancelEdit()),
        ).toEqual({
            readonly: true,
            form: undefined,
            validationErrors: undefined,
            isLoading: false,
            data: undefined,
            error: undefined,
        });
    });

    test('updateProfileData.pending', () => {
        const state: EditableProfileCardSchema = {
            readonly: false,
            validationErrors: [ProfileErrorsCode.SERVER_ERROR],
            isLoading: false,
        };

        expect(
            editableProfileCardReducer(state, updateProfileData.pending),
        ).toEqual({
            readonly: false,
            validationErrors: undefined,
            isLoading: true,
            error: undefined,
        });
    });

    test('updateProfileData.fulfilled', () => {
        const state: EditableProfileCardSchema = {
            readonly: false,
            isLoading: false,
        };
        expect(
            editableProfileCardReducer(state, updateProfileData.fulfilled(data, '')),
        ).toEqual({
            readonly: true,
            validationErrors: undefined,
            isLoading: false,
            error: undefined,
            data,
            form: data,
        });
    });
});
