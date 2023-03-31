import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly', () => {
    test('should return readonly value', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('should return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toBe(undefined);
    });
});
