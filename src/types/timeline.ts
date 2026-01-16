/**
 * Timeline Types / Các kiểu Dòng thời gian
 *
 * This file contains type definitions for Timeline entities.
 * Tệp này chứa các định nghĩa kiểu cho thực thể Dòng thời gian.
 */

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
