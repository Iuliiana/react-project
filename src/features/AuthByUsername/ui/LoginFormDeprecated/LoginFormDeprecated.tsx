import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import cls from './LoginFormDeprecated.module.scss';
import { useAuthByUsername } from '../../model/lib/hooks/useAuthByUsername';
import { LoginFormProps } from '../LoginForm/LoginForm';

export const LoginFormDeprecated = memo((props: LoginFormProps) => {
    const { className, onSuccess } = props;
    const {
        onLogin,
        setUsernameValue,
        setPasswordValue,
        password,
        username,
        isLoading,
        error,
    } = useAuthByUsername(onSuccess);
    const { t } = useTranslation();

    return (
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
    );
});
