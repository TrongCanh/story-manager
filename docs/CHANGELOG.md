# Changelog / Nhật ký thay đổi

This document logs all changes made during development.
Tài liệu này ghi lại tất cả các thay đổi được thực hiện trong quá trình phát triển.

---

## Phase 0: Foundation / Giai đoạn 0: Nền tảng

**Date / Ngày:** 2026-01-16

### User Request / Yêu cầu người dùng

- Đọc các file trong thư mục docs để nắm được công việc
- Triển khai Phase 0: Foundation

### What AI Did / Những gì AI đã làm

#### 1. Project Initialization / Khởi tạo dự án

- ✅ Created React project with Vite template (react-ts) in `story-manager/` directory
- ✅ Installed dependencies via `npm install`
- ✅ Project structure follows business domain naming (story-manager)

#### 2. TypeScript Configuration / Cấu hình TypeScript

- ✅ TypeScript configured with strict mode (included with Vite template)
- ✅ `tsconfig.json` and `tsconfig.node.json` created by Vite

#### 3. TailwindCSS Configuration / Cấu hình TailwindCSS

- ✅ Installed TailwindCSS v4, PostCSS, and Autoprefixer
- ✅ Installed `@tailwindcss/postcss` package for TailwindCSS v4 compatibility
- ✅ Created [`tailwind.config.js`](../story-manager/tailwind.config.js) with:
  - Content paths for src files
  - Dark mode class strategy
  - Extended colors for light, dark, and night themes
  - Border radius (xl, 2xl)
- ✅ Created [`postcss.config.js`](../story-manager/postcss.config.js) with `@tailwindcss/postcss` plugin
- ✅ Updated [`src/index.css`](../story-manager/src/index.css) with TailwindCSS v4 syntax (`@import "tailwindcss"`)
  - Base styles for :root, body
  - Theme classes (.dark, .night) for theme switching

#### 4. ESLint Configuration / Cấu hình ESLint

- ✅ Installed ESLint and related packages:
  - `@typescript-eslint/parser`
  - `@typescript-eslint/eslint-plugin`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-react-refresh`
  - `typescript-eslint`
- ✅ [`eslint.config.js`](../story-manager/eslint.config.js) created with React and TypeScript rules

#### 5. Prettier Configuration / Cấu hình Prettier

- ✅ Installed Prettier
- ✅ Created [`.prettierrc`](../story-manager/.prettierrc) with formatting rules:
  - Semi-colons enabled
  - Trailing comma: es5
  - Single quotes
  - Print width: 100
  - Tab width: 2
  - No tabs
  - Arrow parens: always
  - End of line: lf
- ✅ Created [`.prettierignore`](../story-manager/.prettierignore) to exclude:
  - dist
  - node_modules
  - coverage
  - \*.log

#### 6. Project Folder Structure / Cấu trúc thư mục dự án

- ✅ Created directory structure in `story-manager/src/`:
  - `app/` - React Router routes
  - `components/common/` - Reusable UI components
  - `components/layout/` - Layout components
  - `components/domain/` - Domain-specific components
  - `context/` - React Context providers
  - `hooks/` - Custom React hooks
  - `lib/` - Utilities and helpers
  - `types/` - TypeScript type definitions
  - `locales/` - i18n translation files

#### 7. Git Repository / Kho lưu trữ Git

- ✅ Initialized Git repository in `story-manager/` directory

#### 8. Package.json Scripts / Scripts package.json

- ✅ [`package.json`](../story-manager/package.json) updated with scripts:
  - `dev` - Run dev server
  - `build` - Build project
  - `lint` - Run ESLint
  - `preview` - Preview build
  - `format` - Format code with Prettier

#### 9. App.tsx Enhancement / Cải thiện App.tsx

- ✅ Updated [`src/App.tsx`](../story-manager/src/App.tsx) with beautiful TailwindCSS UI:
  - Removed default Vite code and `App.css` import
  - Created centered layout with `max-w-6xl mx-auto px-6 py-8`
  - Added header with title and description
  - Created 6 feature cards (Characters, Events, Locations, Factions, Relationships, Timeline)
  - Added status section showing completed tasks
  - Used TailwindCSS classes following design rules:
    - Layout: `grid`, `gap-6`, `space-y-6`
    - Cards: `bg-white`, `border-gray-200`, `rounded-xl`, `p-6`, `shadow-sm`
    - Typography: `text-2xl`, `font-semibold`, `text-lg`, `font-medium`, `text-sm`, `text-gray-900`, `text-gray-700`
    - Accents: `bg-blue-600`, `w-2`, `h-2`, `rounded-full`
    - Flexbox: `flex`, `items-center`, `space-y-2`

### Files Created / Các tệp đã tạo

| File / Tệp                                                                        | Description / Mô tả                   |
| --------------------------------------------------------------------------------- | ------------------------------------- |
| [`story-manager/tailwind.config.js`](../story-manager/tailwind.config.js)         | TailwindCSS configuration with themes |
| [`story-manager/postcss.config.js`](../story-manager/postcss.config.js)           | PostCSS configuration                 |
| [`story-manager/.prettierrc`](../story-manager/.prettierrc)                       | Prettier configuration                |
| [`story-manager/.prettierignore`](../story-manager/.prettierignore)               | Prettier ignore rules                 |
| [`story-manager/src/app/`](../story-manager/src/app/)                             | React Router routes directory         |
| [`story-manager/src/components/common/`](../story-manager/src/components/common/) | Common UI components directory        |
| [`story-manager/src/components/layout/`](../story-manager/src/components/layout/) | Layout components directory           |
| [`story-manager/src/components/domain/`](../story-manager/src/components/domain/) | Domain components directory           |
| [`story-manager/src/context/`](../story-manager/src/context/)                     | Context providers directory           |
| [`story-manager/src/hooks/`](../story-manager/src/hooks/)                         | Custom hooks directory                |
| [`story-manager/src/lib/`](../story-manager/src/lib/)                             | Utilities directory                   |
| [`story-manager/src/types/`](../story-manager/src/types/)                         | TypeScript types directory            |
| [`story-manager/src/locales/`](../story-manager/src/locales/)                     | i18n translation files directory      |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                      | Description / Mô tả                          |
| --------------------------------------------------------------- | -------------------------------------------- |
| [`story-manager/src/index.css`](../story-manager/src/index.css) | Updated with TailwindCSS v4 syntax           |
| [`story-manager/src/App.tsx`](../story-manager/src/App.tsx)     | Enhanced with beautiful UI using TailwindCSS |
| [`story-manager/package.json`](../story-manager/package.json)   | Added `format` script                        |

### Final Result / Kết quả cuối cùng

**Phase 0: Foundation** đã hoàn thành thành công!

✅ Dự án React với TypeScript đã được khởi tạo
✅ TailwindCSS v4 đã được cài đặt và cấu hình với 3 themes (light, dark)
✅ ESLint và Prettier đã được cấu hình
✅ Cấu trúc thư mục dự án đã được tạo
✅ Git repository đã được khởi tạo
✅ Scripts trong package.json đã được cấu hình
✅ Trang chủ với giao diện đẹp sử dụng TailwindCSS đã được tạo

**Lưu ý / Note:** Dev server cần được restart để áp dụng thay đổi cấu hình PostCSS và xem giao diện đẹp.

**Tiếp theo / Next Steps:** Phase 1: App Shell & Layout

---

## Phase 1: App Shell & Layout / Giai đoạn 1: Shell Ứng dụng & Bố cục

**Date / Ngày:** 2026-01-16

### User Request / Yêu cầu người dùng

- Triển khai Phase 1: App Shell & Layout
- Sửa layout để sidebar và main content fit với màn hình 100vh/100vw
- Sửa lỗi sidebar scroll không cần thiết

### What AI Did / Những gì AI đã làm

#### 1. React Router Setup / Thiết lập React Router

- ✅ Installed `react-router-dom` v7.12.0
- ✅ Updated [`package.json`](../story-manager/package.json) with react-router-dom dependency
- ✅ Configured routing in [`src/App.tsx`](../story-manager/src/App.tsx)

#### 2. App Component with Routing / Thành phần App với Routing

- ✅ Converted [`src/App.tsx`](../story-manager/src/App.tsx) to use React Router:
  - BrowserRouter wrapper
  - Routes configuration
  - Layout wrapper for all routes
  - Route definitions for all pages

#### 3. Layout Components / Các thành phần Bố cục

- ✅ Created [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx):
  - Main layout wrapper with Header, Sidebar, and Main content
  - 100vh/100vw layout (h-screen w-screen)
  - Overflow control (overflow-hidden on container)
  - Mobile sidebar toggle state management
  - Responsive sidebar (fixed on mobile, static on desktop)
  - Centered main content (max-w-6xl, mx-auto, px-6)

- ✅ Created [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx):
  - Sticky header with app title and logo
  - Mobile menu toggle button
  - Theme switcher placeholder (Phase 2)
  - Language switcher placeholder (Phase 2)
  - Consistent spacing and styling

- ✅ Created [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx):
  - Navigation menu with icons
  - NavLink for active state styling
  - Responsive sidebar (hidden on mobile, visible on desktop)
  - Fixed min-h-screen issue causing unnecessary scroll
  - Proper h-full to fit container height

#### 4. Page Components / Các thành phần Trang

- ✅ Created [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx):
  - Feature cards grid for all modules
  - Phase 1 status section
  - Centered layout

- ✅ Created [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx):
  - 404 error page
  - Back to home button

- ✅ Created placeholder pages (Phase 4-9 implementation pending):
  - [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx)
  - [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx)
  - [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx)
  - [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx)
  - [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx)
  - [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx)

#### 5. Layout Fixes / Sửa lỗi Bố cục

- ✅ Fixed sidebar desktop visibility issue:
  - Added `lg:translate-x-0` to always show sidebar on desktop
  - Removed conflicting `lg:static` and `lg:transform-none`
  - Proper mobile/desktop transform handling

- ✅ Fixed 100vh/100vw layout:
  - Changed from `min-h-screen` to `h-screen w-screen`
  - Added `overflow-hidden` to prevent page scroll
  - Each section (sidebar, main) has its own `overflow-y-auto`

- ✅ Fixed sidebar unnecessary scroll:
  - Removed `min-h-screen` from Sidebar component
  - Changed to `h-full` to fit container
  - Removed duplicate `<aside>` wrapper
  - Proper content-based height

### Files Created / Các tệp đã tạo

| File / Tệp                                                                                                    | Description / Mô tả                |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx)                       | Main layout wrapper component      |
| [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx)                       | Header component with nav controls |
| [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx)                     | Sidebar navigation component       |
| [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx)                                               | Home page with feature overview    |
| [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx)                                       | 404 error page                     |
| [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx)             | Characters page placeholder        |
| [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx)                             | Events page placeholder            |
| [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx)                 | Locations page placeholder         |
| [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx)                     | Factions page placeholder          |
| [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx) | Relationships page placeholder     |
| [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx)                     | Timeline page placeholder          |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                    | Description / Mô tả                   |
| ------------------------------------------------------------- | ------------------------------------- |
| [`story-manager/src/App.tsx`](../story-manager/src/App.tsx)   | Converted to React Router with routes |
| [`story-manager/package.json`](../story-manager/package.json) | Added react-router-dom dependency     |

### Final Result / Kết quả cuối cùng

**Phase 1: App Shell & Layout** đã hoàn thành thành công!

✅ React Router đã được thiết lập với tất cả routes
✅ Layout component với Header, Sidebar, và Main content area
✅ Responsive layout (mobile sidebar toggle, desktop always visible)
✅ 100vh/100vw layout với overflow control
✅ Sidebar và main content có scroll riêng khi cần
✅ Centered main content (max-w-6xl)
✅ Tất cả pages đã được tạo (placeholder cho Phase 4-9)
✅ 404 page hoàn chỉnh
✅ Navigation hoạt động với active state styling

**Tiếp theo / Next Steps:** Phase 2: Theme & i18n

---

## Phase 2: Theme & i18n / Giai đoạn 2: Chủ đề & Đa ngôn ngữ

**Date / Ngày:** 2026-01-16

### User Request / Yêu cầu người dùng

- Đọc các file trong thư mục docs để nắm được công việc
- Triển khai Phase 2: Theme & i18n
- Xóa hoàn toàn night theme khỏi dự án

### What AI Did / Những gì AI đã làm

#### 1. Theme Context Implementation / Triển khai Theme Context

- ✅ Created [`src/context/ThemeContext.tsx`](../story-manager/src/context/ThemeContext.tsx):
  - Theme type: `export type Theme = 'light' | 'dark'` (removed 'night')
  - Theme toggle sequence: light → dark → light
  - Theme persistence to localStorage
  - System theme detection on initial load
  - Theme class application to document element

- ✅ Created [`src/hooks/useTheme.ts`](../story-manager/src/hooks/useTheme.ts):
  - Custom hook to use ThemeContext
  - Exports theme context with type definition

#### 2. i18n Context Implementation / Triển khai i18n Context

- ✅ Created [`src/context/I18nContext.tsx`](../story-manager/src/context/I18nContext.tsx):
  - Language type: `export type Language = 'en' | 'vi'`
  - Translation function using dot notation
  - Language persistence to localStorage
  - Default language: 'vi' (Vietnamese)
  - Exports I18nContext and types

- ✅ Created [`src/hooks/useI18n.ts`](../story-manager/src/hooks/useI18n.ts):
  - Custom hook to use I18nContext
  - Imports types from context

- ✅ Created [`src/lib/i18n.ts`](../story-manager/src/lib/i18n.ts):
  - Contains translations object with en and vi keys
  - getNestedValue utility function for dot notation lookups

#### 3. Translation Files / Tệp dịch thuật

- ✅ Created [`src/locales/en.json`](../story-manager/src/locales/en.json):
  - English translations for app, nav, theme, language, common, home, notFound

- ✅ Created [`src/locales/vi.json`](../story-manager/src/locales/vi.json):
  - Vietnamese translations for all keys

#### 4. Theme Switcher Component / Thành phần Theme Switcher

- ✅ Created [`src/components/common/ThemeSwitcher.tsx`](../story-manager/src/components/common/ThemeSwitcher.tsx):
  - Removed night theme icon (star)
  - Only shows Sun (light) and Moon (dark) icons
  - Updated classes to remove `night:` prefix
  - Uses useTheme hook

#### 5. Language Switcher Component / Thành phần Language Switcher

- ✅ Created [`src/components/common/LanguageSwitcher.tsx`](../story-manager/src/components/common/LanguageSwitcher.tsx):
  - Removed `night:` classes from button
  - Shows language code (EN/VI)
  - Uses useI18n hook

#### 6. Layout Components Integration / Tích hợp các thành phần Layout

- ✅ Updated [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx):
  - Added useI18n hook and t() function
  - Integrated ThemeSwitcher and LanguageSwitcher components
  - Removed all `night:` classes
  - Added dark theme classes: `dark:bg-gray-900`, `dark:border-gray-700`, `dark:text-gray-100`, `dark:text-gray-400`, `dark:text-gray-200`, `dark:bg-blue-500`

- ✅ Updated [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx):
  - Added useI18n hook
  - Updated nav items to use translation keys
  - Added dark theme classes: `dark:bg-blue-900/20`, `dark:text-blue-400`, `dark:hover:bg-gray-800`

- ✅ Updated [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx):
  - Added dark theme classes: `dark:bg-gray-900`, `dark:border-gray-700`
  - Updated main content: `dark:bg-gray-900`

#### 7. TailwindCSS Configuration Update / Cập nhật cấu hình TailwindCSS

- ✅ Updated [`tailwind.config.js`](../story-manager/tailwind.config.js):
  - Removed night theme colors (slate colors)
  - Removed custom plugin for night variant
  - Kept only gray and blue colors
  - Removed `@tailwindcss/postcss` plugin import

#### 8. CSS Styles Update / Cập nhật kiểu CSS

- ✅ Updated [`src/index.css`](../story-manager/src/index.css):
  - Removed `.night body` styles
  - Kept `.dark body` styles

#### 9. Main App Integration / Tích hợp vào App chính

- ✅ Updated [`src/main.tsx`](../story-manager/src/main.tsx):
  - Wrapped App with ThemeProvider and I18nProvider

#### 10. Documentation Updates / Cập nhật tài liệu

- ✅ Updated [`docs/THEME_RULES.md`](../story-manager/docs/THEME_RULES.md):
  - Updated to only document Light and Dark themes
  - Removed Night theme section

- ✅ Updated [`docs/PROJECT_TODO.md`](../story-manager/docs/PROJECT_TODO.md):
  - Updated Phase 2 description: "ThemeContext với các chủ đề Sáng/Tối" (removed Night)
  - Updated Phase 2 deliverables to remove Night theme references
  - Marked all Phase 2 tasks as completed [x]

### Files Created / Các tệp đã tạo

| File / Tệp                                                                                                  | Description / Mô tả                          |
| ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`src/context/ThemeContext.tsx`](../story-manager/src/context/ThemeContext.tsx)                             | Theme context provider with light/dark modes |
| [`src/hooks/useTheme.ts`](../story-manager/src/hooks/useTheme.ts)                                           | Custom hook for theme management             |
| [`src/context/I18nContext.tsx`](../story-manager/src/context/I18nContext.tsx)                               | i18n context provider with EN/VI support     |
| [`src/hooks/useI18n.ts`](../story-manager/src/hooks/useI18n.ts)                                             | Custom hook for i18n                         |
| [`src/lib/i18n.ts`](../story-manager/src/lib/i18n.ts)                                                       | i18n utility functions and translations      |
| [`src/locales/en.json`](../story-manager/src/locales/en.json)                                               | English translations                         |
| [`src/locales/vi.json`](../story-manager/src/locales/vi.json)                                               | Vietnamese translations                      |
| [`src/components/common/ThemeSwitcher.tsx`](../story-manager/src/components/common/ThemeSwitcher.tsx)       | Theme toggle button component                |
| [`src/components/common/LanguageSwitcher.tsx`](../story-manager/src/components/common/LanguageSwitcher.tsx) | Language toggle button component             |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                                                | Description / Mô tả                               |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx)   | Added theme/i18n integration, removed night theme |
| [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx) | Added i18n support, removed night theme           |
| [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx)   | Added dark theme classes, removed night theme     |
| [`tailwind.config.js`](../story-manager/tailwind.config.js)                               | Removed night theme colors and variant            |
| [`src/index.css`](../story-manager/src/index.css)                                         | Removed night theme styles                        |
| [`src/main.tsx`](../story-manager/src/main.tsx)                                           | Wrapped App with ThemeProvider and I18nProvider   |
| [`docs/THEME_RULES.md`](../story-manager/docs/THEME_RULES.md)                             | Updated to remove Night theme documentation       |
| [`docs/PROJECT_TODO.md`](../story-manager/docs/PROJECT_TODO.md)                           | Updated Phase 2 tasks and marked as completed     |

### Final Result / Kết quả cuối cùng

**Phase 2: Theme & i18n** đã hoàn thành thành công!

✅ ThemeContext đã được tạo với 2 chủ đề (Sáng/Tối)
✅ I18nContext đã được tạo với hỗ trợ EN/VI
✅ ThemeSwitcher component đã được tạo
✅ LanguageSwitcher component đã been created
✅ Tất cả layout components đã được tích hợp theme và i18n
✅ Night theme đã được xóa hoàn toàn khỏi dự án
✅ TailwindCSS configuration đã được cập nhật
✅ CSS styles đã được cập nhật
✅ Tài liệu đã được cập nhật để phản ánh các thay đổi
✅ Theme và language preferences được lưu vào localStorage

**Lưu ý / Note:** Night theme đã được xóa hoàn toàn theo yêu cầu của người dùng. Chỉ còn 2 theme: Light và Dark.

**Tiếp theo / Next Steps:** Phase 3: Domain Data Structure

---

## Phase 3: Domain Data Structure / Giai đoạn 3: Cấu trúc Dữ liệu Domain

**Date / Ngày:** 2026-01-16

### User Request / Yêu cầu người dùng

- Đọc các file trong thư mục docs để nắm được công việc
- Triển khai Phase 3: Domain Data Structure

### What AI Did / Những gì AI đã làm

#### 1. Type Definitions / Định nghĩa Kiểu

- ✅ Created [`src/types/common.ts`](../story-manager/src/types/common.ts):
  - TimeRange interface for versioned attributes
  - BaseEntity interface with common properties

- ✅ Created [`src/types/character.ts`](../story-manager/src/types/character.ts):
  - Character interface extending BaseEntity
  - CharacterAttribute interface with time-based versioning
  - Character-specific properties (role, age, gender, appearance, personality, background, goals, flaws, skills, notes)

- ✅ Created [`src/types/event.ts`](../story-manager/src/types/event.ts):
  - Event interface extending BaseEntity
  - Event-specific properties (timestamp, locationId, eventType, importance, participants, outcome, impact)

- ✅ Created [`src/types/location.ts`](../story-manager/src/types/location.ts):
  - Location interface extending BaseEntity
  - LocationAttribute interface with time-based versioning
  - Location-specific properties (locationType, climate, geography, population, culture, economy, government, notes)

- ✅ Created [`src/types/faction.ts`](../story-manager/src/types/faction.ts):
  - Faction interface extending BaseEntity
  - FactionAttribute interface with time-based versioning
  - Faction-specific properties (factionType, ideology, goals, resources, influence, members, leader, notes)

- ✅ Created [`src/types/relationship.ts`](../story-manager/src/types/relationship.ts):
  - Relationship interface extending BaseEntity
  - RelationshipDetail interface with time-based versioning
  - Relationship-specific properties (entity1Id, entity2Id, relationshipType, description, status, strength)

- ✅ Created [`src/types/timeline.ts`](../story-manager/src/types/timeline.ts):
  - Timeline interface with events array
  - TimelineEvent interface for timeline events
  - Timeline-specific properties (id, name, startDate, endDate, events)

- ✅ Created [`src/types/index.ts`](../story-manager/src/types/index.ts):
  - Exports all types from individual type files
  - Entity union type for all entities
  - EntityType constants and EntityTypeValue type

#### 2. Mock Data / Dữ liệu Mock

- ✅ Created [`src/lib/mockData.ts`](../story-manager/src/lib/mockData.ts):
  - Mock data for 4 characters with time-based attributes
  - Mock data for 5 events with timestamps and participants
  - Mock data for 4 locations with time-based attributes
  - Mock data for 2 factions (Shadow Faction, The Resistance)
  - Mock data for 4 relationships between characters
  - Mock timeline with 6 timeline events
  - All data follows the time-based versioning pattern

#### 3. Time-based Data Filtering / Lọc Dữ liệu dựa trên Thời gian

- ✅ Created [`src/lib/timeFilter.ts`](../story-manager/src/lib/timeFilter.ts):
  - isTimeRangeActive() - Check if time range is active at given time
  - getActiveCharacterAttribute() - Get active character attribute version
  - getActiveLocationAttribute() - Get active location attribute version
  - getActiveFactionAttribute() - Get active faction attribute version
  - getActiveRelationshipDetail() - Get active relationship detail version
  - filterCharactersByTime() - Filter characters by time
  - filterLocationsByTime() - Filter locations by time
  - filterFactionsByTime() - Filter factions by time
  - filterRelationshipsByTime() - Filter relationships by time
  - filterEventsByTime() - Filter events by time
  - getEventsInRange() - Get events within time range
  - formatDate() - Format date for display
  - formatDateTime() - Format date and time for display
  - compareTimes() - Compare two time strings
  - getEarliestTime() - Get earliest time from array
  - getLatestTime() - Get latest time from array

#### 4. Data Context / Ngữ cảnh Dữ liệu

- ✅ Created [`src/context/DataContext.tsx`](../story-manager/src/context/DataContext.tsx):
  - DataContextValue interface with all data and time state
  - DataProvider component with:
    - Current effective time state (currentTime)
    - Time navigation history (history, historyIndex)
    - Time navigation functions (goBack, goForward)
    - All entity data (characters, events, locations, factions, relationships)
    - Active entity data filtered by current time
    - Helper functions to get entities with active attributes
  - Exports DataContext and DataContextValue type

#### 5. Data Hooks / Hooks Dữ liệu

- ✅ Created [`src/hooks/useData.ts`](../story-manager/src/hooks/useData.ts):
  - useDataContext() - Hook to access data context
  - useCurrentTime() - Hook to access current time state

#### 6. Main App Integration / Tích hợp vào App chính

- ✅ Updated [`src/main.tsx`](../story-manager/src/main.tsx):
  - Wrapped App with DataProvider
  - DataProvider wraps ThemeProvider and I18nProvider

### Files Created / Các tệp đã tạo

| File / Tệp                                                                    | Description / Mô tả                  |
| ----------------------------------------------------------------------------- | ------------------------------------ |
| [`src/types/common.ts`](../story-manager/src/types/common.ts)                 | Common types (TimeRange, BaseEntity) |
| [`src/types/character.ts`](../story-manager/src/types/character.ts)           | Character types                      |
| [`src/types/event.ts`](../story-manager/src/types/event.ts)                   | Event types                          |
| [`src/types/location.ts`](../story-manager/src/types/location.ts)             | Location types                       |
| [`src/types/faction.ts`](../story-manager/src/types/faction.ts)               | Faction types                        |
| [`src/types/relationship.ts`](../story-manager/src/types/relationship.ts)     | Relationship types                   |
| [`src/types/timeline.ts`](../story-manager/src/types/timeline.ts)             | Timeline types                       |
| [`src/types/index.ts`](../story-manager/src/types/index.ts)                   | Type exports and utilities           |
| [`src/lib/mockData.ts`](../story-manager/src/lib/mockData.ts)                 | Mock data for all entities           |
| [`src/lib/timeFilter.ts`](../story-manager/src/lib/timeFilter.ts)             | Time-based filtering utilities       |
| [`src/context/DataContext.tsx`](../story-manager/src/context/DataContext.tsx) | Data context provider                |
| [`src/hooks/useData.ts`](../story-manager/src/hooks/useData.ts)               | Data context hooks                   |

### Files Modified / Các tệp đã sửa

| File / Tệp                                      | Description / Mô tả        |
| ----------------------------------------------- | -------------------------- |
| [`src/main.tsx`](../story-manager/src/main.tsx) | Added DataProvider wrapper |

### Final Result / Kết quả cuối cùng

**Phase 3: Domain Data Structure** đã hoàn thành thành công!

✅ TypeScript types cho tất cả thực thể đã được định nghĩa (Character, Event, Location, Faction, Relationship, Timeline)
✅ Dữ liệu mock cho tất cả thực thể đã được tạo với thuộc tính dựa trên thời gian
✅ Tiện ích lọc dữ liệu dựa trên thời gian đã được triển khai
✅ DataContext để quản lý trạng thái đã được tạo
✅ Quản lý trạng thái thời gian hiệu lực hiện tại đã được triển khai
✅ Hooks để truy cập dữ liệu đã được tạo
✅ DataProvider đã được tích hợp vào main.tsx
✅ Cấu trúc types được chia thành các file nhỏ theo yêu cầu người dùng

**Lưu ý / Note:** Types được chia thành các file riêng biệt (common.ts, character.ts, event.ts, location.ts, faction.ts, relationship.ts, timeline.ts, index.ts) để dễ quản lý và bảo trì.

**Tiếp theo / Next Steps:** Phase 4: Character Module

---

## Phase 1.5: Icon Migration / Giai đoạn 1.5: Di chuyển Icon

**Date / Ngày:** 2026-01-17

### User Request / Yêu cầu người dùng

- Thay thế tất cả icon SVG bằng icon Lucide trong toàn bộ dự án
- Đảm bảo icon hiển thị đúng màu theo theme

### What AI Did / Những gì AI đã làm

#### 1. Icon Library Setup / Thiết lập thư viện Icon

- ✅ Confirmed `lucide-react` v0.562.0 is installed in [`package.json`](../story-manager/package.json:14)
- ✅ No additional installation needed

#### 2. Component Icon Updates / Cập nhật Icon Components

- ✅ Updated [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx):
  - Imported Lucide icons: `Users`, `Calendar`, `MapPin`, `Building2`, `Link2`, `Clock`
  - Replaced 6 inline SVG icons with Lucide components
  - Icons inherit color from parent via `currentColor`

- ✅ Updated [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx):
  - Fixed Home icon background color issue
  - Changed `bg-primary-600` → `bg-blue-600` (light mode)
  - Changed `dark:bg-primary-500` → `dark:bg-blue-500` (dark mode)
  - Note: `primary-*` classes were not defined in Tailwind config

#### 3. Page Icon Updates / Cập nhật Icon Pages

- ✅ Updated [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx):
  - Imported Lucide icons for all 6 feature cards
  - Replaced inline SVG icons with Lucide components

- ✅ Updated [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx):
  - Imported `AlertTriangle` and `ArrowLeft` from Lucide
  - Replaced error and back button icons

- ✅ Updated [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx):
  - Imported `Users` icon from Lucide
  - Replaced placeholder SVG icon

- ✅ Updated [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx):
  - Imported `Calendar` icon from Lucide
  - Replaced placeholder SVG icon

- ✅ Updated [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx):
  - Imported `Building2` icon from Lucide
  - Replaced placeholder SVG icon

- ✅ Updated [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx):
  - Imported `MapPin` icon from Lucide
  - Replaced placeholder SVG icon

- ✅ Updated [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx):
  - Imported `Link2` icon from Lucide
  - Replaced placeholder SVG icon

- ✅ Updated [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx):
  - Imported `Clock` icon from Lucide
  - Replaced placeholder SVG icon

#### 4. Icon Color Theme Support / Hỗ trợ Màu Icon theo Theme

- ✅ All Lucide icons use `currentColor` by default
- ✅ Icons inherit color from parent element's `text-*` classes
- ✅ Icons properly display in both light and dark themes

### Files Modified / Các tệp đã sửa

| File / Tệp                                                                                                    | Description / Mô tả                    |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx)                     | Replaced 6 SVG icons with Lucide icons |
| [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx)                       | Fixed Home icon background color issue |
| [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx)                                               | Replaced 6 SVG icons with Lucide icons |
| [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx)                                       | Replaced 2 SVG icons with Lucide icons |
| [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx)             | Replaced SVG icon with Lucide icon     |
| [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx)                             | Replaced SVG icon with Lucide icon     |
| [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx)                     | Replaced SVG icon with Lucide icon     |
| [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx)                 | Replaced SVG icon with Lucide icon     |
| [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx) | Replaced SVG icon with Lucide icon     |
| [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx)                     | Replaced SVG icon with Lucide icon     |
| [`docs/CHANGELOG.md`](../story-manager/docs/CHANGELOG.md)                                                     | Added Phase 1.5 changelog entry        |

### Final Result / Kết quả cuối cùng

**Phase 1.5: Icon Migration** đã hoàn thành thành công!

✅ Tất cả icon SVG đã được thay thế bằng icon Lucide
✅ Tổng cộng 20+ icon đã được cập nhật
✅ Icon hiển thị đúng màu trong cả light và dark theme
✅ Đã sửa lỗi màu nền icon Home ở light mode
✅ Code gọn gàng và dễ bảo trì hơn

**Các icon Lucide được sử dụng:**

- `Users` - Characters
- `Calendar` - Events
- `MapPin` - Locations
- `Building2` - Factions
- `Link2` - Relationships
- `Clock` - Timeline
- `AlertTriangle` - 404 Error
- `ArrowLeft` - Back button
- `Menu`, `Home`, `X` - Header navigation
- `Sun`, `Moon` - Theme switcher

**Lưu ý / Note:** Lucide icons tự động kế thừa màu sắc từ theme thông qua `currentColor`, không cần cấu hình thêm.

---

## Phase 1.6: Color Theme Refactor & Component Extraction / Giai đoạn 1.6: Tái cấu hình Màu & Tách Component

**Date / Ngày:** 2026-01-17

### User Request / Yêu cầu người dùng

- Thay đổi màu sắc cho light mode (màu hiện tại bị nhạt nhòa, thiếu điểm nhấn)
- Tách page thành các component cho clean code
- Cập nhật changelog và các file todo

### What AI Did / Những gì AI đã làm

#### 1. New Color Palette / Bộ màu mới

- ✅ Updated [`tailwind.config.js`](../story-manager/tailwind.config.js) with fresh color palette:
  - **Primary**: Emerald-600 (#059669) - màu xanh lá tươi sáng
  - **Secondary**: Teal-500 (#14b8a6) - màu xanh ngọc
  - **Accent**: Amber-500 (#f59e0b) - màu cam vàng nhấn
  - Full color scale for emerald, teal, and amber (50-900)
- ✅ Updated [`src/index.css`](../story-manager/src/index.css):
  - Changed background color from `#f9fafb` to `#ecfdf5` (emerald-50)

#### 2. Theme Rules Update / Cập nhật Quy tắc Chủ đề

- ✅ Updated [`docs/THEME_RULES.md`](../story-manager/docs/THEME_RULES.md):
  - Light theme: Emerald/Teal/Amber palette
  - Dark theme: Kept original Blue-500 (unchanged)
  - Added secondary and accent color definitions

#### 3. Layout Components Color Update / Cập nhật Màu các thành phần Layout

- ✅ Updated [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx):
  - Logo background: `bg-emerald-600` (light) / `dark:bg-blue-500` (dark)
  - Border: `border-emerald-100` (light) / `dark:border-gray-700` (dark)
  - Hover states: `hover:text-emerald-600` (light) / `dark:hover:text-blue-400` (dark)

- ✅ Updated [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx):
  - Active state: `bg-emerald-100 text-emerald-700` (light) / `dark:bg-blue-900/20 dark:text-blue-400` (dark)
  - Hover state: `hover:bg-emerald-50` (light) / `dark:hover:bg-gray-800` (dark)

- ✅ Updated [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx):
  - Background: `bg-emerald-50` (light) / `dark:bg-gray-900` (dark)
  - Border: `border-emerald-100` (light) / `dark:border-gray-700` (dark)

#### 4. Common Components Color Update / Cập nhật Màu các thành phần Chung

- ✅ Updated [`src/components/common/ThemeSwitcher.tsx`](../story-manager/src/components/common/ThemeSwitcher.tsx):
  - Hover: `hover:text-emerald-600` (light) / `dark:hover:text-blue-400` (dark)
  - Background: `hover:bg-emerald-50` (light) / `dark:hover:bg-gray-800` (dark)

- ✅ Updated [`src/components/common/LanguageSwitcher.tsx`](../story-manager/src/components/common/LanguageSwitcher.tsx):
  - Hover: `hover:text-emerald-600` (light) / `dark:hover:text-blue-400` (dark)
  - Background: `hover:bg-emerald-50` (light) / `dark:hover:bg-gray-800` (dark)

#### 5. UI Components Creation / Tạo thành phần UI

- ✅ Created [`src/components/ui/FeatureCard.tsx`](../story-manager/src/components/ui/FeatureCard.tsx):
  - Reusable feature card component
  - Gradient icon background: `from-emerald-500 to-teal-500` (light) / `from-blue-600 to-indigo-600` (dark)
  - Hover effects with shadow
  - Border: `border-emerald-200` (light) / `dark:border-gray-700` (dark)

- ✅ Created [`src/components/ui/StatusSection.tsx`](../story-manager/src/components/ui/StatusSection.tsx):
  - Reusable status section component
  - StatusItem with colored dot: `bg-emerald-500` (light) / `dark:bg-blue-500` (dark)

- ✅ Created [`src/components/ui/PlaceholderPage.tsx`](../story-manager/src/components/ui/PlaceholderPage.tsx):
  - Reusable placeholder page component
  - Theme-aware icon colors via props
  - Background: `border-emerald-100` (light) / `dark:border-gray-700` (dark)

#### 6. Page Components Refactor / Tái cấu hình các thành phần Trang

- ✅ Updated [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx):
  - Refactored to use FeatureCard and StatusSection components
  - Added dark mode text colors: `dark:text-white`, `dark:text-gray-300`
  - Improved feature cards with gradient icons
  - Enhanced hover effects with shadow

- ✅ Updated [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-emerald-400` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-teal-500` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-amber-500` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-emerald-600` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-teal-600` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx):
  - Refactored to use PlaceholderPage component
  - Icon color: `text-amber-600` (light) / `dark:text-gray-400` (dark)

- ✅ Updated [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx):
  - Updated with new color scheme
  - Icon: `text-amber-500` (light) / `dark:text-gray-400` (dark)
  - Button: `bg-emerald-600` (light) / `dark:bg-blue-600` (dark)

### Files Created / Các tệp đã tạo

| File / Tệp                                                                                        | Description / Mô tả                 |
| ------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`src/components/ui/FeatureCard.tsx`](../story-manager/src/components/ui/FeatureCard.tsx)         | Reusable feature card component     |
| [`src/components/ui/StatusSection.tsx`](../story-manager/src/components/ui/StatusSection.tsx)     | Reusable status section component   |
| [`src/components/ui/PlaceholderPage.tsx`](../story-manager/src/components/ui/PlaceholderPage.tsx) | Reusable placeholder page component |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                                                                    | Description / Mô tả                    |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`tailwind.config.js`](../story-manager/tailwind.config.js)                                                   | Added Emerald/Teal/Amber color palette |
| [`src/index.css`](../story-manager/src/index.css)                                                             | Updated background color to emerald-50 |
| [`docs/THEME_RULES.md`](../story-manager/docs/THEME_RULES.md)                                                 | Updated with new color palette         |
| [`src/components/layout/Header.tsx`](../story-manager/src/components/layout/Header.tsx)                       | Updated colors for light mode          |
| [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx)                     | Updated colors for light mode          |
| [`src/components/layout/Layout.tsx`](../story-manager/src/components/layout/Layout.tsx)                       | Updated colors for light mode          |
| [`src/components/common/ThemeSwitcher.tsx`](../story-manager/src/components/common/ThemeSwitcher.tsx)         | Updated hover colors                   |
| [`src/components/common/LanguageSwitcher.tsx`](../story-manager/src/components/common/LanguageSwitcher.tsx)   | Updated hover colors                   |
| [`src/app/HomePage.tsx`](../story-manager/src/app/HomePage.tsx)                                               | Refactored to use new components       |
| [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx)             | Refactored to use PlaceholderPage      |
| [`src/app/events/EventsPage.tsx`](../story-manager/src/app/events/EventsPage.tsx)                             | Refactored to use PlaceholderPage      |
| [`src/app/locations/LocationsPage.tsx`](../story-manager/src/app/locations/LocationsPage.tsx)                 | Refactored to use PlaceholderPage      |
| [`src/app/factions/FactionsPage.tsx`](../story-manager/src/app/factions/FactionsPage.tsx)                     | Refactored to use PlaceholderPage      |
| [`src/app/relationships/RelationshipsPage.tsx`](../story-manager/src/app/relationships/RelationshipsPage.tsx) | Refactored to use PlaceholderPage      |
| [`src/app/timeline/TimelinePage.tsx`](../story-manager/src/app/timeline/TimelinePage.tsx)                     | Refactored to use PlaceholderPage      |
| [`src/app/NotFoundPage.tsx`](../story-manager/src/app/NotFoundPage.tsx)                                       | Updated with new color scheme          |
| [`docs/CHANGELOG.md`](../story-manager/docs/CHANGELOG.md)                                                     | Added Phase 1.6 changelog entry        |

### Final Result / Kết quả cuối cùng

**Phase 1.6: Color Theme Refactor & Component Extraction** đã hoàn thành thành công!

✅ Bộ màu mới Emerald/Teal/Amber đã được áp dụng cho light mode
✅ Dark mode giữ nguyên màu Blue-500 như cũ
✅ 3 component UI tái sử dụng đã được tạo (FeatureCard, StatusSection, PlaceholderPage)
✅ Tất cả page đã được refactor để sử dụng component mới
✅ Code gọn gàng, dễ bảo trì và mở rộng hơn
✅ Changelog đã được cập nhật

**Lưu ý / Note:**

- Light mode sử dụng tông màu Emerald/Teal/Amber tươi sáng, hiện đại
- Dark mode giữ nguyên màu Blue-500 như yêu cầu
- Các component UI tái sử dụng giúp giảm code trùng lặp

**Tiếp theo / Next Steps:** Phase 4: Character Module

---

## Phase 4: Character Module / Giai đoạn 4: Module Nhân vật

**Date / Ngày:** 2026-01-17

### User Request / Yêu cầu người dùng

- Đọc các file trong thư mục docs để nắm được công việc
- Triển khai Phase 4: Character Module
- Code phải tương thích với code trước đó, đặc biệt là đồng bộ về mặt giao diện

### What AI Did / Những gì AI đã làm

#### 1. Translation Files / Các tệp dịch thuật

- ✅ Updated [`src/locales/en.json`](../story-manager/src/locales/en.json) with character-related keys:
  - `characters.title`, `characters.subtitle`, `characters.description`
  - `characters.list`, `characters.details`, `characters.create`, `characters.edit`, `characters.delete`
  - `characters.search`, `characters.noCharacters`
  - `characters.attributes.role`, `characters.attributes.age`, `characters.attributes.gender`
  - `characters.attributes.appearance`, `characters.attributes.personality`, `characters.attributes.background`
  - `characters.attributes.goals`, `characters.attributes.flaws`, `characters.attributes.skills`
  - `characters.attributes.notes`, `characters.relationships`, `characters.timeRange`
  - `characters.from`, `characters.to`, `characters.current`, `characters.noRelationships`
  - `characters.confirmDelete`, `characters.cancel`, `characters.confirm`

- ✅ Updated [`src/locales/vi.json`](../story-manager/src/locales/vi.json) with Vietnamese translations for all character keys

#### 2. Domain Components / Các thành phần Domain

- ✅ Created [`src/components/domain/character/CharacterTable.tsx`](../story-manager/src/components/domain/character/CharacterTable.tsx):
  - Reusable table component for displaying characters
  - Columns: Name, Description, Role, Actions
  - Edit and Delete buttons for each character
  - Click on row to view character details
  - Theme-aware colors (emerald for light, blue for dark)

- ✅ Created [`src/components/domain/character/CharacterRelationships.tsx`](../story-manager/src/components/domain/character/CharacterRelationships.tsx):
  - Component for displaying character relationships
  - Shows relationship name, type, description
  - Visual strength indicator (progress bar)
  - Status badge (active/inactive)
  - Theme-aware colors

- ✅ Created [`src/components/domain/character/CharacterForm.tsx`](../story-manager/src/components/domain/character/CharacterForm.tsx):
  - Form component for creating/editing characters
  - Vertical form layout with labels above inputs
  - All character attributes: name, description, role, age, gender, appearance, personality, background, goals, flaws, skills, notes
  - Time range inputs (from, to)
  - Save and Cancel buttons
  - Theme-aware colors and focus states

#### 3. Page Components / Các thành phần Trang

- ✅ Updated [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx):
  - Character list page with search functionality
  - Search bar for filtering characters
  - Create button for new characters
  - Uses CharacterTable component
  - Empty state when no characters found
  - Theme-aware colors

- ✅ Created [`src/app/characters/CharacterDetailPage.tsx`](../story-manager/src/app/characters/CharacterDetailPage.tsx):
  - Character detail page showing full character information
  - Character name and description header
  - Character attributes grid (role, age, gender, appearance, personality, background, goals, flaws, skills, notes)
  - Time range information
  - Back, Edit, and Delete buttons
  - CharacterRelationships component integration
  - Character not found state

- ✅ Created [`src/app/characters/CharacterCreatePage.tsx`](../story-manager/src/app/characters/CharacterCreatePage.tsx):
  - Page for creating new characters
  - Uses CharacterForm component
  - Back navigation on cancel

- ✅ Created [`src/app/characters/CharacterEditPage.tsx`](../story-manager/src/app/characters/CharacterEditPage.tsx):
  - Page for editing existing characters
  - Uses CharacterForm component with pre-filled data
  - Character not found state

#### 4. Routing Configuration / Cấu hình Routing

- ✅ Updated [`src/App.tsx`](../story-manager/src/App.tsx) with new character routes:
  - `/characters/create` - CharacterCreatePage
  - `/characters/:id` - CharacterDetailPage
  - `/characters/:id/edit` - CharacterEditPage

#### 5. Design Compliance / Tuân thủ Quy tắc Thiết kế

All components follow project design guidelines:

- ✅ Centered layout with max-w-6xl, mx-auto, px-6
- ✅ Consistent typography: text-2xl font-semibold (page title), text-lg font-medium (section title), text-sm text-gray-700 (body)
- ✅ Emerald/Teal/Amber color palette for light mode
- ✅ Blue-500 color for dark mode
- ✅ Cards with bg-white border-emerald-100 rounded-xl p-6 (light) / dark:bg-gray-800 dark:border-gray-700 (dark)
- ✅ Vertical forms with labels above inputs
- ✅ Tables for lists
- ✅ Minimal interactions (hover, focus only when helpful)

### Files Created / Các tệp đã tạo

| File / Tệp                                                                                                                                  | Description / Mô tả                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`src/components/domain/character/CharacterTable.tsx`](../story-manager/src/components/domain/character/CharacterTable.tsx)                 | Reusable character table component / Thành phần bảng nhân vật tái sử dụng |
| [`src/components/domain/character/CharacterRelationships.tsx`](../story-manager/src/components/domain/character/CharacterRelationships.tsx) | Character relationships component / Thành phần mối quan hệ nhân vật       |
| [`src/components/domain/character/CharacterForm.tsx`](../story-manager/src/components/domain/character/CharacterForm.tsx)                   | Character form component / Thành phần biểu mẫu nhân vật                   |
| [`src/app/characters/CharactersPage.tsx`](../story-manager/src/app/characters/CharactersPage.tsx)                                           | Character list page / Trang danh sách nhân vật                            |
| [`src/app/characters/CharacterDetailPage.tsx`](../story-manager/src/app/characters/CharacterDetailPage.tsx)                                 | Character detail page / Trang chi tiết nhân vật                           |
| [`src/app/characters/CharacterCreatePage.tsx`](../story-manager/src/app/characters/CharacterCreatePage.tsx)                                 | Character create page / Trang tạo nhân vật                                |
| [`src/app/characters/CharacterEditPage.tsx`](../story-manager/src/app/characters/CharacterEditPage.tsx)                                     | Character edit page / Trang sửa nhân vật                                  |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                    | Description / Mô tả                               |
| ------------------------------------------------------------- | ------------------------------------------------- |
| [`src/locales/en.json`](../story-manager/src/locales/en.json) | Added character translations / Thêm dịch nhân vật |
| [`src/locales/vi.json`](../story-manager/src/locales/vi.json) | Added character translations / Thêm dịch nhân vật |
| [`src/App.tsx`](../story-manager/src/App.tsx)                 | Added character routes / Thêm routes nhân vật     |

### Final Result / Kết quả cuối cùng

**Phase 4: Character Module** đã hoàn thành thành công!

✅ Translation files đã được cập nhật với các key dịch nhân vật
✅ Các thành phần domain nhân vật đã được tạo (CharacterTable, CharacterRelationships, CharacterForm)
✅ Các thành phần trang nhân vật đã được tạo và cập nhật (CharactersPage, CharacterDetailPage, CharacterCreatePage, CharacterEditPage)
✅ Routing đã được cấu hình cho các trang nhân vật
✅ Code tuân thủ các quy tắc thiết kế dự án (màu sắc, typography, spacing, bố cục)
✅ Giao diện tương thích với code hiện có

**Lưu ý / Note:**

- Tất cả thành phần đều tuân thủ các quy tắc thiết kế (DESIGN_RULES.md, THEME_RULES.md)
- Light mode sử dụng bảng màu Emerald/Teal/Amber
- Dark mode sử dụng màu Blue-500
- Form theo chiều dọc với nhãn ở trên input
- Bảng được sử dụng cho danh sách nhân vật

**Tiếp theo / Next Steps:** Phase 5: Event Module

---

## Phase 2.1: I18n Type-Safe Implementation / Giai đoạn 2.1: Triển khai Type-Safe cho I18n

**Date / Ngày:** 2026-01-17

### User Request / Yêu cầu người dùng

- Bổ sung các từ chưa được khai báo trong locale files (ví dụ: common.name, common.description)
- Tìm cách để chỉ có thể sử dụng những từ đã được khai báo (type-safe)
- Cập nhật changelog và các file todo
- Ghi lại các lưu ý khi viết code, đặc biệt là i18n để lần sau có thể thao tác đúng

### What AI Did / Những gì AI đã làm

#### 1. Translation Keys Completion / Hoàn thành Các Key Dịch

- ✅ Updated [`src/locales/en.json`](../story-manager/src/locales/en.json) with missing keys:
  - Added `common.name`: "Name"
  - Added `common.description`: "Description"
- ✅ Updated [`src/locales/vi.json`](../story-manager/src/locales/vi.json) with Vietnamese translations:
  - Added `common.name`: "Tên"
  - Added `common.description`: "Mô tả"

#### 2. Type-Safe Translation Key Implementation / Triển khai Key Dịch Type-Safe

- ✅ Created [`src/types/i18n.ts`](../story-manager/src/types/i18n.ts):
  - Defined `TranslationKey` type with all valid translation keys as union type
  - Included all keys: app._, nav._, theme._, language._, common._, home._, characters._, notFound._
  - Created `isValidTranslationKey()` type guard function for runtime validation
  - All keys are now type-safe - TypeScript will catch invalid keys at compile time

#### 3. I18n System Refactor / Tái cấu hình Hệ thống I18n

- ✅ Updated [`src/lib/i18n.ts`](../story-manager/src/lib/i18n.ts):
  - Removed hardcoded translations object
  - Changed to import translations from JSON files (`en.json`, `vi.json`)
  - This ensures translations are always in sync with locale files
  - Reduced code duplication

- ✅ Updated [`src/context/I18nContext.tsx`](../story-manager/src/context/I18nContext.tsx):
  - Imported `TranslationKey` type from `src/types/i18n.ts`
  - Removed local `TranslationKey` type definition
  - Now uses centralized type-safe translation keys

- ✅ Updated [`src/hooks/useI18n.ts`](../story-manager/src/hooks/useI18n.ts):
  - Imported `TranslationKey` type from `src/types/i18n.ts`
  - Ensures type safety across all i18n usage

#### 4. Component Updates for Type Safety / Cập nhật Thành phần cho Type Safety

- ✅ Updated [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx):
  - Changed `NavItem.labelKey` type from `string` to `TranslationKey`
  - Ensures only valid translation keys can be used in navigation

#### 5. TypeScript Configuration Update / Cập nhật Cấu hình TypeScript

- ✅ Updated [`tsconfig.app.json`](../story-manager/tsconfig.app.json):
  - Added `"resolveJsonModule": true` to enable JSON imports
  - Added `"esModuleInterop": true` for proper JSON module handling
  - Allows direct import of `.json` files in TypeScript

#### 6. I18n Helper Utilities / Tiện ích Trợ giúp I18n

- ✅ Created [`src/lib/i18nHelper.ts`](../story-manager/src/lib/i18nHelper.ts):
  - `validateTranslationKey(key: string): TranslationKey` - Validates and returns type-safe key
  - `getAllTranslationKeys(): readonly TranslationKey[]` - Returns all available translation keys
  - `hasTranslationKey(key: string): key is TranslationKey` - Type guard to check if key exists
  - `getKeysByNamespace(namespace: string): TranslationKey[]` - Get keys by namespace
  - All functions include JSDoc comments with examples in both English and Vietnamese

#### 7. Documentation Updates / Cập nhật Tài liệu

- ✅ Updated [`docs/I18N_RULES.md`](../story-manager/docs/I18N_RULES.md):
  - Added rules for type-safe translation keys
  - Added guidelines for adding new translation keys
  - Added workflow for maintaining translation key consistency

### Files Created / Các tệp đã tạo

| File / Tệp                                                        | Description / Mô tả                             |
| ----------------------------------------------------------------- | ----------------------------------------------- |
| [`src/types/i18n.ts`](../story-manager/src/types/i18n.ts)         | Type-safe translation key definitions           |
| [`src/lib/i18nHelper.ts`](../story-manager/src/lib/i18nHelper.ts) | I18n helper utilities with validation functions |

### Files Modified / Các tệp đã sửa

| File / Tệp                                                                                | Description / Mô tả                 |
| ----------------------------------------------------------------------------------------- | ----------------------------------- |
| [`src/locales/en.json`](../story-manager/src/locales/en.json)                             | Added missing common keys           |
| [`src/locales/vi.json`](../story-manager/src/locales/vi.json)                             | Added missing common keys           |
| [`src/lib/i18n.ts`](../story-manager/src/lib/i18n.ts)                                     | Import translations from JSON files |
| [`src/context/I18nContext.tsx`](../story-manager/src/context/I18nContext.tsx)             | Import TranslationKey type          |
| [`src/hooks/useI18n.ts`](../story-manager/src/hooks/useI18n.ts)                           | Import TranslationKey type          |
| [`src/components/layout/Sidebar.tsx`](../story-manager/src/components/layout/Sidebar.tsx) | Use type-safe TranslationKey        |
| [`tsconfig.app.json`](../story-manager/tsconfig.app.json)                                 | Enable JSON module imports          |
| [`docs/I18N_RULES.md`](../story-manager/docs/I18N_RULES.md)                               | Added type-safe i18n guidelines     |

### Final Result / Kết quả cuối cùng

**Phase 2.1: I18n Type-Safe Implementation** đã hoàn thành thành công!

✅ Các key dịch bị thiếu đã được bổ sung vào cả en.json và vi.json
✅ Type-safe TranslationKey đã được tạo để đảm bảo chỉ sử dụng các key hợp lệ
✅ Hệ thống i18n đã được tái cấu hình để import từ file JSON thay vì hardcode
✅ TypeScript sẽ bắt lỗi các key không hợp lệ tại thời điểm biên dịch
✅ Các helper utilities đã được tạo để hỗ trợ việc quản lý và kiểm tra translation keys
✅ Tài liệu I18N_RULES.md đã được cập nhật với các quy tắc mới
✅ Changelog và TODO đã được cập nhật

**Lưu ý / Note:**

- Bây giờ khi sử dụng `t()` function, TypeScript sẽ chỉ cho phép các key đã được khai báo trong `src/types/i18n.ts`
- Nếu bạn thêm key mới vào locale files, bạn cũng phải cập nhật `src/types/i18n.ts`
- Sử dụng helper functions từ `src/lib/i18nHelper.ts` để kiểm tra và validate translation keys

**Tiếp theo / Next Steps:** Phase 5: Event Module

---

_Last updated: 2026-01-17_
