import { useContext } from 'react';
import { ThemeContext, type Theme } from '../context/ThemeContext';

/**
 * Hook to use Theme context
 * @throws {Error} If used outside ThemeProvider
 * @returns {ThemeContextType} The theme context value
 */
export function useTheme(): {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  themes: readonly Theme[];
} {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
