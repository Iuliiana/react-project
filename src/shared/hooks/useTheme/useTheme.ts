import { useContext } from 'react';
import { Theme } from '@/shared/const/theme';
import { ThemeContext } from '@/shared/context/ThemeContext';

interface UseThemeResult {
    theme: Theme;
    toggleTheme: (saveAction?: (newTheme: Theme) => void) => void;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (newTheme: Theme) => void) => {
        let newTheme: Theme;
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

        saveAction?.(newTheme);
        setTheme?.(newTheme);
        //   localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
};
