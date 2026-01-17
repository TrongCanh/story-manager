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
      className="p-2 text-text-muted hover:text-text-primary dark:text-text-secondary dark:hover:text-text-primary rounded-lg hover:bg-surfaceMuted dark:hover:bg-dark-surfaceMuted transition-colors"
      aria-label="Toggle theme"
      title={`Current theme: ${theme}`}
    >
      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
