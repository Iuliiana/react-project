import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightThemeButton from 'shared/assets/icons/theme-light.svg';
import DarkThemeButton from 'shared/assets/icons/theme-dark.svg';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightThemeButton/> : <DarkThemeButton/>}
        </Button>
    );
};
