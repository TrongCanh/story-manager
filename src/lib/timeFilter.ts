/**
 * Time-based Data Filtering Utilities / Tiện ích Lọc Dữ liệu dựa trên Thời gian
 *
 * This file provides utilities for filtering time-based entity data.
 * Tệp này cung cấp các tiện ích để lọc dữ liệu thực thể dựa trên thời gian.
 *
 * All entities have versioned attributes that change over time.
 * Tất cả thực thể có các thuộc tính được phiên bản hóa thay đổi theo thời gian.
 */

import type {
  TimeRange,
  Character,
  CharacterAttribute,
  Location,
  LocationAttribute,
  Faction,
  FactionAttribute,
  Relationship,
  RelationshipDetail,
} from '../types';

/**
 * Checks if a time range is active at a given time
 * Kiểm tra xem một phạm vi thời gian có hoạt động tại thời điểm đã cho không
 *
 * @param timeRange - The time range to check / Phạm vi thời gian cần kiểm tra
 * @param time - The time to check against / Thời gian để kiểm tra
 * @returns true if the time range is active at the given time / true nếu phạm vi thời gian hoạt động tại thời điểm đã cho
 */
export function isTimeRangeActive(timeRange: TimeRange, time: string): boolean {
  const fromTime = new Date(timeRange.from).getTime();
  const toTime = timeRange.to ? new Date(timeRange.to).getTime() : Infinity;
  const checkTime = new Date(time).getTime();

  return checkTime >= fromTime && checkTime < toTime;
}

/**
 * Finds the active attribute version for a character at a given time
 * Tìm phiên bản thuộc tính hoạt động cho nhân vật tại thời điểm đã cho
 *
 * @param character - The character entity / Thực thể nhân vật
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns The active character attribute or null if not found / Thuộc tính nhân vật hoạt động hoặc null nếu không tìm thấy
 */
export function getActiveCharacterAttribute(
  character: Character,
  time: string
): CharacterAttribute | null {
  const activeAttribute = character.attributes.find((attr) =>
    isTimeRangeActive(attr.timeRange, time)
  );
  return activeAttribute || null;
}

/**
 * Finds the active attribute version for a location at a given time
 * Tìm phiên bản thuộc tính hoạt động cho địa điểm tại thời điểm đã cho
 *
 * @param location - The location entity / Thực thể địa điểm
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns The active location attribute or null if not found / Thuộc tính địa điểm hoạt động hoặc null nếu không tìm thấy
 */
export function getActiveLocationAttribute(
  location: Location,
  time: string
): LocationAttribute | null {
  const activeAttribute = location.attributes.find((attr) =>
    isTimeRangeActive(attr.timeRange, time)
  );
  return activeAttribute || null;
}

/**
 * Finds the active attribute version for a faction at a given time
 * Tìm phiên bản thuộc tính hoạt động cho phái tại thời điểm đã cho
 *
 * @param faction - The faction entity / Thực thể phái
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns The active faction attribute or null if not found / Thuộc tính phái hoạt động hoặc null nếu không tìm thấy
 */
export function getActiveFactionAttribute(faction: Faction, time: string): FactionAttribute | null {
  const activeAttribute = faction.attributes.find((attr) =>
    isTimeRangeActive(attr.timeRange, time)
  );
  return activeAttribute || null;
}

/**
 * Finds the active relationship detail at a given time
 * Tìm chi tiết mối quan hệ hoạt động tại thời điểm đã cho
 *
 * @param relationship - The relationship entity / Thực thể mối quan hệ
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns The active relationship detail or null if not found / Chi tiết mối quan hệ hoạt động hoặc null nếu không tìm thấy
 */
export function getActiveRelationshipDetail(
  relationship: Relationship,
  time: string
): RelationshipDetail | null {
  const activeDetail = relationship.details.find((detail) =>
    isTimeRangeActive(detail.timeRange, time)
  );
  return activeDetail || null;
}

/**
 * Filters characters to those active at a given time
 * Lọc nhân vật đến những nhân vật hoạt động tại thời điểm đã cho
 *
 * @param characters - Array of characters to filter / Mảng nhân vật để lọc
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns Array of characters with active attributes at the given time / Mảng nhân vật có thuộc tính hoạt động tại thời điểm đã cho
 */
export function filterCharactersByTime(characters: Character[], time: string): Character[] {
  return characters.filter((character) => {
    const activeAttribute = getActiveCharacterAttribute(character, time);
    return activeAttribute !== null;
  });
}

/**
 * Filters locations to those active at a given time
 * Lọc địa điểm đến những địa điểm hoạt động tại thời điểm đã cho
 *
 * @param locations - Array of locations to filter / Mảng địa điểm để lọc
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns Array of locations with active attributes at the given time / Mảng địa điểm có thuộc tính hoạt động tại thời điểm đã cho
 */
export function filterLocationsByTime(locations: Location[], time: string): Location[] {
  return locations.filter((location) => {
    const activeAttribute = getActiveLocationAttribute(location, time);
    return activeAttribute !== null;
  });
}

/**
 * Filters factions to those active at a given time
 * Lọc phái đến những phái hoạt động tại thời điểm đã cho
 *
 * @param factions - Array of factions to filter / Mảng phái để lọc
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns Array of factions with active attributes at the given time / Mảng phái có thuộc tính hoạt động tại thời điểm đã cho
 */
export function filterFactionsByTime(factions: Faction[], time: string): Faction[] {
  return factions.filter((faction) => {
    const activeAttribute = getActiveFactionAttribute(faction, time);
    return activeAttribute !== null;
  });
}

/**
 * Filters relationships to those active at a given time
 * Lọc mối quan hệ đến những mối quan hệ hoạt động tại thời điểm đã cho
 *
 * @param relationships - Array of relationships to filter / Mảng mối quan hệ để lọc
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns Array of relationships with active details at the given time / Mảng mối quan hệ có chi tiết hoạt động tại thời điểm đã cho
 */
export function filterRelationshipsByTime(
  relationships: Relationship[],
  time: string
): Relationship[] {
  return relationships.filter((relationship) => {
    const activeDetail = getActiveRelationshipDetail(relationship, time);
    return activeDetail !== null;
  });
}

/**
 * Filters events to those occurring at or before a given time
 * Lọc sự kiện đến những sự kiện xảy ra tại hoặc trước thời điểm đã cho
 *
 * @param events - Array of events to filter / Mảng sự kiện để lọc
 * @param time - The time to check / Thời gian cần kiểm tra
 * @returns Array of events that have occurred at or before the given time / Mảng sự kiện đã xảy ra tại hoặc trước thời điểm đã cho
 */
export function filterEventsByTime(events: any[], time: string): any[] {
  const checkTime = new Date(time).getTime();
  return events.filter((event) => {
    const eventTime = new Date(event.timestamp).getTime();
    return eventTime <= checkTime;
  });
}

/**
 * Gets all events occurring within a time range
 * Lấy tất cả sự kiện xảy ra trong một phạm vi thời gian
 *
 * @param events - Array of events to filter / Mảng sự kiện để lọc
 * @param from - Start time (inclusive) / Thời gian bắt đầu (bao gồm)
 * @param to - End time (inclusive) / Thời gian kết thúc (bao gồm)
 * @returns Array of events within the time range / Mảng sự kiện trong phạm vi thời gian
 */
export function getEventsInRange(events: any[], from: string, to: string): any[] {
  const fromTime = new Date(from).getTime();
  const toTime = new Date(to).getTime();
  return events.filter((event) => {
    const eventTime = new Date(event.timestamp).getTime();
    return eventTime >= fromTime && eventTime <= toTime;
  });
}

/**
 * Formats a date string for display
 * Định dạng chuỗi ngày tháng để hiển thị
 *
 * @param dateString - The date string to format / Chuỗi ngày tháng cần định dạng
 * @returns Formatted date string / Chuỗi ngày tháng đã định dạng
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Formats a date and time string for display
 * Định dạng chuỗi ngày và giờ để hiển thị
 *
 * @param dateString - The date string to format / Chuỗi ngày tháng cần định dạng
 * @returns Formatted date and time string / Chuỗi ngày và giờ đã định dạng
 */
export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Compares two time strings
 * So sánh hai chuỗi thời gian
 *
 * @param time1 - First time string / Chuỗi thời gian thứ nhất
 * @param time2 - Second time string / Chuỗi thời gian thứ hai
 * @returns -1 if time1 < time2, 0 if equal, 1 if time1 > time2 / -1 nếu time1 < time2, 0 nếu bằng, 1 nếu time1 > time2
 */
export function compareTimes(time1: string, time2: string): number {
  const t1 = new Date(time1).getTime();
  const t2 = new Date(time2).getTime();

  if (t1 < t2) return -1;
  if (t1 > t2) return 1;
  return 0;
}

/**
 * Gets the earliest time from an array of time strings
 * Lấy thời gian sớm nhất từ một mảng chuỗi thời gian
 *
 * @param times - Array of time strings / Mảng chuỗi thời gian
 * @returns The earliest time string / Chuỗi thời gian sớm nhất
 */
export function getEarliestTime(times: string[]): string {
  return times.reduce((earliest, current) =>
    compareTimes(current, earliest) < 0 ? current : earliest
  );
}

/**
 * Gets the latest time from an array of time strings
 * Lấy thời gian muộn nhất từ một mảng chuỗi thời gian
 *
 * @param times - Array of time strings / Mảng chuỗi thời gian
 * @returns The latest time string / Chuỗi thời gian muộn nhất
 */
export function getLatestTime(times: string[]): string {
  return times.reduce((latest, current) => (compareTimes(current, latest) > 0 ? current : latest));
}
