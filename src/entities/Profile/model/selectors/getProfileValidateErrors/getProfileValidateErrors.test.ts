import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileErrorsCode } from '../../types/ProfileSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return validation errors array value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validationErrors: [
                    ProfileErrorsCode.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ProfileErrorsCode.SERVER_ERROR,
        ]);
    });
    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toBe(undefined);
    });
});
