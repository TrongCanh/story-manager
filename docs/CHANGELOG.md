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
✅ TailwindCSS v4 đã được cài đặt và cấu hình với 3 themes (light, dark, night)
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

_Last updated: 2026-01-16_
