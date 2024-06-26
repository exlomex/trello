import {
    FC,
    ReactNode,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorages';
import {
    Theme,
    ThemeContext,
} from '@/app/providers/ThemeProvider/lib/ThemeContext';

export interface ThemeProviderProps {
    children?: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.DARK);

    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem(
            LOCAL_STORAGE_THEME_KEY,
        ) as Theme | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.body.classList.add('theme-loaded');
        }
    }, []);

    const contextValue = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
