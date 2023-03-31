import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileData', () => {
    test('should return error value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        };
        expect(getProfileError(state as StateSchema)).toBe('error');
    });
    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toBe('');
    });
});
