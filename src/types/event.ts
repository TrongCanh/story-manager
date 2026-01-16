/**
 * Event Types / Các kiểu Sự kiện
 *
 * This file contains type definitions for Event entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Sự kiện.
 */

import type { BaseEntity } from './common';

/**
 * Event entity / Thực thể Sự kiện
 *
 * Represents an event in the story timeline.
 * Đại diện cho một sự kiện trong dòng thời gian câu chuyện.
 */
export interface Event extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'event';
  /** Event timestamp / Thời gian sự kiện */
  timestamp: string;
  /** Event location ID / ID địa điểm sự kiện */
  locationId: string | null;
  /** Event type / Loại sự kiện */
  eventType: string;
  /** Event importance / Mức độ quan trọng sự kiện */
  importance: 'low' | 'medium' | 'high' | 'critical';
  /** Event participants (character IDs) / Người tham gia sự kiện (ID nhân vật) */
  participants: string[];
  /** Event outcome / Kết quả sự kiện */
  outcome: string;
  /** Event impact / Tác động sự kiện */
  impact: string;
}
