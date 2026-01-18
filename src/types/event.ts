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
 * Represents an event in the story timeline with multiple participants and locations.
 * Đại diện cho một sự kiện trong dòng thời gian câu chuyện với nhiều người tham gia và địa điểm.
 */
export interface Event extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'event';
  /** Event title / Tiêu đề sự kiện */
  title: string;
  /** Event description / Mô tả sự kiện */
  description: string;
  /** Event start date (nullable if unknown) / Ngày bắt đầu sự kiện (null nếu không xác định) */
  startDate: string | null;
  /** Event end date (nullable if unknown or same as start) / Ngày kết thúc sự kiện (null nếu không xác định hoặc giống ngày bắt đầu) */
  endDate: string | null;
  /** Novel ID this event belongs to / ID tiểu thuyết mà sự kiện này thuộc về */
  novelId: string;
  /** Characters participating in this event / Các nhân vật tham gia vào sự kiện này */
  characters: EventCharacter[];
  /** Location IDs where this event occurs (many-to-many) / Các ID địa điểm nơi sự kiện diễn ra (many-to-many) */
  locations: string[];
  /** Factions participating in this event / Các thế lực tham gia vào sự kiện này */
  factions: EventFaction[];
  /** Array of tag IDs assigned to this event / Mảng ID tag được gán cho sự kiện này */
  tags: string[];
}

/**
 * Event character participation / Sự tham gia nhân vật vào sự kiện
 *
 * Represents a character's role and notes in an event.
 * Đại diện cho vai trò và ghi chú của nhân vật trong một sự kiện.
 */
export interface EventCharacter {
  /** Character ID / ID nhân vật */
  characterId: string;
  /** Role of the character in this event (e.g., "Commander", "Participant", "Victim") / Vai trò của nhân vật trong sự kiện này (ví dụ: "Chỉ huy", "Tham gia", "Nạn nhân") */
  role: string;
  /** Notes about this character's participation in the event / Ghi chú về sự tham gia của nhân vật trong sự kiện */
  notes: string;
}

/**
 * Event faction participation / Sự tham gia thế lực vào sự kiện
 *
 * Represents a faction's role and notes in an event.
 * Đại diện cho vai trò và ghi chú của thế lực trong một sự kiện.
 */
export interface EventFaction {
  /** Faction ID / ID thế lực */
  factionId: string;
  /** Role of the faction in this event / Vai trò của thế lực trong sự kiện này */
  role: string;
  /** Notes about this faction's participation in the event / Ghi chú về sự tham gia của thế lực trong sự kiện */
  notes: string;
}
