import { TestAsyncThunk } from '@/shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ProfileErrorsCode } from '../../consts/profileErrorsCodeConsts';
import { updateProfileData } from './updateProfileData';

describe('updateProfileData.test', () => {
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
            editableProfileCard: {
                form: data,
            },
        };

        const thunk = new TestAsyncThunk(updateProfileData, state);
        thunk.api.put.mockReturnValue(Promise.resolve({ data: { ...data, first: 'Джулия' } }));

        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual({ ...data, first: 'Джулия' });
    });

    test('error 403', async () => {
        const state: DeepPartial<StateSchema> = {
            editableProfileCard: {
                form: data,
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, state);
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
            editableProfileCard: {
                form: { ...data, first: '' },
            },
        };
        const thunk = new TestAsyncThunk(updateProfileData, state);
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ProfileErrorsCode.INCORRECT_USERDATA,
        ]);
    });
});
