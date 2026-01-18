/**
 * Types Index / Chỉ mục Types
 *
 * This file exports all types from types directory.
 * Tệp này export tất cả các types từ thư mục types.
 */

// Common types / Các kiểu chung
export type { TimeRange, BaseEntity } from './common';

// Novel types / Các kiểu Tiểu thuyết
export type { Novel, NovelSharing } from './novel';
export { NovelStatus, NovelSharingRole } from './novel';

// Character types / Các kiểu Nhân vật
export type { Character, CharacterVersion } from './character';

// Event types / Các kiểu Sự kiện
export type { Event, EventCharacter, EventFaction } from './event';

// Location types / Các kiểu Địa điểm
export type { Location, LocationVersion } from './location';

// Faction types / Các kiểu Thế lực
export type { Faction, FactionVersion, FactionMembership, FactionRole } from './faction';

// Relationship types / Các kiểu Mối quan hệ
export type { Relationship, RelationshipPeriod } from './relationship';

// Tag types / Các kiểu Tag
export type { Tag, EntityTag } from './tag';
export { TaggableType } from './tag';

// Timeline types / Các kiểu Dòng thời gian
export type { Timeline, TimelineEvent } from './timeline';

// All entity types / Tất cả các kiểu thực thể
export type { Entity, EntityTypeValue } from './entities';
export { EntityType } from './entities';

// Effective time state / Trạng thái thời gian hiệu lực
export type { EffectiveTimeState } from './entities';
