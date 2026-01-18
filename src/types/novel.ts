/**
 * Novel Types / Các kiểu Tiểu thuyết
 *
 * This file contains type definitions for Novel entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Tiểu thuyết.
 */

import type { BaseEntity } from './common';

/**
 * Novel entity / Thực thể Tiểu thuyết
 *
 * Represents a novel/story in the system with ownership and sharing capabilities.
 * Đại diện cho một tiểu thuyết/câu chuyện trong hệ thống với khả năng sở hữu và chia sẻ.
 */
export interface Novel extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'novel';
  /** Cover image URL / URL ảnh bìa */
  coverImage: string | null;
  /** Owner user ID / ID người sở hữu */
  owner: string;
  /** Novel visibility status / Trạng thái hiển thị tiểu thuyết */
  status: NovelStatus;
  /** Array of viewer user IDs / Mảng ID người xem được chia sẻ */
  viewers: string[];
}

/**
 * Novel status enum / Enum trạng thái tiểu thuyết
 *
 * Defines the visibility/access level of the novel.
 * Định nghĩa mức độ hiển thị/truy cập của tiểu thuyết.
 */
export type NovelStatus = 'public' | 'private';

/**
 * Novel sharing role / Vai trò chia sẻ tiểu thuyết
 *
 * Defines the access level for shared users.
 * Định nghĩa mức độ truy cập cho người dùng được chia sẻ.
 */
export type NovelSharingRole = 'owner' | 'viewer';

/**
 * Novel sharing record / Bản ghi chia sẻ tiểu thuyết
 *
 * Represents a sharing relationship between a novel and a user.
 * Đại diện cho mối quan hệ chia sẻ giữa tiểu thuyết và người dùng.
 */
export interface NovelSharing {
  /** Novel ID / ID tiểu thuyết */
  novelId: string;
  /** User ID / ID người dùng */
  userId: string;
  /** Access role / Vai trò truy cập */
  role: NovelSharingRole;
}

/**
 * Novel status constants / Hằng số trạng thái tiểu thuyết
 */
export const NovelStatus = {
  /** Public - accessible to everyone / Công khai - mọi người đều có thể truy cập */
  PUBLIC: 'public' as const,
  /** Private - only owner and viewers can access / Riêng tư - chỉ chủ sở hữu và người xem được chia sẻ có thể truy cập */
  PRIVATE: 'private' as const,
} as const;

/**
 * Novel sharing role constants / Hằng số vai trò chia sẻ tiểu thuyết
 */
export const NovelSharingRole = {
  /** Owner - full control / Chủ sở hữu - kiểm soát đầy đủ */
  OWNER: 'owner' as const,
  /** Viewer - read-only access / Người xem - chỉ đọc */
  VIEWER: 'viewer' as const,
} as const;
