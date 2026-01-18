# Phase 0: Foundation Plan / Kế hoạch Giai đoạn 0: Nền tảng

## Overview / Tổng quan

Mục tiêu của Phase 0 là thiết lập cấu trúc dự án và công cụ phát triển cơ bản cho ứng dụng quản lý câu chuyện chuyên nghiệp.

## Tech Stack / Công nghệ

- **Build Tool**: Vite (React + TypeScript template)
- **Styling**: TailwindCSS v3
- **Language**: TypeScript
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

## Detailed Tasks / Công việc Chi tiết

### 1. Khởi tạo dự án React với Vite

**Command / Lệnh:**

```bash
npm create vite@latest . -- --template react-ts
```

**Deliverables / Sản phẩm:**

- `package.json` với các dependencies cơ bản
- `vite.config.ts`
- `tsconfig.json`
- `tsconfig.node.json`
- `index.html`
- Cấu trúc thư mục cơ bản (src/, public/)

### 2. Cài đặt và cấu hình TailwindCSS

**Commands / Các lệnh:**

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Files to create / Các tệp cần tạo:**

- `tailwind.config.js` - Cấu hình Tailwind với 2 themes (light, dark)
- `postcss.config.js` - Cấu hình PostCSS

**Files to modify / Các tệp cần sửa:**

- `src/index.css` - Thêm Tailwind directives

**Tailwind Configuration Details / Chi tiết cấu hình Tailwind:**

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light theme colors (default)
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        // Dark theme colors
        dark: {
          bg: "#111827",
          card: "#1f2937",
          text: "#f3f4f6",
        },
        // Night theme colors
        night: {
          bg: "#0f172a",
          card: "#1e293b",
          text: "#e2e8f0",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
```

### 3. Cài đặt và cấu hình TypeScript

TypeScript sẽ được cài đặt tự động khi sử dụng template `react-ts` của Vite.

**Files to verify / Các tệp cần xác minh:**

- `tsconfig.json` - Cấu hình TypeScript chính
- `tsconfig.node.json` - Cấu hình TypeScript cho Node.js (Vite config)

**TypeScript Configuration Details / Chi tiết cấu hình TypeScript:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 4. Cài đặt và cấu hình ESLint

**Commands / Các lệnh:**

```bash
npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react-hooks eslint-plugin-react-refresh
```

**Files to create / Các tệp cần tạo:**

- `eslint.config.js` - Cấu hình ESLint

**ESLint Configuration Details / Chi tiết cấu hình ESLint:**

```javascript
// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
```

### 5. Cài đặt và cấu hình Prettier

**Commands / Các lệnh:**

```bash
npm install -D prettier
```

**Files to create / Các tệp cần tạo:**

- `.prettierrc` - Cấu hình Prettier
- `.prettierignore` - Các tệp bỏ qua khi format

**Prettier Configuration Details / Chi tiết cấu hình Prettier:**

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

**.prettierignore:**

```
dist
node_modules
coverage
*.log
```

### 6. Tạo cấu trúc thư mục dự án

**Directory Structure / Cấu trúc thư mục:**

```
story-manager/
├── docs/                    # Documentation (already exists)
│   ├── AI_DESIGN_RULES.md
│   ├── DESIGN_RULES.md
│   ├── I18N_RULES.md
│   ├── PROJECT_TODO.md
│   └── THEME_RULES.md
├── public/                  # Static assets
├── src/
│   ├── app/                 # React Router routes
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   ├── layout/          # Layout components
│   │   └── domain/          # Domain-specific components
│   ├── context/             # React Context providers
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and helpers
│   ├── types/               # TypeScript type definitions
│   └── locales/             # i18n translation files
├── .gitignore
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### 7. Khởi tạo Git repository

**Commands / Các lệnh:**

```bash
git init
```

### 8. Tạo tệp .gitignore

**Content / Nội dung:**

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Dependencies
node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### 9. Cấu hình các script trong package.json

**Scripts to add / Các script cần thêm:**

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,md}\""
  }
}
```

### 10. Xác minh môi trường phát triển

**Commands / Các lệnh:**

```bash
npm install
npm run dev
```

**Verification / Xác minh:**

- Dev server chạy thành công
- Không có lỗi TypeScript
- Không có lỗi ESLint
- TailwindCSS được load đúng

## Dependencies Summary / Tóm tắt Dependencies

**Production Dependencies / Dependencies Production:**

- React
- React DOM

**Development Dependencies / Dependencies Development:**

- Vite
- TypeScript
- TailwindCSS
- PostCSS
- Autoprefixer
- ESLint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- Prettier

## Success Criteria / Tiêu chí Thành công

1. ✅ Dự án React với TypeScript được khởi tạo thành công
2. ✅ TailwindCSS được cài đặt và cấu hình với 3 themes
3. ✅ TypeScript được cấu hình với strict mode
4. ✅ ESLint được cấu hình với các quy tắc React
5. ✅ Prettier được cấu hình với code style nhất quán
6. ✅ Cấu trúc thư mục dự án được tạo
7. ✅ Git repository được khởi tạo
8. ✅ .gitignore được tạo
9. ✅ Scripts trong package.json được cấu hình
10. ✅ Dev server chạy thành công không có lỗi

## Next Steps / Các bước Tiếp theo

Sau khi hoàn thành Phase 0, tiến tới **Phase 1: App Shell & Layout**:

- Tạo main App component với routing
- Tạo Header component với theme/language switchers
- Tạo Sidebar navigation
- Tạo Main content wrapper với centered layout
- Tạo 404 page
