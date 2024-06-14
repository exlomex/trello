import { useContext } from 'react';
import {
    COOKIE_THEME_KEY,
    LOCAL_STORAGE_THEME_KEY,
} from '@/shared/const/localstorages';
import { getCookie, setCookie } from 'cookies-next';
import { Theme, ThemeContext } from './ThemeContext';

export interface UseThemeResult {
    toggleTheme?: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setCookie(COOKIE_THEME_KEY, newTheme);
    };

    return {
        toggleTheme,
        theme: theme || Theme.LIGHT,
    };
}
