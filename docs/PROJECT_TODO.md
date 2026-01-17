# Project TODO / Danh sách Công việc Dự án

## Project Overview / Tổng quan Dự án

This is a professional story-management web application for novelists to manage:
Đây là ứng dụng web quản lý câu chuyện chuyên nghiệp dành cho nhà văn để quản lý:

- Characters / Nhân vật
- Events / Sự kiện
- Locations / Địa điểm
- Factions / Phái
- Relationships / Mối quan hệ

**Key Characteristics / Đặc điểm chính:**

- All entities are time-based with versioned attributes
  - Tất cả thực thể đều dựa trên thời gian với các thuộc tính được phiên bản hóa
- Entities can have multiple roles or relationships simultaneously
  - Các thực thể có thể có nhiều vai trò hoặc mối quan hệ cùng lúc
- Desktop-first design with tablet/mobile responsive support
  - Thiết kế ưu tiên máy tính để bàn với hỗ trợ responsive cho máy tính bảng/điện thoại
- Multi-language support (English default, Vietnamese)
  - Hỗ trợ đa ngôn ngữ (Tiếng Anh mặc định, Tiếng Việt)
- Two themes: Light, Dark
  - Hai chủ đề: Sáng, Tối
- No backend - all data is mocked locally
  - Không backend - tất cả dữ liệu được mock cục bộ

---

## System Analysis / Phân tích Hệ thống

### Core Problems Solved / Các vấn đề Cốt lõi được Giải quyết

1. **Complex Entity Management / Quản lý Thực thể Phức tạp**
   - Novelists need to track numerous interconnected entities (characters, events, locations, factions, relationships)
     - Nhà văn cần theo dõi nhiều thực thể liên kết (nhân vật, sự kiện, địa điểm, phái, mối quan hệ)
   - Each entity evolves over time with changing attributes
     - Mỗi thực thể phát triển theo thời gian với các thuộc tính thay đổi
   - Entities can have multiple concurrent roles or relationships
     - Các thực thể có thể có nhiều vai trò hoặc mối quan hệ đồng thời

2. **Temporal Data Visualization / Trực quan hóa Dữ liệu Thời gian**
   - Understanding how entities change over time is critical for storytelling
     - Hiểu cách các thực thể thay đổi theo thời gian là quan trọng đối với kể chuyện
   - Need to view entity states at specific points in the narrative timeline
     - Cần xem trạng thái thực thể tại các điểm cụ thể trên dòng thời gian kể chuyện
   - Timeline must be intuitive and support navigation
     - Dòng thời gian phải trực quan và hỗ trợ điều hướng

3. **Relationship Complexity / Sự phức tạp của Mối quan hệ**
   - Characters belong to factions
     - Nhân vật thuộc về các phái
   - Events occur at locations
     - Sự kiện xảy ra tại các địa điểm
   - Relationships evolve between entities
     - Mối quan hệ phát triển giữa các thực thể
   - All relationships are time-sensitive
     - Tất cả mối quan hệ đều nhạy cảm với thời gian

### Key Technical Challenges / Các Thách thức Kỹ thuật Chính

1. **Time-Based State Management / Quản lý Trạng thái dựa trên Thời gian**
   - Each entity needs to track its state across different time periods
     - Mỗi thực thể cần theo dõi trạng thái của nó qua các khoảng thời gian khác nhau
   - UI must display the correct state based on the selected "effective time"
     - UI phải hiển thị trạng thái chính xác dựa trên "thời gian hiệu lực" đã chọn
   - State transitions must be smooth and intuitive
     - Chuyển đổi trạng thái phải mượt mà và trực quan

2. **Mock Data Architecture / Kiến trúc Dữ liệu Mock**
   - Need a robust mock data structure that simulates real-world complexity
     - Cần cấu trúc dữ liệu mock mạnh mẽ mô phỏng sự phức tạp trong thực tế
   - Data must be easily extensible for future entity types
     - Dữ liệu phải dễ dàng mở rộng cho các loại thực thể trong tương lai
   - Local state management (useState/Context) must handle complex data relationships
     - Quản lý trạng thái cục bộ (useState/Context) phải xử lý các mối quan hệ dữ liệu phức tạp

3. **Theme and i18n Integration / Tích hợp Chủ đề và i18n**
   - All components must support three themes without affecting layout
     - Tất cả thành phần phải hỗ trợ ba chủ đề mà không ảnh hưởng đến bố cục
   - Translation keys must be semantic and reusable
     - Các key dịch phải mang tính ngữ nghĩa và có thể tái sử dụng
   - Language switching must not reload the page
     - Việc chuyển đổi ngôn ngữ không được tải lại trang

4. **Component Reusability / Khả năng Tái sử dụng Thành phần**
   - Similar entity types (characters, locations, factions) share patterns
     - Các loại thực thể tương tự (nhân vật, địa điểm, phái) chia sẻ các mẫu
   - Need consistent UI patterns across different entity types
     - Cần các mẫu UI nhất quán trên các loại thực thể khác nhau
   - Components must be composable and not page-specific
     - Các thành phần phải có thể kết hợp và không cụ thể theo trang

### UX Challenges Specific to Long-Form Storytelling / Các Thách thức UX Đặc thù cho Kể chuyện Dài

1. **Cognitive Load Management / Quản lý Tải nhận thức**
   - Novelists work with hundreds of entities over long periods
     - Nhà văn làm việc với hàng trăm thực thể trong thời gian dài
   - UI must minimize visual noise and maximize clarity
     - UI phải giảm thiểu tiếng ồn thị giác và tối đa hóa sự rõ ràng
   - Progressive disclosure to avoid overwhelming users
     - Tiết lộ dần dần để tránh quá tải người dùng

2. **Context Preservation / Bảo toàn Ngữ cảnh**
   - Users navigate between related entities frequently
     - Người dùng điều hướng giữa các thực thể liên kết thường xuyên
   - Breadcrumbs and clear hierarchy are essential
     - Breadcrumbs và phân cấp rõ ràng là thiết yếu
   - Side panels preferred over modals to maintain context
     - Ưu tiên các panel bên thay vì modal để duy trì ngữ cảnh

3. **Timeline Navigation / Điều hướng Dòng thời gian**
   - Users need to understand the narrative flow
     - Người dùng cần hiểu dòng chảy kể chuyện
   - Timeline must be easily accessible and intuitive
     - Dòng thời gian phải dễ tiếp cận và trực quan
   - Users must always know the current "effective time" being viewed
     - Người dùng phải luôn biết "thời gian hiệu lực" hiện tại đang được xem

---

## Architecture Overview / Tổng quan Kiến trúc

### High-Level Frontend Architecture / Kiến trúc Frontend Cao cấp

```
src/
├── app/                    # React Router routes / Các route của React Router
├── components/
│   ├── common/            # Reusable UI components / Các thành phần UI tái sử dụng
│   ├── layout/            # Layout components (Header, Sidebar, etc.) / Các thành phần bố cục
│   └── domain/            # Domain-specific components / Các thành phần cụ thể theo domain
├── context/
│   ├── ThemeContext.tsx   # Theme management / Quản lý chủ đề
│   ├── I18nContext.tsx    # Internationalization / Quốc tế hóa
│   └── DataContext.tsx    # Mock data and state / Dữ liệu mock và trạng thái
├── hooks/
│   ├── useTheme.ts        # Theme hook / Hook chủ đề
│   ├── useI18n.ts         # i18n hook / Hook i18n
│   └── useTime.ts         # Time-based data filtering / Lọc dữ liệu dựa trên thời gian
├── lib/
│   ├── mockData.ts        # Mock data structure / Cấu trúc dữ liệu mock
│   ├── theme.ts           # Tailwind theme configuration / Cấu hình chủ đề Tailwind
│   └── i18n.ts            # Translation utilities / Tiện ích dịch
├── types/
│   ├── entities.ts        # Entity type definitions / Định nghĩa kiểu thực thể
│   └── timeline.ts        # Timeline type definitions / Định nghĩa kiểu dòng thời gian
└── locales/
    ├── en.json            # English translations / Bản dịch tiếng Anh
    └── vi.json            # Vietnamese translations / Bản dịch tiếng Việt
```

### Core Modules and Responsibilities / Các Module Cốt lõi và Trách nhiệm

1. **Theme Module / Module Chủ đề**
   - Manages Light/Dark theme switching
     - Quản lý chuyển đổi chủ đề Sáng/Tối
   - Applies theme class to `<html>` element
     - Áp dụng class chủ đề cho phần tử `<html>`
   - Persists theme preference to localStorage
     - Lưu trữ tùy chọn chủ đề vào localStorage

2. **I18n Module / Module Quốc tế hóa**
   - Manages English/Vietnamese language switching
     - Quản lý chuyển đổi ngôn ngữ Tiếng Anh/Tiếng Việt
   - Provides translation key lookup
     - Cung cấp tra cứu key dịch
   - Persists language preference to localStorage
     - Lưu trữ tùy chọn ngôn ngữ vào localStorage

3. **Data Module / Module Dữ liệu**
   - Manages mock data for all entities
     - Quản lý dữ liệu mock cho tất cả thực thể
   - Provides time-based data filtering
     - Cung cấp lọc dữ liệu dựa trên thời gian
   - Manages current "effective time" state
     - Quản lý trạng thái "thời gian hiệu lực" hiện tại

4. **Timeline Module / Module Dòng thời gian**
   - Displays timeline visualization
     - Hiển thị trực quan hóa dòng thời gian
   - Allows time navigation
     - Cho phép điều hướng thời gian
   - Shows events at selected time point
     - Hiển thị sự kiện tại điểm thời gian đã chọn

5. **Entity Modules / Các Module Thực thể** (Character, Event, Location, Faction, Relationship / Nhân vật, Sự kiện, Địa điểm, Phái, Mối quan hệ)
   - Entity list views / Các xem danh sách thực thể
   - Entity detail views / Các xem chi tiết thực thể
   - Entity creation/editing forms / Các biểu mẫu tạo/sửa thực thể
   - Entity relationship views / Các xem mối quan hệ thực thể

### Data Flow / Luồng Dữ liệu

```
User Action / Hành động Người dùng
    ↓
Component Event Handler / Xử lý Sự kiện Thành phần
    ↓
Context State Update (Theme/I18n/Data) / Cập nhật Trạng thái Context
    ↓
Re-render Affected Components / Kết xuất lại Các thành phần Bị ảnh hưởng
    ↓
Time-based Data Filtering (if applicable) / Lọc Dữ liệu dựa trên Thời gian (nếu áp dụng)
    ↓
Display Updated UI / Hiển thị UI đã Cập nhật
```

---

## Implementation Phases / Các Giai đoạn Triển khai

### Phase 0: Foundation / Giai đoạn 0: Nền tảng

**Goal / Mục tiêu:** Establish project structure and tooling / Thiết lập cấu trúc dự án và công cụ

**Scope / Phạm vi:**

- Project initialization / Khởi tạo dự án
- Build configuration / Cấu hình build
- Development environment setup / Thiết lập môi trường phát triển

**Deliverables / Sản phẩm:**

- React project with Vite / Dự án React với Vite
- TailwindCSS configured / TailwindCSS được cấu hình
- TypeScript configured / TypeScript được cấu hình
- ESLint and Prettier configured / ESLint và Prettier được cấu hình
- Git repository initialized / Kho lưu trữ Git được khởi tạo

---

### Phase 1: App Shell & Layout / Giai đoạn 1: Shell Ứng dụng & Bố cục

**Goal / Mục tiêu:** Create the application shell and core layout components / Tạo shell ứng dụng và các thành phần bố cục cốt lõi

**Scope / Phạm vi:**

- App shell structure / Cấu trúc shell ứng dụng
- Navigation components / Các thành phần điều hướng
- Layout system / Hệ thống bố cục

**Deliverables / Sản phẩm:**

- Main App component with routing / Thành phần App chính với routing
- Header component with theme/language switchers / Thành phần Header với bộ chuyển đổi chủ đề/ngôn ngữ
- Sidebar navigation / Điều hướng thanh bên
- Main content area with centered layout (max-w-6xl) / Khu vực nội dung chính với bố cục căn giữa
- Responsive layout foundation / Nền tảng bố cục responsive

---

### Phase 2: Theme & i18n / Giai đoạn 2: Chủ đề & Quốc tế hóa

**Goal / Mục tiêu:** Implement theme and internationalization systems / Triển khai hệ thống chủ đề và quốc tế hóa

**Scope / Phạm vi:**

- Theme management system / Hệ thống quản lý chủ đề
- Internationalization system / Hệ thống quốc tế hóa
- Translation files / Các tệp dịch

**Deliverables / Sản phẩm:**

- ThemeContext with Light/Dark themes / ThemeContext với các chủ đề Sáng/Tối
- I18nContext with EN/VI support / I18nContext với hỗ trợ EN/VI
- en.json and vi.json translation files / Các tệp dịch en.json và vi.json
- Theme and language switcher components / Các thành phần bộ chuyển đổi chủ đề và ngôn ngữ
- Tailwind theme configuration / Cấu hình chủ đề Tailwind

---

### Phase 2.1: I18n Type-Safe Implementation / Giai đoạn 2.1: Triển khai Type-Safe cho I18n

**Goal / Mục tiêu:** Implement type-safe translation keys to ensure only valid keys are used / Triển khai các key dịch type-safe để đảm bảo chỉ sử dụng các key hợp lệ

**Scope / Phạm vi:**

- Add missing translation keys / Thêm các key dịch bị thiếu
- Create type-safe TranslationKey type / Tạo kiểu TranslationKey type-safe
- Update i18n system to use JSON imports / Cập nhật hệ thống i18n để sử dụng import JSON
- Create helper utilities for translation key management / Tạo tiện ích trợ giúp cho quản lý translation keys

**Deliverables / Sản phẩm:**

- Complete translation keys in en.json and vi.json / Các key dịch đầy đủ trong en.json và vi.json
- Type-safe TranslationKey type in src/types/i18n.ts / Kiểu TranslationKey type-safe trong src/types/i18n.ts
- Updated lib/i18n.ts to import from JSON files / lib/i18n.ts đã cập nhật để import từ file JSON
- Helper utilities in src/lib/i18nHelper.ts / Các tiện ích trợ giúp trong src/lib/i18nHelper.ts
- Updated I18N_RULES.md with type-safe guidelines / I18N_RULES.md đã cập nhật với các hướng dẫn type-safe

---

### Phase 3: Domain Data Structure / Giai đoạn 3: Cấu trúc Dữ liệu Domain

**Goal / Mục tiêu:** Define and implement mock data structure for all entities / Định nghĩa và triển khai cấu trúc dữ liệu mock cho tất cả thực thể

**Scope / Phạm vi:**

- Entity type definitions / Định nghĩa kiểu thực thể
- Mock data generation / Tạo dữ liệu mock
- Time-based data structure / Cấu trúc dữ liệu dựa trên thời gian

**Deliverables / Sản phẩm:**

- TypeScript types for all entities / Các kiểu TypeScript cho tất cả thực thể
- Mock data with time-based attributes / Dữ liệu mock với các thuộc tính dựa trên thời gian
- DataContext for state management / DataContext để quản lý trạng thái
- Time-based data filtering utilities / Các tiện ích lọc dữ liệu dựa trên thời gian

---

### Phase 4: Character Module / Giai đoạn 4: Module Nhân vật

**Goal / Mục tiêu:** Implement character management features / Triển khai các tính năng quản lý nhân vật

**Scope / Phạm vi:**

- Character list view / Xem danh sách nhân vật
- Character detail view / Xem chi tiết nhân vật
- Character creation/editing / Tạo/sửa nhân vật

**Deliverables / Sản phẩm:**

- Character list page with table / Trang danh sách nhân vật với bảng
- Character detail page / Trang chi tiết nhân vật
- Character form component / Thành phần biểu mẫu nhân vật
- Character relationships view / Xem mối quan hệ nhân vật

---

### Phase 5: Event Module / Giai đoạn 5: Module Sự kiện

**Goal / Mục tiêu:** Implement event management features / Triển khai các tính năng quản lý sự kiện

**Scope / Phạm vi:**

- Event list view / Xem danh sách sự kiện
- Event detail view / Xem chi tiết sự kiện
- Event creation/editing / Tạo/sửa sự kiện

**Deliverables / Sản phẩm:**

- Event list page with table / Trang danh sách sự kiện với bảng
- Event detail page / Trang chi tiết sự kiện
- Event form component / Thành phần biểu mẫu sự kiện
- Event timeline integration / Tích hợp dòng thời gian sự kiện

---

### Phase 6: Location Module / Giai đoạn 6: Module Địa điểm

**Goal / Mục tiêu:** Implement location management features / Triển khai các tính năng quản lý địa điểm

**Scope / Phạm vi:**

- Location list view / Xem danh sách địa điểm
- Location detail view / Xem chi tiết địa điểm
- Location creation/editing / Tạo/sửa địa điểm

**Deliverables / Sản phẩm:**

- Location list page with table / Trang danh sách địa điểm với bảng
- Location detail page / Trang chi tiết địa điểm
- Location form component / Thành phần biểu mẫu địa điểm

---

### Phase 7: Faction Module / Giai đoạn 7: Module Phái

**Goal / Mục tiêu:** Implement faction management features / Triển khai các tính năng quản lý phái

**Scope / Phạm vi:**

- Faction list view / Xem danh sách phái
- Faction detail view / Xem chi tiết phái
- Faction creation/editing / Tạo/sửa phái

**Deliverables / Sản phẩm:**

- Faction list page with table / Trang danh sách phái với bảng
- Faction detail page / Trang chi tiết phái
- Faction form component / Thành phần biểu mẫu phái
- Faction members view / Xem thành viên phái

---

### Phase 8: Relationship Module / Giai đoạn 8: Module Mối quan hệ

**Goal / Mục tiêu:** Implement relationship management features / Triển khai các tính năng quản lý mối quan hệ

**Scope / Phạm vi:**

- Relationship visualization / Trực quan hóa mối quan hệ
- Relationship creation/editing / Tạo/sửa mối quan hệ

**Deliverables / Sản phẩm:**

- Relationship list page / Trang danh sách mối quan hệ
- Relationship detail view / Xem chi tiết mối quan hệ
- Relationship form component / Thành phần biểu mẫu mối quan hệ

---

### Phase 9: Timeline Logic / Giai đoạn 9: Logic Dòng thời gian

**Goal / Mục tiêu:** Implement timeline visualization and navigation / Triển khai trực quan hóa và điều hướng dòng thời gian

**Scope / Phạm vi:**

- Timeline component / Thành phần dòng thời gian
- Time navigation / Điều hướng thời gian
- Time-based data display / Hiển thị dữ liệu dựa trên thời gian

**Deliverables / Sản phẩm:**

- Timeline visualization component / Thành phần trực quan hóa dòng thời gian
- Time selector component / Thành phần bộ chọn thời gian
- Time-based data filtering integration / Tích hợp lọc dữ liệu dựa trên thời gian
- Timeline event markers / Các đánh dấu sự kiện dòng thời gian

---

### Phase 10: UX Polish / Giai đoạn 10: Hoàn thiện UX

**Goal / Mục tiêu:** Refine user experience and interactions / Hoàn thiện trải nghiệm người dùng và tương tác

**Scope / Phạm vi:**

- Micro-interactions / Tương tác vi mô
- Accessibility improvements / Cải thiện khả năng truy cập
- Performance optimization / Tối ưu hóa hiệu suất

**Deliverables / Sản phẩm:**

- Hover and focus states / Trạng thái hover và focus
- Loading states / Trạng thái tải
- Error states / Trạng thái lỗi
- Empty states / Trạng thái trống
- Accessibility audit and fixes / Kiểm tra và sửa lỗi khả năng truy cập

---

## Task Breakdown / Phân tích Công việc

### Phase 0: Foundation / Giai đoạn 0: Nền tảng

- [x] Initialize React project with Vite / Khởi tạo dự án React với Vite
- [x] Install and configure TailwindCSS / Cài đặt và cấu hình TailwindCSS
- [x] Install and configure TypeScript / Cài đặt và cấu hình TypeScript
- [x] Install and configure ESLint / Cài đặt và cấu hình ESLint
- [x] Install and configure Prettier / Cài đặt và cấu hình Prettier
- [x] Create project folder structure / Tạo cấu trúc thư mục dự án
- [x] Initialize Git repository / Khởi tạo kho lưu trữ Git
- [x] Create .gitignore file / Tạo tệp .gitignore
- [x] Create package.json scripts / Tạo các script package.json
- [x] Verify development environment / Xác minh môi trường phát triển

**Dependencies / Phụ thuộc:** None / Không
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa
**Status / Trạng thái:** ✅ COMPLETED / ĐÃ HOÀN THÀNH (2026-01-16)

---

### Phase 1: App Shell & Layout / Giai đoạn 1: Shell Ứng dụng & Bố cục

- [x] Create main App component / Tạo thành phần App chính
- [x] Set up React Router / Thiết lập React Router
- [x] Create base layout component / Tạo thành phần bố cục cơ bản
- [x] Create Header component / Tạo thành phần Header
- [x] Create Sidebar navigation component / Tạo thành phần điều hướng Sidebar
- [x] Create Main content wrapper / Tạo wrapper nội dung chính
- [x] Implement centered layout (max-w-6xl, mx-auto, px-6) / Triển khai bố cục căn giữa
- [x] Create 404 page / Tạo trang 404
- [x] Set up routing for all pages / Thiết lập routing cho tất cả các trang
- [x] Test responsive layout / Kiểm tra bố cục responsive

**Dependencies / Phụ thuộc:** Phase 0 / Giai đoạn 0
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa
**Status / Trạng thái:** ✅ COMPLETED / ĐÃ HOÀN THÀNH (2026-01-16)

---

### Phase 2: Theme & i18n / Giai đoạn 2: Chủ đề & Quốc tế hóa

- [x] Create ThemeContext / Tạo ThemeContext
- [x] Create I18nContext / Tạo I18nContext
- [x] Configure Tailwind theme colors / Cấu hình màu chủ đề Tailwind
- [x] Create theme switcher component / Tạo thành phần bộ chuyển đổi chủ đề
- [x] Create language switcher component / Tạo thành phần bộ chuyển đổi ngôn ngữ
- [x] Create en.json translation file / Tạo tệp dịch en.json
- [x] Create vi.json translation file / Tạo tệp dịch vi.json
- [x] Implement theme persistence (localStorage) / Triển khai lưu trữ chủ đề (localStorage)
- [x] Implement language persistence (localStorage) / Triển khai lưu trữ ngôn ngữ (localStorage)
- [x] Test theme switching / Kiểm tra chuyển đổi chủ đề
- [x] Test language switching / Kiểm tra chuyển đổi ngôn ngữ

**Dependencies / Phụ thuộc:** Phase 1 / Giai đoạn 1
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

### Phase 3: Domain Data Structure / Giai đoạn 3: Cấu trúc Dữ liệu Domain

- [x] Define TypeScript types for Character entity / Định nghĩa kiểu TypeScript cho thực thể Nhân vật
- [x] Define TypeScript types for Event entity / Định nghĩa kiểu TypeScript cho thực thể Sự kiện
- [x] Define TypeScript types for Location entity / Định nghĩa kiểu TypeScript cho thực thể Địa điểm
- [x] Define TypeScript types for Faction entity / Định nghĩa kiểu TypeScript cho thực thể Phái
- [x] Define TypeScript types for Relationship entity / Định nghĩa kiểu TypeScript cho thực thể Mối quan hệ
- [x] Define TypeScript types for Timeline / Định nghĩa kiểu TypeScript cho Dòng thời gian
- [x] Create mock data for Characters / Tạo dữ liệu mock cho Nhân vật
- [x] Create mock data for Events / Tạo dữ liệu mock cho Sự kiện
- [x] Create mock data for Locations / Tạo dữ liệu mock cho Địa điểm
- [x] Create mock data for Factions / Tạo dữ liệu mock cho Phái
- [x] Create mock data for Relationships / Tạo dữ liệu mock cho Mối quan hệ
- [x] Create DataContext / Tạo DataContext
- [x] Implement time-based data filtering utility / Triển khai tiện ích lọc dữ liệu dựa trên thời gian
- [x] Implement current time state management / Triển khai quản lý trạng thái thời gian hiện tại
- [x] Test data structure and filtering / Kiểm tra cấu trúc dữ liệu và lọc

**Dependencies / Phụ thuộc:** Phase 2 / Giai đoạn 2
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa
**Status / Trạng thái:** ✅ COMPLETED / ĐÃ HOÀN THÀNH (2026-01-16)

---

### Phase 4: Character Module / Giai đoạn 4: Module Nhân vật

- [x] Create CharacterListPage component / Tạo thành phần CharacterListPage
- [x] Create CharacterTable component / Tạo thành phần CharacterTable
- [x] Create CharacterDetailPage component / Tạo thành phần CharacterDetailPage
- [x] Create CharacterForm component / Tạo thành phần CharacterForm
- [x] Create CharacterCard component / Tạo thành phần CharacterCard
- [x] Create CharacterRelationships component / Tạo thành phần CharacterRelationships
- [x] Add routing for character pages / Thêm routing cho các trang nhân vật
- [x] Implement character list view / Triển khai xem danh sách nhân vật
- [x] Implement character detail view / Triển khai xem chi tiết nhân vật
- [x] Implement character creation form / Triển khai biểu mẫu tạo nhân vật
- [x] Implement character editing form / Triển khai biểu mẫu sửa nhân vật
- [x] Test character module / Kiểm tra module nhân vật

**Dependencies / Phụ thuộc:** Phase 3 / Giai đoạn 3
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa
**Status / Trạng thái:** ✅ COMPLETED / ĐÃ HOÀN THÀNH (2026-01-17)

---

### Phase 5: Event Module / Giai đoạn 5: Module Sự kiện

- [x] Create EventListPage component / Tạo thành phần EventListPage
- [x] Create EventTable component / Tạo thành phần EventTable
- [x] Create EventDetailPage component / Tạo thành phần EventDetailPage
- [x] Create EventForm component / Tạo thành phần EventForm
- [x] Create EventCard component / Tạo thành phần EventCard
- [x] Add routing for event pages / Thêm routing cho các trang sự kiện
- [x] Implement event list view / Triển khai xem danh sách sự kiện
- [x] Implement event detail view / Triển khai xem chi tiết sự kiện
- [x] Implement event creation form / Triển khai biểu mẫu tạo sự kiện
- [x] Implement event editing form / Triển khai biểu mẫu sửa sự kiện
- [x] Test event module / Kiểm tra module sự kiện

**Dependencies / Phụ thuộc:** Phase 3 / Giai đoạn 3
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa
**Status / Trạng thái:** ✅ COMPLETED / ĐÃ HOÀN THÀNH (2026-01-17)

---

### Phase 6: Location Module / Giai đoạn 6: Module Địa điểm

- [ ] Create LocationListPage component / Tạo thành phần LocationListPage
- [ ] Create LocationTable component / Tạo thành phần LocationTable
- [ ] Create LocationDetailPage component / Tạo thành phần LocationDetailPage
- [ ] Create LocationForm component / Tạo thành phần LocationForm
- [ ] Create LocationCard component / Tạo thành phần LocationCard
- [ ] Add routing for location pages / Thêm routing cho các trang địa điểm
- [ ] Implement location list view / Triển khai xem danh sách địa điểm
- [ ] Implement location detail view / Triển khai xem chi tiết địa điểm
- [ ] Implement location creation form / Triển khai biểu mẫu tạo địa điểm
- [ ] Implement location editing form / Triển khai biểu mẫu sửa địa điểm
- [ ] Test location module / Kiểm tra module địa điểm

**Dependencies / Phụ thuộc:** Phase 3 / Giai đoạn 3
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

### Phase 7: Faction Module / Giai đoạn 7: Module Phái

- [ ] Create FactionListPage component / Tạo thành phần FactionListPage
- [ ] Create FactionTable component / Tạo thành phần FactionTable
- [ ] Create FactionDetailPage component / Tạo thành phần FactionDetailPage
- [ ] Create FactionForm component / Tạo thành phần FactionForm
- [ ] Create FactionCard component / Tạo thành phần FactionCard
- [ ] Create FactionMembers component / Tạo thành phần FactionMembers
- [ ] Add routing for faction pages / Thêm routing cho các trang phái
- [ ] Implement faction list view / Triển khai xem danh sách phái
- [ ] Implement faction detail view / Triển khai xem chi tiết phái
- [ ] Implement faction creation form / Triển khai biểu mẫu tạo phái
- [ ] Implement faction editing form / Triển khai biểu mẫu sửa phái
- [ ] Test faction module / Kiểm tra module phái

**Dependencies / Phụ thuộc:** Phase 3 / Giai đoạn 3
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

### Phase 8: Relationship Module / Giai đoạn 8: Module Mối quan hệ

- [ ] Create RelationshipListPage component / Tạo thành phần RelationshipListPage
- [ ] Create RelationshipTable component / Tạo thành phần RelationshipTable
- [ ] Create RelationshipDetailPage component / Tạo thành phần RelationshipDetailPage
- [ ] Create RelationshipForm component / Tạo thành phần RelationshipForm
- [ ] Create RelationshipCard component / Tạo thành phần RelationshipCard
- [ ] Add routing for relationship pages / Thêm routing cho các trang mối quan hệ
- [ ] Implement relationship list view / Triển khai xem danh sách mối quan hệ
- [ ] Implement relationship detail view / Triển khai xem chi tiết mối quan hệ
- [ ] Implement relationship creation form / Triển khai biểu mẫu tạo mối quan hệ
- [ ] Implement relationship editing form / Triển khai biểu mẫu sửa mối quan hệ
- [ ] Test relationship module / Kiểm tra module mối quan hệ

**Dependencies / Phụ thuộc:** Phase 3 / Giai đoạn 3
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

### Phase 9: Timeline Logic / Giai đoạn 9: Logic Dòng thời gian

- [ ] Create Timeline component / Tạo thành phần Timeline
- [ ] Create TimeSelector component / Tạo thành phần TimeSelector
- [ ] Create TimelineEventMarker component / Tạo thành phần TimelineEventMarker
- [ ] Implement timeline visualization / Triển khai trực quan hóa dòng thời gian
- [ ] Implement time navigation / Triển khai điều hướng thời gian
- [ ] Integrate time-based filtering with DataContext / Tích hợp lọc dựa trên thời gian với DataContext
- [ ] Display current effective time in UI / Hiển thị thời gian hiệu lực hiện tại trong UI
- [ ] Highlight events at selected time / Làm nổi bật sự kiện tại thời gian đã chọn
- [ ] Test timeline navigation / Kiểm tra điều hướng dòng thời gian
- [ ] Test time-based data display / Kiểm tra hiển thị dữ liệu dựa trên thời gian

**Dependencies / Phụ thuộc:** Phase 3, Phase 4, Phase 5 / Giai đoạn 3, Giai đoạn 4, Giai đoạn 5
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

### Phase 10: UX Polish / Giai đoạn 10: Hoàn thiện UX

- [ ] Add hover states to interactive elements / Thêm trạng thái hover cho các thành phần tương tác
- [ ] Add focus states for accessibility / Thêm trạng thái focus cho khả năng truy cập
- [ ] Create loading state components / Tạo các thành phần trạng thái tải
- [ ] Create error state components / Tạo các thành phần trạng thái lỗi
- [ ] Create empty state components / Tạo các thành phần trạng thái trống
- [ ] Add transitions for smooth interactions / Thêm chuyển đổi cho các tương tác mượt mà
- [ ] Optimize component rendering / Tối ưu hóa kết xuất thành phần
- [ ] Run accessibility audit / Chạy kiểm tra khả năng truy cập
- [ ] Fix accessibility issues / Sửa các vấn đề khả năng truy cập
- [ ] Test all user flows / Kiểm tra tất cả luồng người dùng

**Dependencies / Phụ thuộc:** All previous phases / Tất cả các giai đoạn trước
**AI-Safe / An toàn cho AI:** All tasks are safe for AI automation / Tất cả công việc đều an toàn để AI tự động hóa

---

## AI Handoff Strategy / Chiến lược Chuyển giao AI

### How Future AI Sessions Should Read and Use PROJECT_TODO.md / Các phiên AI trong tương lai nên đọc và sử dụng PROJECT_TODO.md như thế nào

1. **Always Start with Rule Files / Luôn bắt đầu với các tệp quy tắc**
   - Read AI_DESIGN_RULES.md first / Đọc AI_DESIGN_RULES.md trước tiên
   - Read DESIGN_RULES.md, THEME_RULES.md, I18N_RULES.md / Đọc DESIGN_RULES.md, THEME_RULES.md, I18N_RULES.md
   - Rule priority: AI_DESIGN_RULES > AI_FRONTEND_RULES > AI_DOMAIN_RULES / Ưu tiên quy tắc: AI_DESIGN_RULES > AI_FRONTEND_RULES > AI_DOMAIN_RULES

2. **Read PROJECT_TODO.md Before Starting / Đọc PROJECT_TODO.md trước khi bắt đầu**
   - Understand the overall project structure / Hiểu cấu trúc tổng thể của dự án
   - Identify the current phase and next tasks / Xác định giai đoạn hiện tại và các công việc tiếp theo
   - Review dependencies before starting work / Xem xét các phụ thuộc trước khi bắt đầu công việc

3. **Follow Phase-Based Approach / Theo dõi cách tiếp cận dựa trên giai đoạn**
   - Complete all tasks in a phase before moving to the next / Hoàn thành tất cả công việc trong một giai đoạn trước khi chuyển sang giai đoạn tiếp theo
   - Respect task dependencies / Tôn trọng các phụ thuộc công việc
   - Mark tasks as complete only when fully implemented / Đánh dấu công việc là hoàn thành chỉ khi đã triển khai đầy đủ

### How to Update Task Status Safely / Cách cập nhật trạng thái công việc một cách an toàn

1. **Read Current Status / Đọc trạng thái hiện tại**
   - Check the current status of each task (TODO / IN PROGRESS / DONE) / Kiểm tra trạng thái hiện tại của mỗi công việc
   - Understand which tasks are blocked by dependencies / Hiểu những công việc nào bị chặn bởi các phụ thuộc

2. **Update One Task at a Time / Cập nhật một công việc tại một thời điểm**
   - Only update the task you are currently working on / Chỉ cập nhật công việc bạn đang thực hiện
   - Change status from TODO to IN PROGRESS when starting / Thay đổi trạng thái từ TODO sang IN PROGRESS khi bắt đầu
   - Change status from IN PROGRESS to DONE when complete / Thay đổi trạng thái từ IN PROGRESS sang DONE khi hoàn thành

3. **Verify Dependencies / Xác minh các phụ thuộc**
   - Before starting a task, ensure all dependencies are marked DONE / Trước khi bắt đầu một công việc, đảm bảo tất cả các phụ thuộc được đánh dấu DONE
   - If dependencies are not complete, complete them first / Nếu các phụ thuộc chưa hoàn thành, hãy hoàn thành chúng trước

4. **Update Status Format / Cập nhật định dạng trạng thái**
   - Use exact format: `[ ]` for TODO, `[-]` for IN PROGRESS, `[x]` for DONE / Sử dụng định dạng chính xác: `[ ]` cho TODO, `[-]` cho IN PROGRESS, `[x]` cho DONE
   - Keep task descriptions unchanged / Giữ nguyên mô tả công việc
   - Only update the checkbox status / Chỉ cập nhật trạng thái checkbox

### How to Avoid Breaking Previous Work / Cách tránh làm hỏng công việc trước đó

1. **Read Existing Code / Đọc code hiện có**
   - Before modifying any file, read the current implementation / Trước khi sửa đổi bất kỳ tệp nào, hãy đọc triển khai hiện tại
   - Understand the existing patterns and conventions / Hiểu các mẫu và quy ước hiện có
   - Follow the established code style / Tuân theo phong cách code đã thiết lập

2. **Respect Design Rules / Tôn trọng các quy tắc thiết kế**
   - Always follow the design rules from AI_DESIGN_RULES.md / Luôn tuân theo các quy tắc thiết kế từ AI_DESIGN_RULES.md
   - Do not invent new UI styles outside the defined rules / Không sáng tạo phong cách UI mới ngoài các quy tắc đã định nghĩa
   - Use the approved color palette, typography, and spacing / Sử dụng bảng màu, typography và khoảng cách đã được phê duyệt

3. **Test After Changes / Kiểm tra sau khi thay đổi**
   - Verify that changes do not break existing functionality / Xác minh rằng các thay đổi không làm hỏng chức năng hiện có
   - Ensure theme switching still works / Đảm bảo chuyển đổi chủ đề vẫn hoạt động
   - Ensure language switching still works / Đảm bảo chuyển đổi ngôn ngữ vẫn hoạt động
   - Ensure time-based filtering still works / Đảm bảo lọc dựa trên thời gian vẫn hoạt động

4. **Incremental Updates / Các cập nhật tăng dần**
   - Make small, focused changes / Thực hiện các thay đổi nhỏ, tập trung
   - Test each change before moving to the next / Kiểm tra mỗi thay đổi trước khi chuyển sang thay đổi tiếp theo
   - Do not make large, sweeping changes without testing / Không thực hiện các thay đổi lớn, bao quát mà không kiểm tra

5. **Communication / Giao tiếp**
   - If you encounter conflicts or ambiguities, document them / Nếu bạn gặp xung đột hoặc mơ hồ, hãy ghi lại chúng
   - If design rules conflict, explain and stop / Nếu các quy tắc thiết kế xung đột, hãy giải thích và dừng lại
   - If a task is unclear, ask for clarification / Nếu một công việc không rõ ràng, hãy yêu cầu làm rõ

---

## Status Legend / Chú thích Trạng thái

- `[ ]` TODO - Task not started / Công việc chưa bắt đầu
- `[-]` IN PROGRESS - Task currently being worked on / Công việc đang được thực hiện
- `[x]` DONE - Task completed / Công việc đã hoàn thành

---

## Current Phase / Giai đoạn Hiện tại

Phase 1: App Shell & Layout - COMPLETED / Phase 2: Theme & i18n - COMPLETED / Phase 3: Domain Data Structure - COMPLETED / Phase 4: Character Module - COMPLETED / Phase 5: Event Module - COMPLETED / Giai đoạn 1: Shell Ứng dụng & Bố cục - ĐÃ HOÀN THÀNH / Giai đoạn 2: Chủ đề & Quốc tế hóa - ĐÃ HOÀN THÀNH / Giai đoạn 3: Cấu trúc Dữ liệu Domain - ĐÃ HOÀN THÀNH / Giai đoạn 4: Module Nhân vật - ĐÃ HOÀN THÀNH / Giai đoạn 5: Module Sự kiện - ĐÃ HOÀN THÀNH / Giai đoạn 6: Module Địa điểm - Sẵn sàng bắt đầu

---

### Phase 1.6: Color Theme Refactor & Component Extraction / Giai đoạn 1.6: Tái cấu hình Màu & Tách Component

**Goal / Mục tiêu:** Apply fresh color palette and extract reusable components / Áp dụng bảng màu mới và tách các thành phần tái sử dụng

**Scope / Phạm vi:**

- New color palette implementation / Triển khai bảng màu mới
- UI component creation / Tạo thành phần UI
- Page component refactoring / Tái cấu hình các thành phần trang

**Deliverables / Sản phẩm:**

- New Emerald/Teal/Amber color palette for light mode / Bảng màu Emerald/Teal/Amber cho light mode
- Dark mode unchanged (Blue-500) / Dark mode giữ nguyên (Blue-500)
- Reusable UI components / Các thành phần UI tái sử dụng
- Refactored pages using new components / Các trang đã tái cấu hình sử dụng component mới

---

## Last Updated / Cập nhật lần cuối

2026-01-17
