/**
 * Location Types / Các kiểu Địa điểm
 *
 * This file contains type definitions for Location entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Địa điểm.
 */

import type { BaseEntity, TimeRange } from './common';

/**
 * Location entity / Thực thể Địa điểm
 *
 * Represents a location in the story world.
 * Đại diện cho một địa điểm trong thế giới câu chuyện.
 */
export interface Location extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'location';
  /** Time-based attributes / Các thuộc tính dựa trên thời gian */
  attributes: LocationAttribute[];
}

/**
 * Location attributes with time-based versioning
 * Thuộc tính địa điểm với phiên bản hóa dựa trên thời gian
 */
export interface LocationAttribute {
  /** Time range for this attribute version / Phạm vi thời gian cho phiên bản thuộc tính này */
  timeRange: TimeRange;
  /** Location type / Loại địa điểm */
  locationType: string;
  /** Location climate / Khí hậu địa điểm */
  climate: string;
  /** Location geography / Địa lý địa điểm */
  geography: string;
  /** Location population / Dân số địa điểm */
  population: string;
  /** Location culture / Văn hóa địa điểm */
  culture: string;
  /** Location economy / Kinh tế địa điểm */
  economy: string;
  /** Location government / Chính quyền địa điểm */
  government: string;
  /** Location notes / Ghi chú địa điểm */
  notes: string;
}
