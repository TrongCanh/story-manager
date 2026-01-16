/**
 * Supported languages
 */
export type Language = 'en' | 'vi';

/**
 * Translation key type (nested dot notation)
 */
export type TranslationKey = string;

/**
 * Load translations from JSON files
 * Note: In production, this would be dynamically imported
 */
export const translations: Record<Language, Record<string, unknown>> = {
  en: {
    app: { title: 'Story Manager' },
    nav: {
      home: 'Home',
      characters: 'Characters',
      events: 'Events',
      locations: 'Locations',
      factions: 'Factions',
      relationships: 'Relationships',
      timeline: 'Timeline',
    },
    theme: { light: 'Light', dark: 'Dark', night: 'Night', switch: 'Switch theme' },
    language: { en: 'English', vi: 'Vietnamese', switch: 'Switch language' },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      notFound: 'Page not found',
      back: 'Back',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      create: 'Create',
      search: 'Search',
      filter: 'Filter',
      sort: 'Sort',
      actions: 'Actions',
    },
    home: {
      title: 'Welcome to Story Manager',
      subtitle: "Manage your story's characters, events, locations, factions, and relationships",
      features: {
        characters: 'Manage your story characters with detailed profiles',
        events: 'Track events across your story timeline',
        locations: 'Organize all story locations',
        factions: 'Create and manage story factions',
        relationships: 'Define relationships between characters',
        timeline: 'Visualize your story timeline',
      },
    },
    notFound: {
      title: '404 - Page Not Found',
      message: "The page you're looking for doesn't exist.",
      goHome: 'Go to Home',
    },
  },
  vi: {
    app: { title: 'Quản lý Câu chuyện' },
    nav: {
      home: 'Trang chủ',
      characters: 'Nhân vật',
      events: 'Sự kiện',
      locations: 'Địa điểm',
      factions: 'Phái',
      relationships: 'Mối quan hệ',
      timeline: 'Dòng thời gian',
    },
    theme: { light: 'Sáng', dark: 'Tối', night: 'Đêm', switch: 'Đổi chủ đề' },
    language: { en: 'Tiếng Anh', vi: 'Tiếng Việt', switch: 'Đổi ngôn ngữ' },
    common: {
      loading: 'Đang tải...',
      error: 'Đã xảy ra lỗi',
      notFound: 'Không tìm thấy trang',
      back: 'Quay lại',
      save: 'Lưu',
      cancel: 'Hủy',
      delete: 'Xóa',
      edit: 'Sửa',
      create: 'Tạo',
      search: 'Tìm kiếm',
      filter: 'Bộ lọc',
      sort: 'Sắp xếp',
      actions: 'Hành động',
    },
    home: {
      title: 'Chào mừng đến với Quản lý Câu chuyện',
      subtitle: 'Quản lý nhân vật, sự kiện, địa điểm, phái và mối quan hệ trong câu chuyện của bạn',
      features: {
        characters: 'Quản lý nhân vật câu chuyện với hồ sơ chi tiết',
        events: 'Theo dõi sự kiện trên dòng thời gian câu chuyện',
        locations: 'Tổ chức tất cả địa điểm câu chuyện',
        factions: 'Tạo và quản lý các phái trong câu chuyện',
        relationships: 'Định nghĩa mối quan hệ giữa các nhân vật',
        timeline: 'Trực quan hóa dòng thời gian câu chuyện',
      },
    },
    notFound: {
      title: '404 - Không tìm thấy trang',
      message: 'Trang bạn đang tìm kiếm không tồn tại.',
      goHome: 'Về trang chủ',
    },
  },
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
