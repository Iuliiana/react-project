import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/Stack';
import cls from './LoginFormRedesigned.module.scss';
import { useAuthByUsername } from '../../model/lib/hooks/useAuthByUsername';
import { LoginFormProps } from '../LoginForm/LoginForm';

export const LoginFormRedesigned = memo((props: LoginFormProps) => {
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
        <VStack
            gap="16"
            max
            justify="start"
            align="start"
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    text={t('Введен неверный логин или пароль')}
                    variant="error"
                />
            )}

            <Input
                type="text"
                placeholder={t('Введите логин')}
                value={username}
                onChange={setUsernameValue}
                autoFocus
            />

            <Input
                type="text"
                placeholder={t('Введите пароль')}
                value={password}
                onChange={setPasswordValue}
                name="password"
            />

            <Button
                className={cls.loginBtn}
                disabled={isLoading}
                variant="outline"
                onClick={onLogin}
                max
            >
                {t('Войти')}
            </Button>
        </VStack>
    );
});
