/**
 * Types Index / Chỉ mục Types
 *
 * This file exports all types from the types directory.
 * Tệp này export tất cả các types từ thư mục types.
 */

// Common types / Các kiểu chung
export type { TimeRange, BaseEntity } from './common';

// Entity types / Các kiểu thực thể
export type { Character, CharacterAttribute } from './character';
export type { Event } from './event';
export type { Location, LocationAttribute } from './location';
export type { Faction, FactionAttribute } from './faction';
export type { Relationship, RelationshipDetail } from './relationship';
export type { Timeline, TimelineEvent } from './timeline';

// Union type for all entities / Kiểu hợp nhất cho tất cả thực thể
import type { Character } from './character';
import type { Event as EventType } from './event';
import type { Location } from './location';
import type { Faction } from './faction';
import type { Relationship } from './relationship';

export type Entity = Character | EventType | Location | Faction | Relationship;

/**
 * Entity type constants
 * Hằng số loại thực thể
 */
export const EntityType = {
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
