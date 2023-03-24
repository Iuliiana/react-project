import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm = memo(({ className }:LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const setUsernameValue = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const setPasswordValue = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLogin = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} textTheme={TextTheme.PRIMARY} />
            {
                error && (
                    <Text
                        text={t('Введен неверный логин или пароль')}
                        textTheme={TextTheme.ERROR}
                    />
                )
            }
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
    );
});
