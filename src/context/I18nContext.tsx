import { createContext, useState, useEffect, type ReactNode } from 'react';
import { translations, getNestedValue } from '../lib/i18n';

/**
 * Supported languages
 */
export type Language = 'en' | 'vi';

/**
 * Translation key type (nested dot notation)
 */
export type TranslationKey = string;

/**
 * I18n Context Interface
 */
interface I18nContextType {
  /** Current language */
  language: Language;
  /** Change language function */
  setLanguage: (lang: Language) => void;
  /** Get translation by key */
  t: (key: TranslationKey) => string;
  /** All available languages */
  languages: readonly Language[];
}

/**
 * I18n Context
 * Provides internationalization support with English and Vietnamese.
 * Language preference is persisted to localStorage.
 */
const I18nContext = createContext<I18nContextType | undefined>(undefined);

/**
 * I18n Context Props
 */
interface I18nProviderProps {
  /** Child components */
  children: ReactNode;
}

/**
 * I18n Provider Component
 * Wraps the application to provide internationalization context.
 *
 * @param {I18nProviderProps} props - Component props
 * @returns {React.ReactElement} The provider component
 */
export function I18nProvider({ children }: I18nProviderProps): React.ReactElement {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('story-manager-language');
    return saved === 'en' || saved === 'vi' ? saved : 'en';
  });

  /**
   * Set language and persist to localStorage
   * @param lang - Language to set
   */
  const setLanguage = (lang: Language): void => {
    setLanguageState(lang);
    localStorage.setItem('story-manager-language', lang);
  };

  /**
   * Get translation by key
   * @param key - Translation key in dot notation (e.g., 'nav.home')
   * @returns Translated string or key if not found
   */
  const t = (key: TranslationKey): string => {
    const translation = translations[language];
    const value = getNestedValue(translation, key);
    return typeof value === 'string' ? value : key;
  };

  // Apply language to document for accessibility
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: I18nContextType = {
    language,
    setLanguage,
    t,
    languages: ['en', 'vi'] as const,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export { I18nContext };
