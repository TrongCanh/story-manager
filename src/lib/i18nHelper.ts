/**
 * I18n Helper Utilities / Tiện ích trợ giúp I18n
 *
 * This file provides helper functions for working with i18n translations.
 * File này cung cấp các hàm trợ giúp để làm việc với các bản dịch i18n.
 */

import type { TranslationKey } from '../types/i18n';
import { isValidTranslationKey } from '../types/i18n';

/**
 * Type-safe translation function
 * Hàm dịch type-safe
 *
 * This function ensures that only valid translation keys are used.
 * Hàm này đảm bảo chỉ sử dụng các key dịch hợp lệ.
 *
 * @param key - Translation key to validate / Key dịch cần xác thực
 * @returns The validated translation key / Key dịch đã được xác thực
 * @throws {Error} If the key is not a valid translation key / Nếu key không phải là key dịch hợp lệ
 *
 * @example
 * ```typescript
 * import { validateTranslationKey } from '../lib/i18nHelper';
 *
 * // Valid key - will return the key
 * const validKey = validateTranslationKey('characters.title');
 *
 * // Invalid key - will throw an error
 * const invalidKey = validateTranslationKey('invalid.key'); // Error: Invalid translation key: invalid.key
 * ```
 */
export function validateTranslationKey(key: string): TranslationKey {
  if (!isValidTranslationKey(key)) {
    throw new Error(`Invalid translation key: ${key}. Please add this key to src/types/i18n.ts`);
  }
  return key;
}

/**
 * Get all available translation keys
 * Lấy tất cả các key dịch có sẵn
 *
 * @returns Array of all valid translation keys / Mảng tất cả các key dịch hợp lệ
 *
 * @example
 * ```typescript
 * import { getAllTranslationKeys } from '../lib/i18nHelper';
 *
 * const keys = getAllTranslationKeys();
 * console.log(keys); // ['app.title', 'nav.home', 'characters.title', ...]
 * ```
 */
export function getAllTranslationKeys(): readonly TranslationKey[] {
  return [
    'app.title',
    'nav.home',
    'nav.characters',
    'nav.events',
    'nav.locations',
    'nav.factions',
    'nav.relationships',
    'nav.timeline',
    'theme.light',
    'theme.dark',
    'theme.night',
    'theme.switch',
    'language.en',
    'language.vi',
    'language.switch',
    'common.loading',
    'common.error',
    'common.notFound',
    'common.back',
    'common.save',
    'common.cancel',
    'common.delete',
    'common.edit',
    'common.create',
    'common.search',
    'common.filter',
    'common.sort',
    'common.actions',
    'common.name',
    'common.description',
    'home.title',
    'home.subtitle',
    'home.features.characters',
    'home.features.events',
    'home.features.locations',
    'home.features.factions',
    'home.features.relationships',
    'home.features.timeline',
    'characters.title',
    'characters.subtitle',
    'characters.description',
    'characters.list',
    'characters.details',
    'characters.create',
    'characters.edit',
    'characters.delete',
    'characters.search',
    'characters.noCharacters',
    'characters.attributes.role',
    'characters.attributes.age',
    'characters.attributes.gender',
    'characters.attributes.appearance',
    'characters.attributes.personality',
    'characters.attributes.background',
    'characters.attributes.goals',
    'characters.attributes.flaws',
    'characters.attributes.skills',
    'characters.attributes.notes',
    'characters.relationships',
    'characters.timeRange',
    'characters.from',
    'characters.to',
    'characters.current',
    'characters.noRelationships',
    'characters.confirmDelete',
    'characters.cancel',
    'characters.confirm',
    'events.title',
    'events.subtitle',
    'events.description',
    'events.list',
    'events.details',
    'events.create',
    'events.edit',
    'events.delete',
    'events.search',
    'events.noEvents',
    'events.timestamp',
    'events.eventType',
    'events.importance',
    'events.location',
    'events.participants',
    'events.outcome',
    'events.impact',
    'events.confirmDelete',
    'events.importanceLevels.low',
    'events.importanceLevels.medium',
    'events.importanceLevels.high',
    'events.importanceLevels.critical',
    'locations.title',
    'locations.subtitle',
    'locations.description',
    'locations.list',
    'locations.details',
    'locations.create',
    'locations.edit',
    'locations.delete',
    'locations.search',
    'locations.noLocations',
    'locations.attributes.locationType',
    'locations.attributes.climate',
    'locations.attributes.geography',
    'locations.attributes.population',
    'locations.attributes.culture',
    'locations.attributes.economy',
    'locations.attributes.government',
    'locations.attributes.notes',
    'locations.timeRange',
    'locations.from',
    'locations.to',
    'locations.current',
    'locations.confirmDelete',
    'notFound.title',
    'notFound.message',
    'notFound.goHome',
  ] as const;
}

/**
 * Check if a translation key exists
 * Kiểm tra xem một key dịch có tồn tại không
 *
 * @param key - Translation key to check / Key dịch cần kiểm tra
 * @returns True if the key exists, false otherwise / True nếu key tồn tại, ngược lại là false
 *
 * @example
 * ```typescript
 * import { hasTranslationKey } from '../lib/i18nHelper';
 *
 * if (hasTranslationKey('characters.title')) {
 *   // Key exists
 * }
 * ```
 */
export function hasTranslationKey(key: string): key is TranslationKey {
  return isValidTranslationKey(key);
}

/**
 * Get translation keys by namespace
 * Lấy các key dịch theo namespace
 *
 * @param namespace - The namespace to filter by (e.g., 'characters', 'common') / Namespace để lọc (ví dụ: 'characters', 'common')
 * @returns Array of translation keys in the namespace / Mảng các key dịch trong namespace
 *
 * @example
 * ```typescript
 * import { getKeysByNamespace } from '../lib/i18nHelper';
 *
 * const characterKeys = getKeysByNamespace('characters');
 * console.log(characterKeys); // ['characters.title', 'characters.subtitle', ...]
 * ```
 */
export function getKeysByNamespace(namespace: string): TranslationKey[] {
  const allKeys = getAllTranslationKeys();
  return allKeys.filter((key) => key.startsWith(`${namespace}.`));
}
