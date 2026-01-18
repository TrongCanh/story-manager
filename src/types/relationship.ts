/**
 * Relationship Types / Các kiểu Mối quan hệ
 *
 * This file contains type definitions for Relationship entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Mối quan hệ.
 */

import type { BaseEntity } from './common';

/**
 * Relationship entity / Thực thể Mối quan hệ
 *
 * Represents a relationship between two characters with time-based periods.
 * Đại diện cho mối quan hệ giữa hai nhân vật với các khoảng thời gian dựa trên thời gian.
 */
export interface Relationship extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'relationship';
  /** First character ID (Character A) / ID nhân vật thứ nhất (Nhân vật A) */
  characterAId: string;
  /** Second character ID (Character B) / ID nhân vật thứ hai (Nhân vật B) */
  characterBId: string;
  /** Time-based relationship periods / Các khoảng thời gian mối quan hệ dựa trên thời gian */
  periods: RelationshipPeriod[];
}

/**
 * Relationship period with time-based attributes
 * Khoảng thời gian mối quan hệ với các thuộc tính dựa trên thời gian
 *
 * Represents a relationship state during a specific time period.
 * Multiple periods can exist simultaneously between two characters.
 * Đại diện cho trạng thái mối quan hệ trong một khoảng thời gian cụ thể.
 * Nhiều khoảng thời gian có thể tồn tại đồng thời giữa hai nhân vật.
 */
export interface RelationshipPeriod {
  /** Unique identifier for this period / Định danh duy nhất cho khoảng thời gian này */
  id: string;
  /** Relationship type (free text, e.g., "Friend", "Enemy", "Spouse", "Mentor") / Loại quan hệ (text tự do, ví dụ: "Bạn bè", "Kẻ thù", "Vợ chồng", "Sư đồ") */
  relationshipType: string;
  /** Valid from date (null = from beginning of story) / Ngày hiệu lực từ (null = từ đầu truyện) */
  validFrom: string | null;
  /** Valid to date (null = to present/future) / Ngày hiệu lực đến (null = đến hiện tại/tương lai) */
  validTo: string | null;
  /** Description/notes about this relationship period / Mô tả/ghi chú về khoảng thời gian mối quan hệ này */
  description: string;
}
