import axios from 'axios';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/helpers/TestAsyncThunk/TestAsyncThunk';
import { loginByUserName } from './loginByUserName';

jest.mock('axios');
/* для того, чтобы typescript подхватил более глубогие функции (например mockReturnValue)
 true - флаг глубокого мока, не только модуль, но и поля */
const mockedAxios = jest.mocked(axios, true);

describe('loginByUserName.test', () => {
    // let dispatch: Dispatch;// задаем типы
    // let getState:() => StateSchema;// задаем типы
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login', async () => {
    //     const returnData: User = { username: 'admin', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnData }));
    //
    //     const action = loginByUserName({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnData));
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(returnData);
    // });
    //
    // test('error login 403', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //
    //     const action = loginByUserName({ username: 'admin', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // });

    test('success login', async () => {
        const returnData: User = { username: 'admin', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: returnData }));

        const testThunk = new TestAsyncThunk(loginByUserName);
        const result = await testThunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(testThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(testThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(returnData));
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(returnData);
    });

    test('error login 403', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const testThunk = new TestAsyncThunk(loginByUserName);
        const result = await testThunk.callThunk({ username: 'admin', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
