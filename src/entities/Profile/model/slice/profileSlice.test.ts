import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileErrorsCode, ProfileSchema } from '../types/ProfileSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

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

describe('profileSlice.test', () => {
    test('setReadonly', () => {
        const state: ProfileSchema = {
            readonly: true,
            isLoading: false,
        };

        expect(
            profileReducer(state, profileActions.setReadonly(false)),
        ).toEqual({ readonly: false, isLoading: false });
    });

    test('setFormData', () => {
        const state: ProfileSchema = {
            readonly: true,
            isLoading: false,
            form: {
                first: 'Джейн',
            },
        };
        expect(
            profileReducer(state, profileActions.setFormData({ first: 'Джулия' })),
        ).toEqual({ ...state, form: { ...state.form, first: 'Джулия' } });
    });

    test('undefined state', () => {
        expect(
            profileReducer(undefined, profileActions.cancelEdit()),
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
        const state: ProfileSchema = {
            readonly: false,
            validationErrors: [ProfileErrorsCode.SERVER_ERROR],
            isLoading: false,
        };

        expect(
            profileReducer(state, updateProfileData.pending),
        ).toEqual({
            readonly: false,
            validationErrors: undefined,
            isLoading: true,
            error: undefined,
        });
    });

    test('updateProfileData.fulfilled', () => {
        const state: ProfileSchema = {
            readonly: false,
            isLoading: false,
        };
        expect(
            profileReducer(state, updateProfileData.fulfilled(data, '')),
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
