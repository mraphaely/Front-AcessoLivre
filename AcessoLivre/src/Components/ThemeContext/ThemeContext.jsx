import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../Styles/themes';

const ThemeToggleContext = createContext({
  themeName: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('acesso-livre-theme') : null;
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem('acesso-livre-theme', themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ themeName, toggleTheme }), [themeName]);
  const currentTheme = themeName === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeToggleContext.Provider value={value}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeToggleContext.Provider>
  );
}

export const useThemeToggle = () => useContext(ThemeToggleContext);
