import type { TranslationKey } from '../types/i18n';
import enTranslations from '../locales/en.json';
import viTranslations from '../locales/vi.json';

/**
 * Supported languages
 */
export type Language = 'en' | 'vi';

/**
 * Load translations from JSON files
 * Note: In production, this would be dynamically imported
 */
export const translations: Record<Language, Record<string, unknown>> = {
  en: enTranslations,
  vi: viTranslations,
};

/**
 * Get nested value from object by dot notation key
 * @param obj - Object to search in
 * @param path - Dot notation path (e.g., 'nav.home')
 * @returns Value at path or key if not found
 */
export function getNestedValue(obj: unknown, path: string): string {
  return path.split('.').reduce((current: unknown, key: string) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return path;
  }, obj) as string;
}
