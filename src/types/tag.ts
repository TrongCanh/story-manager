/**
 * Tag Types / Các kiểu Tag
 *
 * This file contains type definitions for Tag entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Tag.
 */

import type { BaseEntity } from './common';

/**
 * Tag entity / Thực thể Tag
 *
 * Represents a tag that can be assigned to various entities within a novel.
 * Tags are shared across the entire novel and can be used for categorization.
 * Đại diện cho một tag có thể được gán cho các thực thể khác nhau trong một tiểu thuyết.
 * Tags được chia sẻ trên toàn bộ tiểu thuyết và có thể được sử dụng để phân loại.
 */
export interface Tag extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'tag';
  /** Tag name / Tên tag */
  name: string;
  /** Tag color in hex format (e.g., #FF5733) for visual distinction / Màu tag theo định dạng hex (ví dụ: #FF5733) để phân biệt trực quan */
  color: string;
  /** Novel ID this tag belongs to / ID tiểu thuyết mà tag này thuộc về */
  novelId: string;
}

/**
 * Taggable entity types / Các loại thực thể có thể gắn tag
 *
 * Defines which entity types can have tags assigned to them.
 * Định nghĩa các loại thực thể có thể được gán tag.
 */
export type TaggableType = 'character' | 'event' | 'location' | 'faction' | 'faction-role';

/**
 * Entity tag association / Liên kết tag với thực thể
 *
 * Represents the relationship between a tag and an entity.
 * Used to track which tags are assigned to which entities.
 * Đại diện cho mối quan hệ giữa một tag và một thực thể.
 * Được sử dụng để theo dõi những tag nào được gán cho thực thể nào.
 */
export interface EntityTag {
  /** Entity ID / ID thực thể */
  entityId: string;
  /** Tag ID / ID tag */
  tagId: string;
  /** Type of entity that can be tagged / Loại thực thể có thể được gán tag */
  taggableType: TaggableType;
}

/**
 * Taggable type constants / Hằng số loại thực thể có thể gắn tag
 */
export const TaggableType = {
  /** Character entity / Thực thể Nhân vật */
  CHARACTER: 'character' as const,
  /** Event entity / Thực thể Sự kiện */
  EVENT: 'event' as const,
  /** Location entity / Thực thể Địa điểm */
  LOCATION: 'location' as const,
  /** Faction entity / Thực thể Thế lực */
  FACTION: 'faction' as const,
  /** Faction role / Vai trò thế lực */
  FACTION_ROLE: 'faction-role' as const,
} as const;
