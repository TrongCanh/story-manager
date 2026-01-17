/**
 * I18n Types / Các kiểu I18n
 *
 * This file provides type-safe translation keys based on the locale files.
 * File này cung cấp các key dịch type-safe dựa trên các file locale.
 */

/**
 * Translation keys type derived from the locale structure
 * Các key dịch được dẫn xuất từ cấu trúc locale
 */
export type TranslationKey =
  // App keys / Các key App
  | 'app.title'

  // Navigation keys / Các key Điều hướng
  | 'nav.home'
  | 'nav.characters'
  | 'nav.events'
  | 'nav.locations'
  | 'nav.factions'
  | 'nav.relationships'
  | 'nav.timeline'

  // Theme keys / Các key Chủ đề
  | 'theme.light'
  | 'theme.dark'
  | 'theme.night'
  | 'theme.switch'

  // Language keys / Các key Ngôn ngữ
  | 'language.en'
  | 'language.vi'
  | 'language.switch'

  // Common keys / Các key Chung
  | 'common.loading'
  | 'common.error'
  | 'common.notFound'
  | 'common.back'
  | 'common.save'
  | 'common.cancel'
  | 'common.delete'
  | 'common.edit'
  | 'common.create'
  | 'common.search'
  | 'common.filter'
  | 'common.sort'
  | 'common.actions'
  | 'common.name'
  | 'common.description'

  // Home keys / Các key Trang chủ
  | 'home.title'
  | 'home.subtitle'
  | 'home.features.characters'
  | 'home.features.events'
  | 'home.features.locations'
  | 'home.features.factions'
  | 'home.features.relationships'
  | 'home.features.timeline'

  // Characters keys / Các key Nhân vật
  | 'characters.title'
  | 'characters.subtitle'
  | 'characters.description'
  | 'characters.list'
  | 'characters.details'
  | 'characters.create'
  | 'characters.edit'
  | 'characters.delete'
  | 'characters.search'
  | 'characters.noCharacters'
  | 'characters.attributes.role'
  | 'characters.attributes.age'
  | 'characters.attributes.gender'
  | 'characters.attributes.appearance'
  | 'characters.attributes.personality'
  | 'characters.attributes.background'
  | 'characters.attributes.goals'
  | 'characters.attributes.flaws'
  | 'characters.attributes.skills'
  | 'characters.attributes.notes'
  | 'characters.relationships'
  | 'characters.timeRange'
  | 'characters.from'
  | 'characters.to'
  | 'characters.current'
  | 'characters.noRelationships'
  | 'characters.confirmDelete'
  | 'characters.cancel'
  | 'characters.confirm'

  // Events keys / Các key Sự kiện
  | 'events.title'
  | 'events.subtitle'
  | 'events.description'
  | 'events.list'
  | 'events.details'
  | 'events.create'
  | 'events.edit'
  | 'events.delete'
  | 'events.search'
  | 'events.noEvents'
  | 'events.timestamp'
  | 'events.eventType'
  | 'events.importance'
  | 'events.location'
  | 'events.participants'
  | 'events.outcome'
  | 'events.impact'
  | 'events.confirmDelete'
  | 'events.importanceLevels.low'
  | 'events.importanceLevels.medium'
  | 'events.importanceLevels.high'
  | 'events.importanceLevels.critical'

  // Not Found keys / Các key Không tìm thấy
  | 'notFound.title'
  | 'notFound.message'
  | 'notFound.goHome';

/**
 * Helper type to validate that a string is a valid translation key
 * Kiểu trợ giúp để xác thực một chuỗi là key dịch hợp lệ
 */
export type TranslationKeyPath = TranslationKey;

/**
 * Type guard to check if a string is a valid translation key
 * Type guard để kiểm tra xem một chuỗi có phải là key dịch hợp lệ không
 */
export function isValidTranslationKey(key: string): key is TranslationKey {
  const validKeys: readonly TranslationKey[] = [
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
    'notFound.title',
    'notFound.message',
    'notFound.goHome',
  ] as const;
  return validKeys.includes(key as TranslationKey);
}
