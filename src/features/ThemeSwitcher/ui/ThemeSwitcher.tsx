import { memo, useCallback } from 'react';
import { setJsonSettings } from '@/entities/User';
import ThemeButtonDeprecated from '@/shared/assets/icons/app-theme.svg';
import ThemeButton from '@/shared/assets/icons/new/theme.svg';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatureFlag } from '@/shared/lib/features';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
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
        <ToggleFeatureFlag
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={ThemeButton}
                    isClickable
                    onClick={onToggleThemeHandler}
                    className={classNames(cls.ThemeSwitcherRedesigned, {}, [
                        className,
                    ])}
                />
            }
            off={
                <Button
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    themeButton={ButtonTheme.CLEAR}
                    onClick={onToggleThemeHandler}
                >
                    <ThemeButtonDeprecated className={cls.ThemeSwitcherSvg} />
                </Button>
            }
        />
    );
});
