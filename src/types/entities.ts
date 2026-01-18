/**
 * Entity Types / Các kiểu Thực thể
 *
 * This file re-exports all domain entity types and defines common constants.
 * Tệp này xuất lại tất cả các kiểu thực thể domain và định nghĩa các hằng số chung.
 *
 * All entities are time-based with versioned attributes.
 * Tất cả thực thể đều dựa trên thời gian với các thuộc tính được phiên bản hóa.
 */

import type { Novel } from './novel';
import type { Character, CharacterVersion } from './character';
import type { Event, EventCharacter, EventFaction } from './event';
import type { Location, LocationVersion } from './location';
import type { Faction, FactionVersion, FactionMembership, FactionRole } from './faction';
import type { Relationship, RelationshipPeriod } from './relationship';
import type { Tag, TaggableType, EntityTag } from './tag';

/**
 * Time range for versioned attributes
 * Phạm vi thời gian cho các thuộc tính được phiên bản hóa
 *
 * Re-exported from common.ts for backward compatibility.
 * Được xuất lại từ common.ts để tương thích ngược.
 */
export type { TimeRange } from './common';

/**
 * Base entity interface with common properties
 * Giao diện thực thể cơ bản với các thuộc tính chung
 *
 * Re-exported from common.ts for backward compatibility.
 * Được xuất lại từ common.ts để tương thích ngược.
 */
export type { BaseEntity } from './common';

/**
 * Novel entity / Thực thể Tiểu thuyết
 */
export type { Novel, NovelSharing } from './novel';
export { NovelStatus, NovelSharingRole } from './novel';

/**
 * Character entity / Thực thể Nhân vật
 */
export type { Character, CharacterVersion } from './character';

/**
 * Event entity / Thực thể Sự kiện
 */
export type { Event, EventCharacter, EventFaction } from './event';

/**
 * Location entity / Thực thể Địa điểm
 */
export type { Location, LocationVersion } from './location';

/**
 * Faction entity / Thực thể Thế lực
 */
export type { Faction, FactionVersion, FactionMembership, FactionRole } from './faction';

/**
 * Relationship entity / Thực thể Mối quan hệ
 */
export type { Relationship, RelationshipPeriod } from './relationship';

/**
 * Tag entity / Thực thể Tag
 */
export type { Tag, EntityTag } from './tag';
export { TaggableType } from './tag';

/**
 * Timeline type / Kiểu Dòng thời gian
 *
 * Represents narrative timeline.
 * Đại diện cho dòng thời gian kể chuyện.
 */
export interface Timeline {
  /** Timeline ID / ID dòng thời gian */
  id: string;
  /** Timeline name / Tên dòng thời gian */
  name: string;
  /** Timeline start date / Ngày bắt đầu dòng thời gian */
  startDate: string;
  /** Timeline end date / Ngày kết thúc dòng thời gian */
  endDate: string;
  /** Timeline events / Các sự kiện dòng thời gian */
  events: TimelineEvent[];
}

/**
 * Timeline event / Sự kiện dòng thời gian
 *
 * Represents an event on the timeline.
 * Đại diện cho một sự kiện trên dòng thời gian.
 */
export interface TimelineEvent {
  /** Event ID / ID sự kiện */
  id: string;
  /** Event timestamp / Thời gian sự kiện */
  timestamp: string;
  /** Event title / Tiêu đề sự kiện */
  title: string;
  /** Event description / Mô tả sự kiện */
  description: string;
  /** Related event ID / ID sự kiện liên quan */
  eventId: string;
}

/**
 * Current effective time state
 * Trạng thái thời gian hiệu lực hiện tại
 */
export interface EffectiveTimeState {
  /** Current effective time / Thời gian hiệu lực hiện tại */
  currentTime: string;
  /** Time navigation history / Lịch sử điều hướng thời gian */
  history: string[];
  /** History index / Chỉ số lịch sử */
  historyIndex: number;
}

/**
 * Union type for all entities
 * Kiểu hợp nhất cho tất cả thực thể
 */
export type Entity = Novel | Character | Event | Location | Faction | Relationship;

/**
 * Entity type constants
 * Hằng số loại thực thể
 */
export const EntityType = {
  NOVEL: 'novel',
  CHARACTER: 'character',
  EVENT: 'event',
  LOCATION: 'location',
  FACTION: 'faction',
  RELATIONSHIP: 'relationship',
} as const;

/**
 * Entity type values
 * Giá trị loại thực thể
 */
export type EntityTypeValue = (typeof EntityType)[keyof typeof EntityType];
