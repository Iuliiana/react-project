import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './LoginForm.module.scss';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUserName/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const asyncReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
            }
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader asyncReducers={asyncReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text
                    title={t('Форма авторизации')}
                    textTheme={TextTheme.PRIMARY}
                />
                {error && (
                    <Text
                        text={t('Введен неверный логин или пароль')}
                        textTheme={TextTheme.ERROR}
                    />
                )}
                <div className={cls.inputWrapper}>
                    <Input
                        className={cls.input}
                        type="text"
                        placeholder={t('Введите логин')}
                        value={username}
                        onChange={setUsernameValue}
                        autoFocus
                    />
                </div>

                <div className={cls.inputWrapper}>
                    <Input
                        className={cls.input}
                        type="text"
                        placeholder={t('Введите пароль')}
                        value={password}
                        onChange={setPasswordValue}
                        name="password"
                    />
                </div>

                <Button
                    className={cls.loginBtn}
                    disabled={isLoading}
                    themeButton={ButtonTheme.BACKGROUND_INVERTRD}
                    onClick={onLogin}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
