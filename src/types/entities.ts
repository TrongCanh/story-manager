/**
 * Entity Types / Các kiểu Thực thể
 *
 * This file defines TypeScript types for all domain entities.
 * Tệp này định nghĩa các kiểu TypeScript cho tất cả thực thể domain.
 *
 * All entities are time-based with versioned attributes.
 * Tất cả thực thể đều dựa trên thời gian với các thuộc tính được phiên bản hóa.
 */

/**
 * Time range for versioned attributes
 * Phạm vi thời gian cho các thuộc tính được phiên bản hóa
 */
export interface TimeRange {
  /** Start time (inclusive) / Thời gian bắt đầu (bao gồm) */
  from: string;
  /** End time (exclusive, null means ongoing) / Thời gian kết thúc (không bao gồm, null nghĩa là đang diễn ra) */
  to: string | null;
}

/**
 * Base entity interface with common properties
 * Giao diện thực thể cơ bản với các thuộc tính chung
 */
export interface BaseEntity {
  /** Unique identifier / Định danh duy nhất */
  id: string;
  /** Name of the entity / Tên thực thể */
  name: string;
  /** Description of the entity / Mô tả thực thể */
  description: string;
  /** Creation timestamp / Thời gian tạo */
  createdAt: string;
  /** Last update timestamp / Thời gian cập nhật cuối cùng */
  updatedAt: string;
}

/**
 * Character entity / Thực thể Nhân vật
 *
 * Represents a character in the story with time-based attributes.
 * Đại diện cho một nhân vật trong câu chuyện với các thuộc tính dựa trên thời gian.
 */
export interface Character extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'character';
  /** Time-based attributes / Các thuộc tính dựa trên thời gian */
  attributes: CharacterAttribute[];
}

/**
 * Character attributes with time-based versioning
 * Thuộc tính nhân vật với phiên bản hóa dựa trên thời gian
 */
export interface CharacterAttribute {
  /** Time range for this attribute version / Phạm vi thời gian cho phiên bản thuộc tính này */
  timeRange: TimeRange;
  /** Character's role / Vai trò nhân vật */
  role: string;
  /** Character's age / Tuổi nhân vật */
  age: number | null;
  /** Character's gender / Giới tính nhân vật */
  gender: string;
  /** Character's appearance / Ngoại hình nhân vật */
  appearance: string;
  /** Character's personality / Tính cách nhân vật */
  personality: string;
  /** Character's background / Tiền cảnh nhân vật */
  background: string;
  /** Character's goals / Mục tiêu nhân vật */
  goals: string;
  /** Character's flaws / Khuyết điểm nhân vật */
  flaws: string;
  /** Character's skills / Kỹ năng nhân vật */
  skills: string;
  /** Character's notes / Ghi chú nhân vật */
  notes: string;
}

/**
 * Event entity / Thực thể Sự kiện
 *
 * Represents an event in the story timeline.
 * Đại diện cho một sự kiện trong dòng thời gian câu chuyện.
 */
export interface Event extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'event';
  /** Event timestamp / Thời gian sự kiện */
  timestamp: string;
  /** Event location ID / ID địa điểm sự kiện */
  locationId: string | null;
  /** Event type / Loại sự kiện */
  eventType: string;
  /** Event importance / Mức độ quan trọng sự kiện */
  importance: 'low' | 'medium' | 'high' | 'critical';
  /** Event participants (character IDs) / Người tham gia sự kiện (ID nhân vật) */
  participants: string[];
  /** Event outcome / Kết quả sự kiện */
  outcome: string;
  /** Event impact / Tác động sự kiện */
  impact: string;
}

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

/**
 * Faction entity / Thực thể Phái
 *
 * Represents a faction or group in the story.
 * Đại diện cho một phái hoặc nhóm trong câu chuyện.
 */
export interface Faction extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'faction';
  /** Time-based attributes / Các thuộc tính dựa trên thời gian */
  attributes: FactionAttribute[];
}

/**
 * Faction attributes with time-based versioning
 * Thuộc tính phái với phiên bản hóa dựa trên thời gian
 */
export interface FactionAttribute {
  /** Time range for this attribute version / Phạm vi thời gian cho phiên bản thuộc tính này */
  timeRange: TimeRange;
  /** Faction type / Loại phái */
  factionType: string;
  /** Faction ideology / Tư tưởng phái */
  ideology: string;
  /** Faction goals / Mục tiêu phái */
  goals: string;
  /** Faction resources / Nguồn lực phái */
  resources: string;
  /** Faction influence / Ảnh hưởng phái */
  influence: string;
  /** Faction members (character IDs) / Thành viên phái (ID nhân vật) */
  members: string[];
  /** Faction leader (character ID) / Lãnh đạo phái (ID nhân vật) */
  leader: string | null;
  /** Faction notes / Ghi chú phái */
  notes: string;
}

/**
 * Relationship entity / Thực thể Mối quan hệ
 *
 * Represents a relationship between two entities.
 * Đại diện cho mối quan hệ giữa hai thực thể.
 */
export interface Relationship extends BaseEntity {
  /** Type of entity / Loại thực thể */
  type: 'relationship';
  /** First entity ID / ID thực thể đầu tiên */
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

/**
 * Timeline type / Kiểu Dòng thời gian
 *
 * Represents the narrative timeline.
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
export type Entity = Character | Event | Location | Faction | Relationship;

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
