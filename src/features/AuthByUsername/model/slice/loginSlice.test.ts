import { loginReducer, loginActions } from './loginSlice';
import { LoginShema } from '../types/LoginShema';

describe('loginSlice.test', () => {
    test('setUsername', () => {
        const state: LoginShema = { username: 'dfgdg' };

        expect(
            loginReducer(state, loginActions.setUsername('dddd')),
        ).toEqual({ username: 'dddd' });
    });

    test('setPassword', () => {
        const state: LoginShema = { password: '' };

        expect(
            loginReducer(state, loginActions.setPassword('123')),
        ).toEqual({ password: '123' });
    });
});
