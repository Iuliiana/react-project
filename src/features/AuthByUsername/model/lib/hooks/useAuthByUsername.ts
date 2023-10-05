import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';
import { getLoginError } from '../../selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../services/loginByUserName/loginByUsername';
import { loginActions } from '../../slice/loginSlice';

export const useAuthByUsername = (onSuccess?: () => void) => {
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const dispatch = useAppDispatch();
    const forceUpdate = useForceUpdate();

    const setUsernameValue = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const setPasswordValue = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if (result.meta.requestStatus === 'fulfilled') {
            if (onSuccess) {
                onSuccess();
                forceUpdate();
            }
        }
    }, [dispatch, forceUpdate, onSuccess, password, username]);

    return {
        username,
        password,
        isLoading,
        error,
        setUsernameValue,
        setPasswordValue,
        onLogin,
    };
};
