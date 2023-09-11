import { memo, useCallback } from 'react';
import { setJsonSettings } from '@/entities/User';
import ThemeButton from '@/shared/assets/icons/app-theme.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleThemeHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(setJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            themeButton={ButtonTheme.CLEAR}
            onClick={onToggleThemeHandler}
        >
            <ThemeButton />
        </Button>
    );
});
