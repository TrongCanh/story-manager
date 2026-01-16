/**
 * Character Types / Các kiểu Nhân vật
 *
 * This file contains type definitions for Character entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Nhân vật.
 */

import type { BaseEntity, TimeRange } from './common';

/**
 * Character entity / Thực thể Nhân vật
 *
 * Represents a character in the story with time-based attributes.
 * Đại diện cho một nhân vật trong câu chuyện với các thuộc tính dựa trên thời gian.
 */
export interface Character extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'character';
  /** Time-based attributes / Các thuộc tính dựa trên thời gian */
  attributes: CharacterAttribute[];
}

/**
 * Character attributes with time-based versioning
 * Thuộc tính nhân vật với phiên bản hóa dựa trên thời gian
 */
export interface CharacterAttribute {
  /** Time range for this attribute version / Phạm vi thời gian cho phiên bản thuộc tính này */
  timeRange: TimeRange;
  /** Character's role / Vai trò nhân vật */
  role: string;
  /** Character's age / Tuổi nhân vật */
  age: number | null;
  /** Character's gender / Giới tính nhân vật */
  gender: string;
  /** Character's appearance / Ngoại hình nhân vật */
  appearance: string;
  /** Character's personality / Tính cách nhân vật */
  personality: string;
  /** Character's background / Tiền cảnh nhân vật */
  background: string;
  /** Character's goals / Mục tiêu nhân vật */
  goals: string;
  /** Character's flaws / Khuyết điểm nhân vật */
  flaws: string;
  /** Character's skills / Kỹ năng nhân vật */
  skills: string;
  /** Character's notes / Ghi chú nhân vật */
  notes: string;
}
