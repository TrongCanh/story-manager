import { useContext } from 'react';
import { I18nContext, type Language } from '../context/I18nContext';
import type { TranslationKey } from '../types/i18n';

/**
 * Hook to use I18n context
 * @throws {Error} If used outside I18nProvider
 * @returns {I18nContextType} The i18n context value
 */
export function useI18n(): {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  languages: readonly Language[];
} {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
