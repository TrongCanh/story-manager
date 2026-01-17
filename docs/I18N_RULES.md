# Internationalization Rules / Quy tắc Quốc tế hóa

This document defines internationalization rules for project.
Tài liệu này định nghĩa các quy tắc quốc tế hóa cho dự án.

---

## Languages / Ngôn ngữ

- English (default) / Tiếng Anh (mặc định)
- Vietnamese / Tiếng Việt

---

## Rules / Quy tắc

1. Do not hardcode user-facing text in components
   - Không hardcode văn bản hiển thị cho người dùng trong các thành phần

2. All text must use translation keys
   - Tất cả văn bản phải sử dụng các key dịch

3. Use a simple i18n structure:
   - Sử dụng cấu trúc i18n đơn giản:
   - en.json
   - vi.json

4. Keys must be semantic and reusable
   - Các key phải mang tính ngữ nghĩa và có thể tái sử dụng

   Example / Ví dụ:
   - character.name
   - character.role
   - timeline.event

5. Language switching must not reload the page
   - Việc chuyển đổi ngôn ngữ không được tải lại trang

6. Default language is English
   - Ngôn ngữ mặc định là Tiếng Anh

7. Vietnamese must use modern, clear wording
   - Tiếng Việt phải sử dụng từ ngữ hiện đại, rõ ràng

8. Type-safe translation keys / Các key dịch type-safe
   - All translation keys must be defined in `src/types/i18n.ts`
     - Tất cả các key dịch phải được định nghĩa trong `src/types/i18n.ts`
   - TypeScript will catch invalid keys at compile time
     - TypeScript sẽ bắt các key không hợp lệ tại thời điểm biên dịch
   - Use `TranslationKey` type for all translation key parameters
     - Sử dụng kiểu `TranslationKey` cho tất cả các tham số key dịch
   - Example / Ví dụ:

     ```typescript
     import { useI18n } from '../hooks/useI18n';

     function MyComponent() {
       const { t } = useI18n();

       // Valid - TypeScript accepts this
       // Hợp lệ - TypeScript chấp nhận điều này
       const title = t('characters.title');

       // Invalid - TypeScript will show error
       // Không hợp lệ - TypeScript sẽ hiển thị lỗi
       const invalid = t('invalid.key'); // Type error!
     }
     ```

9. Adding new translation keys / Thêm key dịch mới
   - When adding new translation keys, follow this workflow:
     - Khi thêm key dịch mới, hãy làm theo quy trình này:
   1. Add the key to both `src/locales/en.json` and `src/locales/vi.json`
      - Thêm key vào cả `src/locales/en.json` và `src/locales/vi.json`
   2. Add the key to the `TranslationKey` type in `src/types/i18n.ts`
      - Thêm key vào kiểu `TranslationKey` trong `src/types/i18n.ts`
   3. Add the key to the `getAllTranslationKeys()` function in `src/lib/i18nHelper.ts`
      - Thêm key vào hàm `getAllTranslationKeys()` trong `src/lib/i18nHelper.ts`
   4. Add the key to the `isValidTranslationKey()` function in `src/types/i18n.ts`
      - Thêm key vào hàm `isValidTranslationKey()` trong `src/types/i18n.ts`
   5. Update documentation if needed
      - Cập nhật tài liệu nếu cần thiết

   Example workflow / Ví dụ quy trình:

   ```typescript
   // Step 1: Add to locale files
   // Bước 1: Thêm vào file locale
   // en.json
   {
     "characters": {
       "newKey": "New Label"
     }
   }

   // vi.json
   {
     "characters": {
       "newKey": "Nhãn mới"
     }
   }

   // Step 2: Add to TranslationKey type
   // Bước 2: Thêm vào kiểu TranslationKey
   // src/types/i18n.ts
   export type TranslationKey =
     | 'characters.title'
     | 'characters.newKey'  // Add this line / Thêm dòng này
     // ... other keys

   // Step 3: Add to helper functions
   // Bước 3: Thêm vào các hàm trợ giúp
   // src/types/i18n.ts - isValidTranslationKey function
   export function isValidTranslationKey(key: string): key is TranslationKey {
     const validKeys: readonly TranslationKey[] = [
       'characters.title',
       'characters.newKey',  // Add this line / Thêm dòng này
       // ... other keys
     ];
     return validKeys.includes(key as TranslationKey);
   }

   // src/lib/i18nHelper.ts - getAllTranslationKeys function
   export function getAllTranslationKeys(): readonly TranslationKey[] {
     return [
       'characters.title',
       'characters.newKey',  // Add this line / Thêm dòng này
       // ... other keys
     ] as const;
   }
   ```

10. Using helper utilities / Sử dụng tiện ích trợ giúp
    - Use helper functions from `src/lib/i18nHelper.ts` for validation
      - Sử dụng các hàm trợ giúp từ `src/lib/i18nHelper.ts` để xác thực
    - `validateTranslationKey(key: string): TranslationKey` - Validates and returns type-safe key
      - `validateTranslationKey(key: string): TranslationKey` - Xác thực và trả về key type-safe
    - `hasTranslationKey(key: string): key is TranslationKey` - Type guard to check if key exists
      - `hasTranslationKey(key: string): key is TranslationKey` - Type guard để kiểm tra xem key có tồn tại không
    - `getKeysByNamespace(namespace: string): TranslationKey[]` - Get keys by namespace
      - `getKeysByNamespace(namespace: string): TranslationKey[]` - Lấy các key theo namespace

---

**Note:** All future UI must comply with these rules.
**Lưu ý:** Tất cả UI trong tương lai phải tuân thủ các quy tắc này.

**Important:** When adding new translation keys, always update all three locations:
**Quan trọng:** Khi thêm key dịch mới, luôn cập nhật cả ba vị trí:

1. `src/locales/en.json` and `src/locales/vi.json` (translations)
2. `src/types/i18n.ts` (TranslationKey type and validation functions)
3. `src/lib/i18nHelper.ts` (helper utilities)

This ensures type safety and prevents runtime errors.
Điều này đảm bảo type safety và ngăn chặn lỗi runtime.
