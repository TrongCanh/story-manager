1. TỔNG QUAN Dự án
   Mục đích:
   Xây dựng web application giúp tác giả quản lý các yếu tố trong tiểu thuyết (nhân vật, sự kiện, mối quan hệ, thế lực, địa điểm) theo timeline, tránh nhầm lẫn và mâu thuẫn trong quá trình viết truyện.
   Tech Stack:

Frontend: React.js + TypeScript
Backend: NestJS + TypeScript
Database: PostgreSQL (Neon.tech - free tier)
Authentication: Email/Password + Google OAuth
Styling: Tailwind CSS + shadcn/ui
Visualization: React Flow / D3.js (cho graph, timeline)

2. HỆ THỐNG QUẢN LÝ NGƯỜI DÙNG
   2.1. Authentication & Authorization
   Đăng ký/Đăng nhập:

✅ Đăng ký bằng Email + Password
✅ Đăng nhập bằng Email + Password
✅ Đăng nhập bằng Google OAuth
✅ JWT token-based authentication

Phân quyền:

✅ Owner (Chủ sở hữu novel): Có quyền đầy đủ (CRUD tất cả)
✅ Viewer (Người xem): Chỉ có quyền xem (Read-only)
✅ Public (Khách): Có thể xem novel được đánh dấu public (không cần đăng nhập)

3. QUẢN LÝ TIỂU THUYẾT (NOVEL)
   3.1. Thông tin Novel

ID (unique)
Tên tiểu thuyết
Mô tả
Ảnh bìa (cover image)
Owner (người tạo)
Trạng thái: Public / Private
Ngày tạo, ngày cập nhật

3.2. Chức năng

✅ Tạo novel mới
✅ Sửa thông tin novel
✅ Xóa novel
✅ Đổi trạng thái Public ↔ Private
✅ Quản lý danh sách Viewers (thêm/xóa người được xem)
✅ Xem danh sách novel của mình
✅ Xem danh sách novel public (của người khác)

3.3. Quy tắc chia sẻ

Private novel: Chỉ Owner và Viewers được chỉ định mới xem được
Public novel: Tất cả mọi người (kể cả khách chưa đăng nhập) đều xem được
Chia sẻ áp dụng cho toàn bộ tiểu thuyết, không chia sẻ từng phần

4. QUẢN LÝ NHÂN VẬT (CHARACTER)
   4.1. Thông tin cơ bản

ID (unique)
Tên nhân vật
Ảnh đại diện (avatar) - cho phép upload
Thuộc novel nào

4.2. Thông tin theo thời gian (Versioning)
Mỗi phiên bản (version) bao gồm:

Khoảng thời gian hiệu lực:

valid_from (ngày bắt đầu) - nullable: từ đầu truyện
valid_to (ngày kết thúc) - nullable: đến hiện tại

Ngoại hình (text - mô tả tự do)
Tính cách (text - mô tả tự do)
Trạng thái (text: "Sống", "Chết", "Mất tích"...)
Ghi chú (notes)

Quy tắc:

✅ Nhân vật có thể có nhiều phiên bản (thay đổi theo thời gian)
✅ Khi truy vấn tại 1 thời điểm, lấy phiên bản gần nhất (có valid_from <= date và valid_to >= date)
✅ Có thể xem lịch sử tất cả các phiên bản để so sánh

4.3. Tags

✅ Nhân vật có thể gắn nhiều tags
✅ Tags dùng chung cho toàn bộ novel
✅ Ví dụ: #nhân_vật_chính, #pháp_sư, #phản_diện...

4.4. Chức năng

✅ Tạo nhân vật mới
✅ Sửa thông tin cơ bản (tên, avatar)
✅ Xóa nhân vật
✅ Thêm/sửa/xóa phiên bản (version)
✅ Gắn/bỏ tags
✅ Upload ảnh đại diện

5. QUẢN LÝ MỐI QUAN HỆ (RELATIONSHIP)
   5.1. Cấu trúc
   Mối quan hệ giữa 2 nhân vật:

Nhân vật A ↔ Nhân vật B
Không có chiều hướng (quan hệ đối xứng)
Nếu A yêu B nhưng B không yêu A → tạo quan hệ "Đơn phương"

Lịch sử quan hệ (Relationship Periods):

✅ 2 người có thể có nhiều mối quan hệ đồng thời tại cùng 1 thời điểm

Ví dụ: Năm 2015, A và B vừa là "Đồng nghiệp" vừa là "Người yêu"

✅ Quan hệ thay đổi theo thời gian

Ví dụ: Năm 2010: "Bạn thân" → Năm 2015: "Kẻ thù"

Mỗi period bao gồm:

Loại quan hệ (text - tự do nhập): "Bạn bè", "Kẻ thù", "Vợ chồng", "Sư đồ"...
Khoảng thời gian hiệu lực: valid_from, valid_to
Mô tả/ghi chú

5.2. Chức năng

✅ Tạo quan hệ giữa 2 nhân vật
✅ Thêm/sửa/xóa period (mốc quan hệ)
✅ Xóa toàn bộ quan hệ
✅ Truy vấn quan hệ giữa 2 người tại thời điểm cụ thể
✅ Xem lịch sử quan hệ (timeline)

6. QUẢN LÝ SỰ KIỆN (EVENT)
   6.1. Thông tin sự kiện

ID (unique)
Tiêu đề
Mô tả
Thời gian:

Ngày bắt đầu (start_date) - nullable
Ngày kết thúc (end_date) - nullable
✅ Sự kiện có thể kéo dài lâu (VD: "Đại chiến kéo dài 3 năm")

Thuộc novel nào

6.2. Liên kết với các entities
Sự kiện ↔ Nhân vật:

✅ Nhiều nhân vật tham gia 1 sự kiện
Mỗi nhân vật có:

Vai trò (text: "Chỉ huy", "Tham gia", "Nạn nhân"...)
Mô tả (notes: mô tả về người đó tại sự kiện)

VD: "Bị thương nặng", "Là người chủ mưu"

Sự kiện ↔ Địa điểm:

✅ 1 sự kiện có thể diễn ra ở nhiều địa điểm
Quan hệ nhiều-nhiều

Sự kiện ↔ Thế lực:

✅ Nhiều thế lực tham gia 1 sự kiện
Mỗi thế lực có vai trò và ghi chú

Sự kiện ↔ Tags:

✅ Gắn tags cho sự kiện
VD: #chiến_tranh, #tình_cảm, #bản_sửu

6.3. Phân cấp

❌ KHÔNG cần phân cấp sự kiện (sự kiện lớn/sự kiện con)
✅ Nếu cần liên kết, dùng mô tả hoặc tags chung

6.4. Chức năng

✅ Tạo sự kiện mới
✅ Sửa thông tin sự kiện
✅ Xóa sự kiện
✅ Thêm/xóa nhân vật vào sự kiện (với vai trò và mô tả)
✅ Thêm/xóa địa điểm
✅ Thêm/xóa thế lực
✅ Gắn/bỏ tags
✅ Xem danh sách sự kiện của 1 nhân vật
✅ Xem danh sách sự kiện tại 1 địa điểm

7. QUẢN LÝ ĐỊA ĐIỂM (LOCATION)
   7.1. Thông tin cơ bản

ID (unique)
Tên địa điểm
Thuộc novel nào

7.2. Thông tin theo thời gian (Versioning)
Mỗi phiên bản bao gồm:

Khoảng thời gian hiệu lực: valid_from, valid_to
Mô tả (text)
Đặc điểm (text)

VD: "Năm 2010: Kinh đô phồn hoa" → "Năm 2015: Thành phố bỏ hoang"

Quy tắc:

✅ Địa điểm có thể thay đổi đặc điểm theo thời gian
✅ Truy vấn tại thời điểm sẽ lấy phiên bản gần nhất

7.3. Phân cấp & Tags

❌ KHÔNG cần phân cấp (Quốc gia > Thành phố...)
✅ Nếu cần, dùng mô tả hoặc tags

7.4. Chức năng

✅ Tạo địa điểm mới
✅ Sửa thông tin cơ bản
✅ Xóa địa điểm
✅ Thêm/sửa/xóa phiên bản (version)
✅ Gắn/bỏ tags
✅ Xem danh sách sự kiện tại địa điểm

8. QUẢN LÝ THẾ LỰC (FACTION)
   8.1. Thông tin cơ bản

ID (unique)
Tên thế lực
Mô tả
Thuộc novel nào

8.2. Thông tin theo thời gian (Versioning)
Mỗi phiên bản bao gồm:

Khoảng thời gian hiệu lực: valid_from, valid_to
Mô tả (text)
Trạng thái (text: "Hoạt động", "Giải tán"...)

Quy tắc:

✅ Thế lực có thể thay đổi theo thời gian (thành lập, giải tán, tái thiết lập...)

8.3. Thành viên (Faction Members)
Cấu trúc:

✅ 1 nhân vật có thể tham gia nhiều thế lực cùng lúc
✅ 1 nhân vật có thể tham gia và rời đi một thế lực nhiều lần

Mỗi lần tham gia (Membership) bao gồm:

Ngày tham gia (joined_date) - nullable
Ngày rời đi (left_date) - nullable: đang tham gia
Ghi chú (notes)

Vai trò trong thế lực:

✅ Vai trò được quản lý qua Tags
✅ Vai trò thay đổi theo thời gian
✅ Lưu lịch sử vai trò (có valid_from, valid_to)
VD:

2010-2012: Tag "Học sinh"
2015-2017: Tag "Giáo viên" (sau khi quay lại)
2018+: Tag "Phó Hiệu trưởng"

8.4. Phân cấp & Tags

❌ KHÔNG cần phân cấp thế lực (tổ chức lớn > chi nhánh...)
✅ Nếu cần, dùng mô tả hoặc tags
✅ Thế lực có thể gắn tags riêng

8.5. Chức năng

✅ Tạo thế lực mới
✅ Sửa thông tin cơ bản
✅ Xóa thế lực
✅ Thêm/sửa/xóa phiên bản (version)
✅ Thêm thành viên (membership)
✅ Cập nhật ngày tham gia/rời đi
✅ Xóa thành viên
✅ Thêm/sửa/xóa vai trò (role) cho thành viên
✅ Gắn/bỏ tags cho thế lực
✅ Xem danh sách thành viên tại thời điểm
✅ Xem lịch sử vai trò của 1 thành viên

9. HỆ THỐNG TAG
   9.1. Đặc điểm

✅ Tags dùng chung cho toàn bộ novel
✅ 1 tag có thể gắn cho nhiều loại entities:

Nhân vật
Sự kiện
Địa điểm
Thế lực
Vai trò trong thế lực

9.2. Thông tin tag

ID (unique)
Tên tag
Màu sắc (hex color) - để phân biệt trực quan
Thuộc novel nào

9.3. Chức năng

✅ Tạo tag mới
✅ Sửa tag (tên, màu)
✅ Xóa tag
✅ Gắn tag cho entities
✅ Bỏ tag khỏi entities
✅ Tìm kiếm entities theo tag

10. HỆ THỐNG TIMELINE & THỜI GIAN
    10.1. Định dạng thời gian

✅ Hỗ trợ: Ngày/Tháng/Năm (DD/MM/YYYY)
✅ Có thể chỉ có Năm (YYYY)
✅ Nullable: không xác định thời gian cụ thể

10.2. Quy tắc versioning (áp dụng cho Character, Location, Faction)
Khoảng thời gian hiệu lực:

valid_from = NULL → Từ đầu truyện
valid_to = NULL → Đến hiện tại/tương lai
Ví dụ:

Version 1: valid_from = NULL, valid_to = 2014-12-31 → "Từ đầu đến 2014"
Version 2: valid_from = 2015-01-01, valid_to = NULL → "Từ 2015 đến nay"

Truy vấn tại thời điểm:

Tìm version có: (valid_from IS NULL OR valid_from <= date) AND (valid_to IS NULL OR valid_to >= date)
Sắp xếp theo valid_from DESC → Lấy version 1 (gần nhất)

10.3. Quy tắc cho Relationship Periods

✅ Tương tự versioning
✅ Có thể có nhiều periods cùng lúc (nhiều quan hệ đồng thời)

10.4. Quy tắc cho Faction Membership

✅ Có thể có nhiều records (tham gia nhiều lần)
✅ Mỗi membership có joined_date và left_date
✅ Vai trò trong mỗi membership cũng có versioning

11. TÍNH NĂNG TRA CỨU & TRUy VẤN
    11.1. Tra cứu nhân vật tại thời điểm
    Input: Character ID + Date
    Output:

✅ Ngoại hình & tính cách (version tại thời điểm đó)
✅ Trạng thái (sống/chết/mất tích)
✅ Các quan hệ đang có (tất cả relationships active tại thời điểm đó)
✅ Các thế lực đang tham gia + vai trò hiện tại
✅ Các sự kiện đã tham gia (trước thời điểm đó)
✅ Tags của nhân vật

11.2. Lịch sử quan hệ giữa 2 người
Input: Character A ID + Character B ID
Output:

✅ Timeline các mối quan hệ đã trải qua
✅ Mỗi period hiển thị: loại quan hệ, thời gian, mô tả

11.3. Hành trình nhân vật (Character Journey)
Input: Character ID + (Optional) Start Date + End Date
Output:

✅ Tất cả sự kiện tham gia (trong khoảng thời gian)
✅ Các thay đổi về quan hệ
✅ Các thay đổi về thế lực (tham gia/rời/đổi vai trò)
✅ Các thay đổi về ngoại hình/tính cách

11.4. So sánh nhân vật giữa 2 thời điểm
Input: Character ID + From Date + To Date
Output:

✅ Thay đổi về ngoại hình/tính cách
✅ Quan hệ mới thêm/xóa/thay đổi
✅ Thế lực tham gia/rời/quay lại/đổi vai trò
✅ Các sự kiện xảy ra giữa 2 thời điểm

11.5. Chi tiết nhân vật đầy đủ
Input: Character ID
Output: Tất cả thông tin (xem phần 4 - API Response trong thiết kế trước)

✅ Thông tin cơ bản
✅ Tất cả versions (lịch sử ngoại hình/tính cách)
✅ Tất cả relationships (lịch sử quan hệ với từng người)
✅ Tất cả factions (lịch sử tham gia + vai trò)
✅ Tất cả events tham gia
✅ Tags
✅ Sắp xếp theo mốc thời gian

11.6. Timeline tổng hợp
Hiển thị tất cả thay đổi theo timeline:

✅ Version changes (ngoại hình, tính cách)
✅ Relationship changes (bắt đầu, kết thúc, thay đổi)
✅ Faction changes (tham gia, rời, đổi vai trò)
✅ Events (sự kiện tham gia)
✅ Sắp xếp theo thời gian tăng dần

12. TÍNH NĂNG HIỂN THỊ (VISUALIZATION)
    12.1. Các chế độ xem
    Timeline View (Dòng thời gian):

✅ Hiển thị events, character versions, relationship changes theo trục thời gian
✅ Filter theo character/faction/location
✅ Zoom in/out theo khoảng thời gian
✅ Click vào item để xem chi tiết

Relationship Graph (Sơ đồ quan hệ):

✅ Nodes: Nhân vật
✅ Edges: Các mối quan hệ (có thể nhiều edge giữa 2 nodes)
✅ Color-coded theo loại quan hệ
✅ Time slider: Kéo để xem quan hệ tại thời điểm khác nhau
✅ Interactive: Click để xem chi tiết

List/Table View:

✅ Danh sách dạng bảng
✅ Sort, filter, search
✅ Hiển thị thông tin tóm tắt

Detail View:

✅ Trang chi tiết entity (Character, Event, Location, Faction)
✅ Hiển thị đầy đủ thông tin + lịch sử
✅ Timeline của riêng entity đó

12.2. Công cụ tra cứu (Query Tool)

✅ Date picker: Chọn thời điểm
✅ Entity selector: Chọn nhân vật/địa điểm/thế lực
✅ Query type selector: Loại truy vấn (at time, compare, journey...)
✅ Results display: Hiển thị kết quả (table/cards/timeline)

13. UPLOAD & MEDIA
    13.1. Chức năng upload

✅ Upload ảnh đại diện cho nhân vật (avatar)
✅ Upload ảnh bìa cho novel (cover image)
✅ Lưu trữ: Cloudinary hoặc AWS S3 (tùy chọn)
✅ Giới hạn kích thước, format (JPG, PNG, WebP)

14. GIAO DIỆN & UX
    14.1. Yêu cầu

✅ Hiện đại: Material Design / Tailwind + shadcn/ui
✅ Responsive: Hỗ trợ desktop, tablet, mobile
✅ Theme: Dark mode & Light mode
✅ Accessible: Contrast đủ, semantic HTML

14.2. Main Layout
┌──────────────────────────────────────────┐
│ Header (Logo, Novel selector, User) │
├──────────┬───────────────────────────────┤
│ │ │
│ Sidebar │ Main Content │
│ │ │
│ - Tổng │ (Danh sách / Detail View) │
│ quan │ │
│ - Nhân │ │
│ vật │ │
│ - Sự │ │
│ kiện │ │
│ - Địa │ │
│ điểm │ │
│ - Thế │ │
│ lực │ │
│ - Quan │ │
│ hệ │ │
│ - Time- │ │
│ line │ │
│ - Graph │ │
│ - Tags │ │
│ - Tra │ │
│ cứu │ │
│ - Cài │ │
│ đặt │ │
└──────────┴───────────────────────────────┘

15. ROADMAP PHÁT TRIỂN
    Phase 1: Foundation (2-3 tuần)

Setup project (NestJS + React + PostgreSQL)
Authentication (Email/Password + Google OAuth)
Novel CRUD + Sharing permissions
Basic UI structure + User dashboard

Phase 2: Core Entities (3-4 tuần)

Character management (CRUD + versions)
Location management (CRUD + versions)
Event management
Tag system
Image upload

Phase 3: Relationships (2-3 tuần)

Relationship management
Relationship periods (multiple concurrent)
Relationship query APIs
Basic relationship visualization

Phase 4: Factions (2 tuần)

Faction management + versions
Faction members + membership history
Faction roles (via tags) + role history
Event-Faction linking

Phase 5: Advanced Query (2-3 tuần)

Character at time query
Relationship history query
Character journey query
Complex timeline queries
Query UI interface

Phase 6: Visualization (2-3 tuần)

Timeline view (interactive)
Relationship graph (D3.js/React Flow)
Time slider for graph
Export timeline/graph

Phase 7: Polish & Testing (1-2 tuần)

Responsive design refinement
Dark/Light theme
Performance optimization
Testing (unit + integration)
Bug fixes

Tổng thời gian ước tính: 15-20 tuần (3.5-5 tháng)

16. CÁC ĐIỂM ĐẶC BIỆT CẦN LƯU Ý
    16.1. Database Design

✅ Sử dụng versioning pattern cho entities thay đổi theo thời gian
✅ Nullable dates cho "từ đầu" và "đến nay"
✅ Indexes quan trọng trên các cột thời gian để tối ưu query
✅ Foreign keys + Cascade delete cẩn thận

16.2. Performance

✅ Pagination cho danh sách dài
✅ Lazy loading cho timeline (load theo chunks)
✅ Caching cho data ít thay đổi (tags, novel info)
✅ Debounce/throttle cho search và filter

16.3. Data Integrity

✅ Validate khoảng thời gian (valid_from <= valid_to)
✅ Không cho phép khoảng thời gian overlap không hợp lý
✅ Soft delete thay vì hard delete (giữ lịch sử)

16.4. Security

✅ JWT với refresh token
✅ Rate limiting cho API
✅ Input validation (backend + frontend)
✅ Permission check trước mọi operation
✅ HTTPS only
✅ Sanitize user input
