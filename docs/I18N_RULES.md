# Internationalization Rules / Quy tắc Quốc tế hóa

This document defines internationalization rules for the project.

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

---

**Note:** All future UI must comply with these rules.

**Lưu ý:** Tất cả UI trong tương lai phải tuân thủ các quy tắc này.
