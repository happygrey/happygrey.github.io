// This module intentionally exports both the ThemeProvider component and the
// useTheme hook, so Fast Refresh's single-component-export convention doesn't apply here.
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
	theme: Theme;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const THEME_COLOR: Record<Theme, string> = {
	light: '#FFFFFF',
	dark: '#0B1220',
};

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>(() =>
		document.documentElement.classList.contains('dark') ? 'dark' : 'light',
	);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', theme === 'dark');
		localStorage.setItem('theme', theme);
		document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
	}, [theme]);

	function toggleTheme() {
		setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error('useTheme must be used within a ThemeProvider');
	return context;
}
