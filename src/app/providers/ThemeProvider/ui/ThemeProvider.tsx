import React, { useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';
import { Theme } from '@/shared/const/theme';
import { ThemeContext, ThemeContextProps } from '@/shared/context/ThemeContext';

const fallbackTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderlProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}
const ThemeProvider: React.FC<ThemeProviderlProps> = (props) => {
    const { initialTheme, children } = props;
    const [isThemeInited, setThemeInited] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || fallbackTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            if (!isThemeInited && initialTheme) {
                setTheme(initialTheme);
                setThemeInited(true);
            }
        }
    }, [initialTheme, isThemeInited]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        (): ThemeContextProps => ({
            setTheme,
            theme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
