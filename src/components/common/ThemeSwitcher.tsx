import { useTheme } from '../../hooks/useTheme';

/**
 * Theme Switcher Component
 * Provides a button to toggle between Light and Dark themes.
 * Displays an icon representing the current theme.
 *
 * The component follows the design rules:
 * - Minimal, clean UI
 * - No flashy effects
 * - Subtle hover states
 *
 * @returns {React.ReactElement} The theme switcher button
 */
export default function ThemeSwitcher(): React.ReactElement {
  const { theme, toggleTheme } = useTheme();

  /**
   * Get icon based on current theme
   * @param currentTheme - Current theme name
   * @returns SVG icon for the theme
   */
  const getThemeIcon = (currentTheme: string): React.ReactElement => {
    if (currentTheme === 'dark') {
      // Moon icon for dark mode
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
    }
    // Sun icon for light mode
    return (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364a9 9 0 11.292-9 9 0 11.292 9 0 9-9h-1m-9 0a9 9 0 011.292 9 9 0 11.292 9 0 9 9z"
        />
      </svg>
    );
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {getThemeIcon(theme)}
    </button>
  );
}
