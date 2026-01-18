/**
 * Common Types / Các kiểu Chung
 *
 * This file contains common types used across the application.
 * Tệp này chứa các kiểu chung được sử dụng trong toàn bộ ứng dụng.
 */

/**
 * Time range for versioned attributes
 * Phạm vi thời gian cho các thuộc tính được phiên bản hóa
 *
 * Used for versioning entities like Character, Location, Faction, and Relationship periods.
 * null values indicate "from beginning of story" (validFrom) or "to present/future" (validTo).
 * Được sử dụng để phiên bản hóa các thực thể như Nhân vật, Địa điểm, Thế lực và các khoảng thời gian Quan hệ.
 * Giá trị null chỉ định "từ đầu truyện" (validFrom) hoặc "đến hiện tại/tương lai" (validTo).
 */
export interface TimeRange {
  /** Start time (inclusive), null means from beginning of story / Thời gian bắt đầu (bao gồm), null nghĩa là từ đầu truyện */
  validFrom: string | null;
  /** End time (inclusive), null means to present/future / Thời gian kết thúc (bao gồm), null nghĩa là đến hiện tại/tương lai */
  validTo: string | null;
}

/**
 * Base entity interface with common properties
 * Giao diện thực thể cơ bản với các thuộc tính chung
 *
 * All domain entities extend this interface.
 * Tất cả các thực thể domain đều mở rộng giao diện này.
 */
export interface BaseEntity {
  /** Unique identifier / Định danh duy nhất */
  id: string;
  /** Name of the entity / Tên thực thể */
  name: string;
  /** Description of the entity / Mô tả thực thể */
  description: string;
  /** Creation timestamp / Thời gian tạo */
  createdAt: string;
  /** Last update timestamp / Thời gian cập nhật cuối cùng */
  updatedAt: string;
}
