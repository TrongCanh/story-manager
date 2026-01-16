import { createContext, useState, useEffect, type ReactNode } from 'react';

/**
 * Supported themes
 */
export type Theme = 'light' | 'dark';

/**
 * Theme Context Interface
 */
interface ThemeContextType {
  /** Current theme */
  theme: Theme;
  /** Change theme function */
  setTheme: (theme: Theme) => void;
  /** Toggle to next theme */
  toggleTheme: () => void;
  /** All available themes */
  themes: readonly Theme[];
}

/**
 * Theme Context
 * Provides theme management with Light and Dark themes.
 * Theme preference is persisted to localStorage.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Context Props
 */
interface ThemeProviderProps {
  /** Child components */
  children: ReactNode;
}

/**
 * Map theme to HTML class for Tailwind dark mode
 */
const themeToClass: Record<Theme, string> = {
  light: '',
  dark: 'dark',
};

/**
 * Theme Provider Component
 * Wraps the application to provide theme context.
 *
 * @param {ThemeProviderProps} props - Component props
 * @returns {React.ReactElement} The provider component
 */
export function ThemeProvider({ children }: ThemeProviderProps): React.ReactElement {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('story-manager-theme');
    return saved === 'light' || saved === 'dark' ? saved : 'light';
  });

  /**
   * Set theme and persist to localStorage
   * @param newTheme - Theme to set
   */
  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
    localStorage.setItem('story-manager-theme', newTheme);
  };

  /**
   * Toggle to next theme in sequence: light -> dark -> light
   */
  const toggleTheme = (): void => {
    const themeOrder: Theme[] = ['light', 'dark'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  // Apply theme class to document element for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    const currentClass = themeToClass[theme];

    // Debug log
    console.log('Theme changed to:', theme);
    console.log('Current class:', currentClass);
    console.log('HTML classes before:', root.className);

    // Remove all theme classes
    root.classList.remove('dark', 'night');

    // Add current theme class if not light
    if (currentClass) {
      root.classList.add(currentClass);
    }

    // Debug log after
    console.log('HTML classes after:', root.className);

    // Update data-theme attribute for custom CSS if needed
    root.setAttribute('data-theme', theme);
  }, [theme]);

  const value: ThemeContextType = {
    theme,
    setTheme,
    toggleTheme,
    themes: ['light', 'dark'] as const,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeContext };
