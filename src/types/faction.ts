/**
 * Faction Types / Các kiểu Phái
 *
 * This file contains type definitions for Faction entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Phái.
 */

import type { BaseEntity, TimeRange } from './common';

/**
 * Faction entity / Thực thể Phái
 *
 * Represents a faction or group in the story.
 * Đại diện cho một phái hoặc nhóm trong câu chuyện.
 */
export interface Faction extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'faction';
  /** Time-based attributes / Các thuộc tính dựa trên thời gian */
  attributes: FactionAttribute[];
}

/**
 * Faction attributes with time-based versioning
 * Thuộc tính phái với phiên bản hóa dựa trên thời gian
 */
export interface FactionAttribute {
  /** Time range for this attribute version / Phạm vi thời gian cho phiên bản thuộc tính này */
  timeRange: TimeRange;
  /** Faction type / Loại phái */
  factionType: string;
  /** Faction ideology / Tư tưởng phái */
  ideology: string;
  /** Faction goals / Mục tiêu phái */
  goals: string;
  /** Faction resources / Nguồn lực phái */
  resources: string;
  /** Faction influence / Ảnh hưởng phái */
  influence: string;
  /** Faction members (character IDs) / Thành viên phái (ID nhân vật) */
  members: string[];
  /** Faction leader (character ID) / Lãnh đạo phái (ID nhân vật) */
  leader: string | null;
  /** Faction notes / Ghi chú phái */
  notes: string;
}
