/**
 * Faction Types / Các kiểu Thế lực
 *
 * This file contains type definitions for Faction entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Thế lực.
 */

import type { BaseEntity } from './common';

/**
 * Faction entity / Thực thể Thế lực
 *
 * Represents a faction or group in story with versioned attributes and memberships.
 * Đại diện cho một thế lực hoặc nhóm trong câu chuyện với các thuộc tính được phiên bản hóa và thành viên.
 */
export interface Faction extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'faction';
  /** Novel ID this faction belongs to / ID tiểu thuyết mà thế lực này thuộc về */
  novelId: string;
  /** Faction versions with time-based attributes / Các phiên bản thế lực với thuộc tính dựa trên thời gian */
  versions: FactionVersion[];
  /** Faction memberships / Các thành viên của thế lực */
  members: FactionMembership[];
  /** Array of tag IDs assigned to this faction / Mảng ID tag được gán cho thế lực này */
  tags: string[];
}

/**
 * Faction version with time-based attributes
 * Phiên bản thế lực với các thuộc tính dựa trên thời gian
 *
 * Represents a faction's state during a specific time period.
 * Đại diện cho trạng thái của thế lực trong một khoảng thời gian cụ thể.
 */
export interface FactionVersion {
  /** Unique identifier for this version / Định danh duy nhất cho phiên bản này */
  id: string;
  /** Valid from date (null = from beginning of story) / Ngày hiệu lực từ (null = từ đầu truyện) */
  validFrom: string | null;
  /** Valid to date (null = to present/future) / Ngày hiệu lực đến (null = đến hiện tại/tương lai) */
  validTo: string | null;
  /** Faction description / Mô tả thế lực */
  description: string;
  /** Faction status (e.g., "Active", "Disbanded") / Trạng thái thế lực (ví dụ: "Hoạt động", "Giải tán") */
  status: string;
}

/**
 * Faction membership / Thành viên thế lực
 *
 * Represents a character's membership in a faction with time-based roles.
 * Characters can join and leave factions multiple times.
 * Đại diện cho tư cách thành viên của nhân vật trong thế lực với các vai trò dựa trên thời gian.
 * Nhân vật có thể tham gia và rời khỏi thế lực nhiều lần.
 */
export interface FactionMembership {
  /** Unique identifier for this membership / Định danh duy nhất cho tư cách thành viên này */
  id: string;
  /** Character ID / ID nhân vật */
  characterId: string;
  /** Date when character joined (null if unknown) / Ngày khi nhân vật tham gia (null nếu không xác định) */
  joinedDate: string | null;
  /** Date when character left (null if still a member) / Ngày khi nhân vật rời đi (null nếu vẫn là thành viên) */
  leftDate: string | null;
  /** Notes about this membership / Ghi chú về tư cách thành viên này */
  notes: string;
  /** Roles that changed over time / Các vai trò thay đổi theo thời gian */
  roles: FactionRole[];
}

/**
 * Faction role with time-based attributes
 * Vai trò thế lực với các thuộc tính dựa trên thời gian
 *
 * Represents a character's role within a faction during a specific time period.
 * Roles are managed through Tags with versioning.
 * Đại diện cho vai trò của nhân vật trong thế lực trong một khoảng thời gian cụ thể.
 * Vai trò được quản lý qua Tags với phiên bản hóa.
 */
export interface FactionRole {
  /** Unique identifier for this role / Định danh duy nhất cho vai trò này */
  id: string;
  /** Valid from date (null = from beginning of membership) / Ngày hiệu lực từ (null = từ đầu khi tham gia) */
  validFrom: string | null;
  /** Valid to date (null = to end of membership) / Ngày hiệu lực đến (null = đến hết tư cách thành viên) */
  validTo: string | null;
  /** Role name (managed through Tags) / Tên vai trò (được quản lý qua Tags) */
  roleName: string;
}
