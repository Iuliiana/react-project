import { TestAsyncThunk } from 'shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { StateSchema } from 'app/providers/StoreProvider';
import { ProfileErrorsCode } from '../../types/ProfileSchema';
import { putProfileData } from './putProfileData';

describe('putProfileData.test', () => {
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
    test('success', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };

        const thunk = new TestAsyncThunk(putProfileData, state);
        thunk.api.put.mockReturnValue(Promise.resolve({ data: { ...data, first: 'Джулия' } }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ ...data, first: 'Джулия' });
    });

    test('error 403', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        const thunk = new TestAsyncThunk(putProfileData, state);
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileErrorsCode.SERVER_ERROR,
        ]);
    });

    test('validate error', async () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: { ...data, first: '' },
            },
        };
        const thunk = new TestAsyncThunk(putProfileData, state);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileErrorsCode.INCORRECT_USERDATA,
        ]);
    });
});
