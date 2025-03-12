import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    defaultTheme?: Theme;
    storageKey?: string;
    children: React.ReactNode;
}

export const ThemeProvider = ({ children, defaultTheme = 'system', storageKey = 'ui-theme' }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = typeof window !== 'undefined' ? localStorage.getItem(storageKey) : null;
        return (storedTheme as Theme) || defaultTheme;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        // 시스템 테마 감지를 위한 미디어 쿼리
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // 테마 적용 함수
        const applyTheme = () => {
            if (theme === 'system') {
                const systemTheme = mediaQuery.matches ? 'dark' : 'light';
                root.classList.toggle('dark', systemTheme === 'dark');
            } else {
                root.classList.toggle('dark', theme === 'dark');
            }
        };

        applyTheme();
        localStorage.setItem(storageKey, theme);

        // 시스템 테마 변경 감지
        const handleChange = () => {
            if (theme === 'system') {
                applyTheme();
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme, storageKey]);

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
