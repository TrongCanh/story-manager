import { useI18n } from '../../hooks/useI18n';

/**
 * Language Switcher Component
 * Provides a button to toggle between English and Vietnamese.
 * Displays the current language code.
 *
 * The component follows the design rules:
 * - Minimal, clean UI
 * - No flashy effects
 * - Subtle hover states
 *
 * @returns {React.ReactElement} The language switcher button
 */
export default function LanguageSwitcher(): React.ReactElement {
  const { language, setLanguage } = useI18n();

  /**
   * Toggle between English and Vietnamese
   */
  const toggleLanguage = (): void => {
    setLanguage(language === 'en' ? 'vi' : 'en');
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Switch language"
      title={`Current language: ${language === 'en' ? 'English' : 'Vietnamese'}`}
    >
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
}
