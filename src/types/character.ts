/**
 * Character Types / Các kiểu Nhân vật
 *
 * This file contains type definitions for Character entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Nhân vật.
 */

import type { BaseEntity } from './common';

/**
 * Character entity / Thực thể Nhân vật
 *
 * Represents a character in the story with versioned attributes.
 * Đại diện cho một nhân vật trong câu chuyện với các thuộc tính được phiên bản hóa.
 */
export interface Character extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'character';
  /** Avatar image URL / URL ảnh đại diện */
  avatar: string | null;
  /** Novel ID this character belongs to / ID tiểu thuyết mà nhân vật này thuộc về */
  novelId: string;
  /** Character versions with time-based attributes / Các phiên bản nhân vật với thuộc tính dựa trên thời gian */
  versions: CharacterVersion[];
  /** Array of tag IDs assigned to this character / Mảng ID tag được gán cho nhân vật này */
  tags: string[];
}

/**
 * Character version with time-based attributes
 * Phiên bản nhân vật với các thuộc tính dựa trên thời gian
 *
 * Represents the state of a character during a specific time period.
 * Đại diện cho trạng thái của nhân vật trong một khoảng thời gian cụ thể.
 */
export interface CharacterVersion {
  /** Unique identifier for this version / Định danh duy nhất cho phiên bản này */
  id: string;
  /** Valid from date (null = from beginning of story) / Ngày hiệu lực từ (null = từ đầu truyện) */
  validFrom: string | null;
  /** Valid to date (null = to present/future) / Ngày hiệu lực đến (null = đến hiện tại/tương lai) */
  validTo: string | null;
  /** Character's appearance description / Mô tả ngoại hình nhân vật */
  appearance: string;
  /** Character's personality description / Mô tả tính cách nhân vật */
  personality: string;
  /** Character's status (e.g., "Alive", "Dead", "Missing") / Trạng thái nhân vật (ví dụ: "Sống", "Chết", "Mất tích") */
  status: string;
  /** Additional notes about this version / Ghi chú thêm về phiên bản này */
  notes: string;
}
