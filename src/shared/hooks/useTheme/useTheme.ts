import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const {
        theme,
        setTheme,
    } = useContext(ThemeContext);
    document.body.className = theme || Theme.LIGHT;
    let newTheme: Theme;
    const toggleTheme = () => {
        switch (theme) {
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        case Theme.DARK:
            newTheme = Theme.CHOCOLATE;
            break;
        case Theme.CHOCOLATE:
            newTheme = Theme.LIGHT;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
