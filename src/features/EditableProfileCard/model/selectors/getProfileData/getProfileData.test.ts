import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
    test('should return data value', () => {
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
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toBe(undefined);
    });
});
