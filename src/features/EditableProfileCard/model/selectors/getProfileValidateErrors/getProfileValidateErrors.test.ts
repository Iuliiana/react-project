import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ProfileErrorsCode } from '../../consts/profileErrorsCodeConsts';

describe('getProfileValidateErrors', () => {
    test('should return validation errors array value', () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
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
