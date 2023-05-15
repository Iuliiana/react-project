import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfileErrorsCode } from '../../types/EditableProfileCardSchema';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success', () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('invalid firstname, username', () => {
        expect(validateProfileData({ ...data, username: '', first: '' })).toEqual([
            ProfileErrorsCode.INCORRECT_USERDATA,
            ProfileErrorsCode.INCORRECT_USERNAME,
        ]);
    });

    test('invalid age', () => {
        expect(validateProfileData({ ...data, age: NaN })).toEqual([
            ProfileErrorsCode.INCORRECT_AGE,
        ]);
    });

    test('invalid data', () => {
        expect(validateProfileData({})).toEqual([
            ProfileErrorsCode.INCORRECT_USERDATA,
            ProfileErrorsCode.INCORRECT_USERNAME,
            ProfileErrorsCode.INCORRECT_CITY,
            ProfileErrorsCode.INCORRECT_AGE,
        ]);
    });
});
