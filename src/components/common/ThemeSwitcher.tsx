import { useTheme } from '../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

/**
 * Theme Switcher Component
 * Provides a button to toggle between Light and Dark themes.
 * Displays an icon representing the current theme.
 *
 * The component follows design rules:
 * - Minimal, clean UI
 * - No flashy effects
 * - Subtle hover states
 *
 * @returns {React.ReactElement} The theme switcher button
 */
export default function ThemeSwitcher(): React.ReactElement {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
