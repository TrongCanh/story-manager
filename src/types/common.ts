/**
 * Common Types / Các kiểu Chung
 *
 * This file contains common types used across the application.
 * Tệp này chứa các kiểu chung được sử dụng trong toàn bộ ứng dụng.
 */

/**
 * Time range for versioned attributes
 * Phạm vi thời gian cho các thuộc tính được phiên bản hóa
 */
export interface TimeRange {
  /** Start time (inclusive) / Thời gian bắt đầu (bao gồm) */
  from: string;
  /** End time (exclusive, null means ongoing) / Thời gian kết thúc (không bao gồm, null nghĩa là đang diễn ra) */
  to: string | null;
}

/**
 * Base entity interface with common properties
 * Giao diện thực thể cơ bản với các thuộc tính chung
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
