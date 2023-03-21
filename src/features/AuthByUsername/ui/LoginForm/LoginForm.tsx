import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string,
}

export const LoginForm:FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setUsernameValue = (value: string) => {
        setUsername(value);
    };

    const setPasswordValue = (value: string) => {
        setPassword(value);
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>

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

            <Button className={cls.loginBtn} themeButton={ButtonTheme.BACKGROUND_INVERTRD}>
                {t('Войти')}
            </Button>
        </div>
    );
};
