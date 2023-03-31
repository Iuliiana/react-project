import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm', () => {
    test('should return form value', () => {
        const form = {
            first: 'Джейн',
            lastname: 'Доу',
            age: 28,
            currency: Currency.USD,
            country: Country.Canada,
            city: 'Moscow',
            username: 'admin',
            avatar: '',
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(form);
    });
    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toBe(undefined);
    });
});
