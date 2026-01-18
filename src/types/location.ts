/**
 * Location Types / Các kiểu Địa điểm
 *
 * This file contains type definitions for Location entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Địa điểm.
 */

import type { BaseEntity } from './common';

/**
 * Location entity / Thực thể Địa điểm
 *
 * Represents a location in the story world with versioned attributes.
 * Đại diện cho một địa điểm trong thế giới câu chuyện với các thuộc tính được phiên bản hóa.
 */
export interface Location extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'location';
  /** Novel ID this location belongs to / ID tiểu thuyết mà địa điểm này thuộc về */
  novelId: string;
  /** Location versions with time-based attributes / Các phiên bản địa điểm với thuộc tính dựa trên thời gian */
  versions: LocationVersion[];
  /** Array of tag IDs assigned to this location / Mảng ID tag được gán cho địa điểm này */
  tags: string[];
}

/**
 * Location version with time-based attributes
 * Phiên bản địa điểm với các thuộc tính dựa trên thời gian
 *
 * Represents a location's state during a specific time period.
 * Đại diện cho trạng thái của địa điểm trong một khoảng thời gian cụ thể.
 */
export interface LocationVersion {
  /** Unique identifier for this version / Định danh duy nhất cho phiên bản này */
  id: string;
  /** Valid from date (null = from beginning of story) / Ngày hiệu lực từ (null = từ đầu truyện) */
  validFrom: string | null;
  /** Valid to date (null = to present/future) / Ngày hiệu lực đến (null = đến hiện tại/tương lai) */
  validTo: string | null;
  /** Location description / Mô tả địa điểm */
  description: string;
  /** Location features/characteristics / Đặc điểm/đặc tính của địa điểm */
  features: string;
}
