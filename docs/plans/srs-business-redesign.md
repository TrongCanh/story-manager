> **⚠️ ARCHIVE / HISTORY FILE - TÀI LIỆU LỊCH SỬ**
>
> **English:** This file has been merged into `business-redesign-plan.md`. It is preserved for reference purposes only.
>
> **Tiếng Việt:** File này đã được hợp nhất vào `business-redesign-plan.md`. File được giữ lại để tham khảo.
>
> **📌 IMPORTANT / QUAN TRỌNG:**
>
> - **DO NOT** continue work based on this file
> - **KHÔNG** tiếp tục thực hiện các công việc liệt kê trong file này
> - For current and future plans, please refer to: **[`business-redesign-plan.md`](story-manager/docs/plans/business-redesign-plan.md)**
> - Để xem các kế hoạch hiện tại và tương lai, vui lòng tham khảo: **[`business-redesign-plan.md`](story-manager/docs/plans/business-redesign-plan.md)**
>
> **Merged into / Hợp nhất vào:** `business-redesign-plan.md`
> **Last Archived / Lưu trữ lần cuối:** 2026-01-18
>
> ---

# Kế Hoạch Tái Cấu Trúc Nghiệp Vụ Theo SRS.md (ARCHIVED / ĐÃ LƯU TRỮ)

# Business Redesign Plan According to SRS.md (ARCHIVED / ĐÃ LƯU TRỮ)

## Tổng quan / Overview

**Mục tiêu / Objective:**
Tái cấu trúc nghiệp vụ của ứng dụng Story Manager để đáp ứng đầy đủ các yêu cầu trong SRS.md, trong khi giữ nguyên giao diện UI, TypeScript, icon, và màu sắc hiện có.

Restructure the business logic of Story Manager application to fully meet SRS.md requirements while preserving existing UI, TypeScript, icons, and color scheme.

---

## Phân Tích Sự Khác Biệt / Gap Analysis

### 1. Thiếu Novel Management / Missing Novel Management

**SRS yêu cầu / SRS requires:**

- Quản lý Novel với ID, tên, mô tả, ảnh bìa, owner, trạng thái (Public/Private)
- Chia sẻ với Viewers
- Xem danh sách novel của mình và novel public

**Thiết kế cũ / Old design:**

- Không có entity Novel
- Không có quản lý chia sẻ

### 2. Character Versioning / Phiên bản Nhân vật

**SRS yêu cầu / SRS requires:**

- Character có nhiều versions với valid_from, valid_to
- Mỗi version có: ngoại hình, tính cách, trạng thái, ghi chú
- Tags cho Character (dùng chung cho novel)
- Upload avatar

**Thiết kế cũ / Old design:**

- Có attributes array nhưng cấu trúc khác
- Không có tags
- Không có upload avatar

### 3. Relationship Periods / Mốc Quan Hệ

**SRS yêu cầu / SRS requires:**

- 2 người có thể có nhiều mối quan hệ đồng thời tại 1 thời điểm
- Quan hệ thay đổi theo thời gian với periods
- Mỗi period: loại quan hệ, valid_from, valid_to, mô tả

**Thiết kế cũ / Old design:**

- Relationship có details array nhưng không hỗ trợ nhiều quan hệ đồng thời
- Cấu trúc details khác với SRS

### 4. Event Entity Links / Liên Kết Sự Kiện

**SRS yêu cầu / SRS requires:**

- Event có nhiều characters tham gia, mỗi character có vai trò và mô tả
- Event có nhiều locations
- Event có nhiều factions tham gia
- Event có tags

**Thiết kế cũ / Old design:**

- Event có participants (character IDs) nhưng không có vai trò/mô tả
- Chỉ có 1 locationId
- Không có liên kết với factions
- Không có tags

### 5. Location Versioning / Phiên bản Địa Điểm

**SRS yêu cầu / SRS requires:**

- Location có versions với valid_from, valid_to
- Mỗi version có: mô tả, đặc điểm
- Tags cho Location

**Thiết kế cũ / Old design:**

- Có attributes array nhưng cấu trúc khác
- Không có tags

### 6. Faction Membership & Roles / Thành Viên & Vai Trò Thế Lực

**SRS yêu cầu / SRS requires:**

- 1 nhân vật có thể tham gia nhiều thế lực cùng lúc
- 1 nhân vật có thể tham gia và rời đi nhiều lần
- Membership: joined_date, left_date, ghi chú
- Vai trò được quản lý qua Tags với versioning
- Tags cho Faction

**Thiết kế cũ / Old design:**

- Members nằm trong attributes array
- Không có membership riêng biệt
- Không có role versioning

### 7. Tag System / Hệ Thống Tags

**SRS yêu cầu / SRS requires:**

- Tags dùng chung cho toàn bộ novel
- 1 tag có thể gắn cho: Character, Event, Location, Faction, Role trong Faction
- Tag có: ID, tên, màu sắc, thuộc novel nào

**Thiết kế cũ / Old design:**

- Không có hệ thống Tags

### 8. Time-Based Queries / Truy Vấn Dựa Trên Thời Gian

**SRS yêu cầu / SRS requires:**

- Tra cứu nhân vật tại thời điểm
- Lịch sử quan hệ giữa 2 người
- Hành trình nhân vật (Character Journey)
- So sánh nhân vật giữa 2 thời điểm
- Timeline tổng hợp

**Thiết kế cũ / Old design:**

- Không có các tính năng tra cứu phức tạp

### 9. Visualization / Trực Quan Hóa

**SRS yêu cầu / SRS requires:**

- Timeline View (interactive, zoom, filter)
- Relationship Graph (nodes, edges, time slider)
- Query Tool UI

**Thiết kế cũ / Old design:**

- Không có Visualization

### 10. Upload & Media / Tải Lên & Media

**SRS yêu cầu / SRS requires:**

- Upload avatar cho Character
- Upload cover image cho Novel

**Thiết kế cũ / Old design:**

- Không có upload ảnh

### 11. Authentication / Xác Thực

**SRS yêu cầu / SRS requires:**

- Đăng ký/Đăng nhập Email/Password
- Đăng nhập Google OAuth
- JWT token-based
- Phân quyền: Owner, Viewer, Public

**Thiết kế cũ / Old design:**

- Không có Authentication

---

## Kế Hoạch Triển Khai / Implementation Plan

### Giai Đoạn 1: Cấu Trúc Dữ Liệu Mới / Phase 1: New Data Structure

**Mục tiêu / Objective:**
Định nghĩa lại các types theo SRS.md, giữ nguyên giao diện UI hiện có.

Redefine types according to SRS.md while preserving existing UI.

#### 1.1 Tạo Novel Types / Create Novel Types

- [ ] Tạo `src/types/novel.ts`
  - `Novel`: ID, tên, mô tả, coverImage, ownerId, status (public/private), createdAt, updatedAt
  - `NovelStatus`: 'public' | 'private'
  - `NovelSharing`: novelId, userId, role ('owner' | 'viewer')

- [ ] Cập nhật `src/types/entities.ts`
  - Thêm Novel vào Entity union type
  - Thêm EntityType.NOVEL

#### 1.2 Cập nhật Character Types theo SRS / Update Character Types per SRS

- [ ] Cập nhật `src/types/character.ts`
  - Thêm `novelId: string` vào Character
  - Thêm `avatar: string | null` vào Character
  - Thêm `tags: string[]` vào Character
  - Cập nhật `CharacterAttribute`:
    - `appearance: string` (ngoại hình)
    - `personality: string` (tính cách)
    - `status: string` (trạng thái: "Sống", "Chết", "Mất tích"...)
    - `notes: string`
    - Xóa các fields không cần thiết theo SRS

#### 1.3 Cập nhật Relationship Types theo SRS / Update Relationship Types per SRS

- [ ] Cập nhật `src/types/relationship.ts`
  - Cập nhật `RelationshipDetail`:
    - `relationshipType: string` (loại quan hệ)
    - `timeRange: TimeRange`
    - `description: string`
    - Xóa `status` và `strength` (không có trong SRS)

#### 1.4 Cập nhật Event Types theo SRS / Update Event Types per SRS

- [ ] Cập nhật `src/types/event.ts`
  - Thêm `novelId: string` vào Event
  - Thay đổi `timestamp` thành:
    - `startDate: string | null`
    - `endDate: string | null`
  - Thay đổi `locationId: string | null` thành `locationIds: string[]`
  - Cập nhật `participants` thành `characterParticipants`:
    - `characterId: string`
    - `role: string` (vai trò: "Chỉ huy", "Tham gia", "Nạn nhân"...)
    - `notes: string` (mô tả về người đó tại sự kiện)
  - Thêm `factionParticipants`:
    - `factionId: string`
    - `role: string`
    - `notes: string`
  - Thêm `tags: string[]`
  - Xóa `eventType`, `importance`, `outcome`, `impact` (không có trong SRS)

#### 1.5 Cập nhật Location Types theo SRS / Update Location Types per SRS

- [ ] Cập nhật `src/types/location.ts`
  - Thêm `novelId: string` vào Location
  - Thêm `tags: string[]` vào Location
  - Cập nhật `LocationAttribute`:
    - `description: string`
    - `features: string` (đặc điểm)
    - Xóa các fields không cần thiết theo SRS

#### 1.6 Cập nhật Faction Types theo SRS / Update Faction Types per SRS

- [ ] Cập nhật `src/types/faction.ts`
  - Thêm `novelId: string` vào Faction
  - Thêm `tags: string[]` vào Faction
  - Xóa `members` và `leader` từ `FactionAttribute`
  - Cập nhật `FactionAttribute`:
    - `description: string`
    - `status: string` (trạng thái: "Hoạt động", "Giải tán"...)
  - Thêm `FactionMembership`:
    - `characterId: string`
    - `joinedDate: string | null`
    - `leftDate: string | null`
    - `notes: string`
    - `roles: FactionRole[]`
  - Thêm `FactionRole`:
    - `tagId: string` (vai trò được quản lý qua Tags)
    - `timeRange: TimeRange`

#### 1.7 Tạo Tag Types / Create Tag Types

- [ ] Tạo `src/types/tag.ts`
  - `Tag`: ID, tên, màu sắc (hex color), novelId
  - `TaggableType`: 'character' | 'event' | 'location' | 'faction' | 'faction-role'
  - `EntityTag`: entityId, tagId, taggableType

#### 1.8 Cập nhật TimeRange Types / Update TimeRange Types

- [ ] Cập nhật `src/types/common.ts`
  - Đảm bảo `TimeRange` sử dụng `valid_from` và `valid_to` theo SRS:
    - `valid_from: string | null` (null = từ đầu truyện)
    - `valid_to: string | null` (null = đến hiện tại/tương lai)

---

### Giai Đoạn 2: Mock Data Mới / Phase 2: New Mock Data

**Mục tiêu / Objective:**
Tạo mock data mới theo cấu trúc types đã cập nhật.

Create new mock data according to updated type structure.

#### 2.1 Tạo Novel Mock Data / Create Novel Mock Data

- [ ] Cập nhật `src/lib/mockData.ts`
  - Thêm `novels: Novel[]`
  - Tạo 1-2 novels mẫu với đầy đủ thông tin

#### 2.2 Cập nhật Character Mock Data / Update Character Mock Data

- [ ] Cập nhật mock data cho Characters
  - Thêm `novelId` cho mỗi character
  - Thêm `avatar` URLs
  - Thêm `tags`
  - Cập nhật `attributes` theo cấu trúc mới

#### 2.3 Cập nhật Event Mock Data / Update Event Mock Data

- [ ] Cập nhật mock data cho Events
  - Thêm `novelId`
  - Thay đổi thành `startDate`, `endDate`
  - Thay `locationId` thành `locationIds`
  - Cập nhật `participants` thành `characterParticipants` với vai trò và notes
  - Thêm `factionParticipants`
  - Thêm `tags`

#### 2.4 Cập nhật Location Mock Data / Update Location Mock Data

- [ ] Cập nhật mock data cho Locations
  - Thêm `novelId`
  - Thêm `tags`
  - Cập nhật `attributes` theo cấu trúc mới

#### 2.5 Cập nhật Faction Mock Data / Update Faction Mock Data

- [ ] Cập nhật mock data cho Factions
  - Thêm `novelId`
  - Thêm `tags`
  - Cập nhật `attributes` theo cấu trúc mới
  - Thêm `memberships` với đầy đủ thông tin

#### 2.6 Tạo Tag Mock Data / Create Tag Mock Data

- [ ] Thêm `tags: Tag[]` vào mockData
  - Tạo tags mẫu cho các entities

---

### Giai Đoạn 3: Cập nhật DataContext / Phase 3: Update DataContext

**Mục tiêu / Objective:**
Cập nhật DataContext để quản lý dữ liệu mới.

Update DataContext to manage new data.

#### 3.1 Cập nhật DataContext State / Update DataContext State

- [ ] Cập nhật `src/context/DataContext.tsx`
  - Thêm `novels` vào state
  - Thêm `tags` vào state
  - Cập nhật các entities theo cấu trúc mới

#### 3.2 Thêm Novel CRUD Operations / Add Novel CRUD Operations

- [ ] Thêm các functions:
  - `createNovel()`
  - `updateNovel()`
  - `deleteNovel()`
  - `getNovelById()`
  - `getNovelsByOwner()`
  - `getPublicNovels()`

#### 3.3 Cập nhật Character CRUD Operations / Update Character CRUD Operations

- [ ] Cập nhật functions để xử lý:
  - Tags
  - Avatar
  - Versioning theo SRS

#### 3.4 Cập nhật Event CRUD Operations / Update Event CRUD Operations

- [ ] Cập nhật functions để xử lý:
  - StartDate/EndDate
  - Multiple locations
  - Character participants với vai trò
  - Faction participants
  - Tags

#### 3.5 Cập nhật Location CRUD Operations / Update Location CRUD Operations

- [ ] Cập nhật functions để xử lý:
  - Tags
  - Versioning theo SRS

#### 3.6 Cập nhật Faction CRUD Operations / Update Faction CRUD Operations

- [ ] Cập nhật functions để xử lý:
  - Tags
  - Memberships
  - Roles (qua tags)
  - Versioning theo SRS

#### 3.7 Thêm Tag CRUD Operations / Add Tag CRUD Operations

- [ ] Thêm các functions:
  - `createTag()`
  - `updateTag()`
  - `deleteTag()`
  - `getTagsByNovel()`
  - `addTagToEntity()`
  - `removeTagFromEntity()`

---

### Giai Đoạn 4: Time-Based Query Utilities / Phase 4: Time-Based Query Utilities

**Mục tiêu / Objective:**
Tạo utilities để truy vấn dữ liệu dựa trên thời gian.

Create utilities for time-based data queries.

#### 4.1 Tạo Query Utilities / Create Query Utilities

- [ ] Tạo `src/lib/timeQuery.ts`
  - `getCharacterAtTime(characterId, date)`: Lấy thông tin nhân vật tại thời điểm
  - `getRelationshipsAtTime(characterId, date)`: Lấy quan hệ tại thời điểm
  - `getFactionsAtTime(characterId, date)`: Lấy thế lực tại thời điểm
  - `getEventsByCharacter(characterId, startDate, endDate)`: Lấy sự kiện của nhân vật
  - `getRelationshipHistory(characterAId, characterBId)`: Lịch sử quan hệ
  - `getCharacterJourney(characterId, startDate, endDate)`: Hành trình nhân vật
  - `compareCharacters(characterId, fromDate, toDate)`: So sánh nhân vật

#### 4.2 Tạo Timeline Utilities / Create Timeline Utilities

- [ ] Tạo `src/lib/timelineUtils.ts`
  - `getCharacterTimeline(characterId)`: Timeline nhân vật
  - `getNovelTimeline(novelId)`: Timeline novel
  - `getComprehensiveTimeline(novelId, filters)`: Timeline tổng hợp

---

### Giai Đoạn 5: Cập nhật UI Components / Phase 5: Update UI Components

**Mục tiêu / Objective:**
Cập nhật UI components để hiển thị dữ liệu mới, giữ nguyên giao diện.

Update UI components to display new data while preserving interface.

#### 5.1 Thêm Novel Pages / Add Novel Pages

- [ ] Tạo `src/app/novels/NovelsPage.tsx` - Danh sách novels
- [ ] Tạo `src/app/novels/NovelCreatePage.tsx` - Tạo novel mới
- [ ] Tạo `src/app/novels/NovelDetailPage.tsx` - Chi tiết novel
- [ ] Tạo `src/app/novels/NovelEditPage.tsx` - Sửa novel
- [ ] Tạo `src/components/domain/novel/NovelTable.tsx`
- [ ] Tạo `src/components/domain/novel/NovelForm.tsx`
- [ ] Cập nhật Sidebar để thêm menu Novels

#### 5.2 Cập nhật Character Pages / Update Character Pages

- [ ] Cập nhật `CharacterForm.tsx`:
  - Thêm field avatar (upload)
  - Thêm field tags
  - Cập nhật attributes theo cấu trúc mới
- [ ] Cập nhật `CharacterDetailPage.tsx`:
  - Hiển thị avatar
  - Hiển thị tags
  - Hiển thị attributes theo versioning
  - Hiển thị timeline của nhân vật

#### 5.3 Cập nhật Event Pages / Update Event Pages

- [ ] Cập nhật `EventForm.tsx`:
  - Thay đổi timestamp thành startDate/endDate
  - Thay locationId thành multiple locations
  - Cập nhật participants với vai trò và notes
  - Thêm faction participants
  - Thêm tags
- [ ] Cập nhật `EventDetailPage.tsx`:
  - Hiển thị date range
  - Hiển thị multiple locations
  - Hiển thị character participants với vai trò
  - Hiển thị faction participants
  - Hiển thị tags

#### 5.4 Cập nhật Location Pages / Update Location Pages

- [ ] Cập nhật `LocationForm.tsx`:
  - Thêm tags
  - Cập nhật attributes theo cấu trúc mới
- [ ] Cập nhật `LocationDetailPage.tsx`:
  - Hiển thị tags
  - Hiển thị attributes theo versioning

#### 5.5 Cập nhật Faction Pages / Update Faction Pages

- [ ] Cập nhật `FactionForm.tsx`:
  - Thêm tags
  - Cập nhật attributes theo cấu trúc mới
  - Thêm quản lý memberships
- [ ] Tạo `src/components/domain/faction/FactionMembers.tsx`:
  - Hiển thị danh sách thành viên
  - Thêm/xóa thành viên
  - Quản lý vai trò (qua tags)
- [ ] Cập nhật `FactionDetailPage.tsx`:
  - Hiển thị tags
  - Hiển thị attributes theo versioning
  - Hiển thị memberships với roles

#### 5.6 Tạo Tag Management Pages / Create Tag Management Pages

- [ ] Tạo `src/app/tags/TagsPage.tsx` - Danh sách tags
- [ ] Tạo `src/app/tags/TagCreatePage.tsx` - Tạo tag mới
- [ ] Tạo `src/app/tags/TagEditPage.tsx` - Sửa tag
- [ ] Tạo `src/components/domain/tag/TagTable.tsx`
- [ ] Tạo `src/components/domain/tag/TagForm.tsx`
- [ ] Cập nhật Sidebar để thêm menu Tags

---

### Giai Đoạn 6: Query UI Components / Phase 6: Query UI Components

**Mục tiêu / Objective:**
Tạo UI components cho các tính năng tra cứu.

Create UI components for query features.

#### 6.1 Tạo Query Tool Component / Create Query Tool Component

- [ ] Tạo `src/components/query/QueryTool.tsx`:
  - Date picker
  - Entity selector
  - Query type selector
  - Results display

#### 6.2 Tạo Query Pages / Create Query Pages

- [ ] Tạo `src/app/query/CharacterAtTimePage.tsx` - Tra cứu nhân vật tại thời điểm
- [ ] Tạo `src/app/query/RelationshipHistoryPage.tsx` - Lịch sử quan hệ
- [ ] Tạo `src/app/query/CharacterJourneyPage.tsx` - Hành trình nhân vật
- [ ] Tạo `src/app/query/CompareCharactersPage.tsx` - So sánh nhân vật
- [ ] Cập nhật Sidebar để thêm menu Query

---

### Giai Đoạn 7: Visualization Components / Phase 7: Visualization Components

**Mục tiêu / Objective:**
Tạo visualization components cho Timeline và Relationship Graph.

Create visualization components for Timeline and Relationship Graph.

#### 7.1 Tạo Timeline View Component / Create Timeline View Component

- [ ] Tạo `src/components/visualization/TimelineView.tsx`:
  - Hiển thị timeline interactive
  - Filter theo character/faction/location
  - Zoom in/out
  - Click vào item để xem chi tiết

#### 7.2 Tạo Relationship Graph Component / Create Relationship Graph Component

- [ ] Tạo `src/components/visualization/RelationshipGraph.tsx`:
  - Hiển thị nodes (nhân vật)
  - Hiển thị edges (quan hệ)
  - Color-coded theo loại quan hệ
  - Time slider để xem tại thời điểm khác
  - Interactive: Click để xem chi tiết

#### 7.3 Tạo Visualization Pages / Create Visualization Pages

- [ ] Tạo `src/app/visualization/TimelinePage.tsx`
- [ ] Tạo `src/app/visualization/RelationshipGraphPage.tsx`
- [ ] Cập nhật Sidebar để thêm menu Visualization

---

### Giai Đoạn 8: Upload Components / Phase 8: Upload Components

**Mục tiêu / Objective:**
Tạo components để upload ảnh.

Create components for image upload.

#### 8.1 Tạo Image Upload Component / Create Image Upload Component

- [ ] Tạo `src/components/common/ImageUpload.tsx`:
  - Upload avatar cho Character
  - Upload cover image cho Novel
  - Preview ảnh
  - Xóa ảnh

#### 8.2 Tích hợp Image Upload / Integrate Image Upload

- [ ] Tích hợp ImageUpload vào CharacterForm
- [ ] Tích hợp ImageUpload vào NovelForm

---

### Giai Đoạn 9: I18n Updates / Phase 9: I18n Updates

**Mục tiêu / Objective:**
Cập nhật translation files cho các tính năng mới.

Update translation files for new features.

#### 9.1 Cập nhật en.json / Update en.json

- [ ] Thêm translation keys cho Novel
- [ ] Thêm translation keys cho Tags
- [ ] Thêm translation keys cho Query features
- [ ] Thêm translation keys cho Visualization
- [ ] Cập nhật translation keys cho Character, Event, Location, Faction theo cấu trúc mới

#### 9.2 Cập nhật vi.json / Update vi.json

- [ ] Thêm translation keys cho Novel
- [ ] Thêm translation keys cho Tags
- [ ] Thêm translation keys cho Query features
- [ ] Thêm translation keys cho Visualization
- [ ] Cập nhật translation keys cho Character, Event, Location, Faction theo cấu trúc mới

---

### Giai Đoạn 10: Routing Updates / Phase 10: Routing Updates

**Mục tiêu / Objective:**
Cập nhật routing cho các trang mới.

Update routing for new pages.

#### 10.1 Cập nhật App.tsx Routing / Update App.tsx Routing

- [ ] Thêm routes cho Novel pages
- [ ] Thêm routes cho Tag pages
- [ ] Thêm routes cho Query pages
- [ ] Thêm routes cho Visualization pages

#### 10.2 Cập nhật Sidebar Navigation / Update Sidebar Navigation

- [ ] Thêm menu items cho Novel
- [ ] Thêm menu items cho Tags
- [ ] Thêm menu items cho Query
- [ ] Thêm menu items cho Visualization

---

## Giới Phạm / Scope

### Được thực hiện / In Scope:

- ✅ Tái cấu trúc types theo SRS.md
- ✅ Cập nhật mock data
- ✅ Cập nhật DataContext
- ✅ Tạo time-based query utilities
- ✅ Cập nhật UI components cho entities hiện có
- ✅ Thêm Novel management
- ✅ Thêm Tag system
- ✅ Thêm Query UI
- ✅ Thêm Visualization components (Timeline, Relationship Graph)
- ✅ Thêm Image upload components
- ✅ Cập nhật i18n
- ✅ Cập nhật routing

### Không được thực hiện / Out of Scope:

- ❌ Authentication (Email/Password, Google OAuth) - Yêu cầu backend
- ❌ Backend API integration - Yêu cầu backend
- ❌ Database integration - Yêu cầu backend
- ❌ Real file upload (Cloudinary/S3) - Yêu cầu backend
- ❌ Public/Private sharing với real users - Yêu cầu backend

---

## Lưu Ý Quan Trọng / Important Notes

### 1. Giữ nguyên Giao Diện / Preserve UI

- Không thay đổi layout, spacing, typography
- Không thay đổi màu sắc (Emerald/Teal/Amber cho light mode)
- Không thay đổi icon (Lucide React)
- Giữ nguyên các design rules từ DESIGN_RULES.md và THEME_RULES.md

### 2. Mock Data Only / Chỉ Mock Data

- Tất cả dữ liệu vẫn là mock data
- Không có API calls
- Không có backend integration

### 3. Versioning Logic / Logic Versioning

- Sử dụng valid_from và valid_to để quản lý versioning
- null = từ đầu hoặc đến hiện tại
- Query tại thời điểm: tìm version có (valid_from IS NULL OR valid_from <= date) AND (valid_to IS NULL OR valid_to >= date)

### 4. Relationship Periods / Mốc Quan Hệ

- Hỗ trợ nhiều quan hệ đồng thời tại 1 thời điểm
- Mỗi quan hệ có period riêng với time range

### 5. Faction Roles / Vai Trò Thế Lực

- Vai trò được quản lý qua Tags
- Mỗi membership có nhiều roles với versioning

### 6. Tags / Tags

- Tags dùng chung cho toàn bộ novel
- Có thể gắn cho nhiều loại entities

---

## Thứ Tự Thực Hiện / Execution Order

1. **Phase 1: Data Structure** - Tạo/cập nhật types
2. **Phase 2: Mock Data** - Tạo mock data mới
3. **Phase 3: DataContext** - Cập nhật state management
4. **Phase 4: Query Utilities** - Tạo query functions
5. **Phase 5: UI Components** - Cập nhật/tạo UI components
6. **Phase 6: Query UI** - Tạo query pages
7. **Phase 7: Visualization** - Tạo visualization components
8. **Phase 8: Upload** - Tạo upload components
9. **Phase 9: I18n** - Cập nhật translations
10. **Phase 10: Routing** - Cập nhật routing

---

## Kết Thúc / Conclusion

Kế hoạch này sẽ tái cấu trúc nghiệp vụ của Story Manager để đáp ứng đầy đủ các yêu cầu trong SRS.md, trong khi giữ nguyên giao diện UI hiện có.

This plan will restructure the business logic of Story Manager to fully meet SRS.md requirements while preserving the existing UI interface.
