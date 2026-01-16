/**
 * Relationship Types / Các kiểu Mối quan hệ
 *
 * This file contains type definitions for Relationship entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Mối quan hệ.
 */

import type { BaseEntity, TimeRange } from './common';

/**
 * Relationship entity / Thực thể Mối quan hệ
 *
 * Represents a relationship between two entities.
 * Đại diện cho mối quan hệ giữa hai thực thể.
 */
export interface Relationship extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'relationship';
  /** First entity ID / ID thực thể thứ nhất */
  entity1Id: string;
  /** Second entity ID / ID thực thể thứ hai */
  entity2Id: string;
  /** Time-based relationship details / Chi tiết mối quan hệ dựa trên thời gian */
  details: RelationshipDetail[];
}

/**
 * Relationship details with time-based versioning
 * Chi tiết mối quan hệ với phiên bản hóa dựa trên thời gian
 */
export interface RelationshipDetail {
  /** Time range for this relationship version / Phạm vi thời gian cho phiên bản mối quan hệ này */
  timeRange: TimeRange;
  /** Relationship type / Loại mối quan hệ */
  relationshipType: string;
  /** Relationship description / Mô tả mối quan hệ */
  description: string;
  /** Relationship status / Trạng thái mối quan hệ */
  status: 'active' | 'inactive' | 'complicated' | 'hostile' | 'allied';
  /** Relationship strength / Mức độ mối quan hệ */
  strength: number;
}
