# Design Rules / Quy tắc Thiết kế

This document defines the mandatory design system and UI rules for the project. All future UI and frontend code MUST strictly follow these rules.

Tài liệu này định nghĩa hệ thống thiết kế và quy tắc UI bắt buộc cho dự án. Tất cả UI và code frontend trong tương lai PHẢI tuân thủ nghiêm ngặt các quy tắc này.

---

## 1. Design Philosophy / Triết lý Thiết kế

- The app is a professional internal tool for writers
  - Ứng dụng là công cụ nội bộ chuyên nghiệp dành cho nhà văn
- Prioritize clarity, structure, and readability
  - Ưu tiên sự rõ ràng, cấu trúc và khả năng đọc
- Avoid visual noise and decorative elements
  - Tránh tiếng ồn thị giác và các yếu tố trang trí

---

## 2. Visual Style / Phong cách Thị giác

- Minimal, neutral, content-first
  - Tối giản, trung tính, nội dung là ưu tiên
- No gradients, no flashy effects
  - Không gradient, không hiệu ứng lòe loẹt
- Use subtle borders instead of heavy shadows
  - Sử dụng đường viền tinh tế thay vì bóng đậm

---

## 3. Layout Rules / Quy tắc Bố cục

- Use centered layout with max-w-6xl
  - Sử dụng bố cục căn giữa với max-w-6xl
- Use mx-auto px-6 for main content
  - Sử dụng mx-auto px-6 cho nội dung chính
- Avoid full-width layouts except navigation
  - Tránh bố cục full-width trừ điều hướng

---

## 4. Spacing Rules / Quy tắc Khoảng cách

- Use Tailwind 8px spacing scale only
  - Chỉ sử dụng thang khoảng cách 8px của Tailwind
- Allowed gaps: gap-2, gap-4, gap-6, gap-8
  - Khoảng cách cho phép: gap-2, gap-4, gap-6, gap-8
- Larger spacing between sections than items
  - Khoảng cách lớn hơn giữa các phần so với các mục

---

## 5. Typography Rules / Quy tắc Typography

Only 3 font sizes allowed / Chỉ cho phép 3 kích thước font:

- Page title: text-2xl font-semibold
  - Tiêu đề trang: text-2xl font-semibold
- Section title: text-lg font-medium
  - Tiêu đề phần: text-lg font-medium
- Body text: text-sm text-gray-700
  - Nội dung: text-sm text-gray-700

No arbitrary font sizes / Không sử dụng kích thước font tùy ý.

---

## 6. Color Rules (Light Mode) / Quy tắc Màu sắc (Chế độ Sáng)

- Text: gray-900, gray-700, gray-500
  - Văn bản: gray-900, gray-700, gray-500
- Border: gray-200
  - Viền: gray-200
- Background: white, gray-50
  - Nền: white, gray-50
- Primary action: blue-600
  - Hành động chính: blue-600
- No additional accent colors
  - Không màu điểm nhấn bổ sung

---

## 7. Component Rules / Quy tắc Thành phần

- Cards: bg-white border border-gray-200 rounded-lg p-6
  - Thẻ: bg-white border border-gray-200 rounded-lg p-6
- Tables are used for lists
  - Bảng được sử dụng cho danh sách
- Forms are vertical with labels above inputs
  - Form theo chiều dọc với nhãn ở trên input
- Buttons:
  - Nút:
  - Primary: blue
    - Chính: blue
  - Secondary: gray outline
    - Phụ: gray outline
- No extra button styles
  - Không style nút bổ sung

---

## 8. Interaction Rules / Quy tắc Tương tác

- Minimal interactions
  - Tương tác tối giản
- No unnecessary animations
  - Không animation không cần thiết
- Hover and focus only when helpful
  - Hover và focus chỉ khi hữu ích

---

## 9. Enforcement / Thực thi

- Any UI that violates these rules must be refactored
  - Bất kỳ UI nào vi phạm các quy tắc này phải được refactor
- These rules are mandatory for all future work
  - Các quy tắc này là bắt buộc cho tất cả công việc trong tương lai

---

**These rules are permanent unless explicitly updated.**

**Các quy tắc này là vĩnh viễn trừ khi được cập nhật rõ ràng.**
