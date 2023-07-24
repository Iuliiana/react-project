import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeButton from '@/shared/assets/icons/app-theme.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            themeButton={ButtonTheme.CLEAR}
            onClick={toggleTheme}
        >
            <ThemeButton />
        </Button>
    );
});
