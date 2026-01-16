/**
 * Data Context / Ngữ cảnh Dữ liệu
 *
 * This context provides mock data and time-based filtering to application.
 * Ngữ cảnh này cung cấp dữ liệu mock và lọc dựa trên thời gian cho ứng dụng.
 *
 * All entities are time-based with versioned attributes.
 * Tất cả thực thể đều dựa trên thời gian với các thuộc tính được phiên bản hóa.
 */

import React, { createContext, useState, useCallback, type ReactNode } from 'react';
import type { Character, Event, Location, Faction, Relationship, Timeline } from '../types';
import { mockData } from '../lib/mockData';
import {
  getActiveCharacterAttribute,
  getActiveLocationAttribute,
  getActiveFactionAttribute,
  getActiveRelationshipDetail,
  filterCharactersByTime,
  filterLocationsByTime,
  filterFactionsByTime,
  filterRelationshipsByTime,
  filterEventsByTime,
} from '../lib/timeFilter';

/**
 * Data context interface
 * Giao diện ngữ cảnh dữ liệu
 */
export interface DataContextValue {
  // Current effective time / Thời gian hiệu lực hiện tại
  currentTime: string;
  // Set current effective time / Đặt thời gian hiệu lực hiện tại
  setCurrentTime: (time: string) => void;
  // Navigate back in time / Điều hướng ngược thời gian
  goBack: () => void;
  // Navigate forward in time / Điều hướng tiến thời gian
  goForward: () => void;
  // Can navigate back / Có thể điều hướng ngược
  canGoBack: boolean;
  // Can navigate forward / Có thể điều hướng tiến
  canGoForward: boolean;

  // All characters (unfiltered) / Tất cả nhân vật (chưa lọc)
  characters: Character[];
  // Characters active at current time / Nhân vật hoạt động tại thời gian hiện tại
  activeCharacters: Character[];
  // Get character with active attributes / Lấy nhân vật với thuộc tính hoạt động
  getCharacterWithActiveAttribute: (characterId: string) => Character | null;

  // All events (unfiltered) / Tất cả sự kiện (chưa lọc)
  events: Event[];
  // Events at or before current time / Sự kiện tại hoặc trước thời gian hiện tại
  activeEvents: Event[];

  // All locations (unfiltered) / Tất cả địa điểm (chưa lọc)
  locations: Location[];
  // Locations active at current time / Địa điểm hoạt động tại thời gian hiện tại
  activeLocations: Location[];
  // Get location with active attributes / Lấy địa điểm với thuộc tính hoạt động
  getLocationWithActiveAttribute: (locationId: string) => Location | null;

  // All factions (unfiltered) / Tất cả phái (chưa lọc)
  factions: Faction[];
  // Factions active at current time / Phái hoạt động tại thời gian hiện tại
  activeFactions: Faction[];
  // Get faction with active attributes / Lấy phái với thuộc tính hoạt động
  getFactionWithActiveAttribute: (factionId: string) => Faction | null;

  // All relationships (unfiltered) / Tất cả mối quan hệ (chưa lọc)
  relationships: Relationship[];
  // Relationships active at current time / Mối quan hệ hoạt động tại thời gian hiện tại
  activeRelationships: Relationship[];
  // Get relationship with active details / Lấy mối quan hệ với chi tiết hoạt động
  getRelationshipWithActiveDetail: (relationshipId: string) => Relationship | null;

  // Timeline / Dòng thời gian
  timeline: Timeline;
}

/**
 * Create the data context
 * Tạo ngữ cảnh dữ liệu
 */
const DataContext = createContext<DataContextValue | undefined>(undefined);

/**
 * Data Provider props
 * Props của Data Provider
 */
interface DataProviderProps {
  children: ReactNode;
}

/**
 * Data Provider component
 * Thành phần Data Provider
 *
 * Provides mock data and time-based filtering to child components.
 * Cung cấp dữ liệu mock và lọc dựa trên thời gian cho các thành phần con.
 *
 * @param props - Component props / Props của thành phần
 * @returns Data provider wrapper / Wrapper của data provider
 */
export function DataProvider({ children }: DataProviderProps): ReactNode {
  // Current effective time state / Trạng thái thời gian hiệu lực hiện tại
  const [currentTime, setCurrentTime] = useState<string>('2024-01-01T00:00:00Z');

  // Time navigation history / Lịch sử điều hướng thời gian
  const [history, setHistory] = useState<string[]>(['2024-01-01T00:00:00Z']);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  /**
   * Set current time and update history
   * Đặt thời gian hiện tại và cập nhật lịch sử
   *
   * @param time - The new time / Thời gian mới
   */
  const handleSetCurrentTime = useCallback(
    (time: string) => {
      setCurrentTime(time);
      setHistory((prev) => {
        const newHistory = prev.slice(0, historyIndex + 1);
        newHistory.push(time);
        return newHistory;
      });
      setHistoryIndex((prev) => prev + 1);
    },
    [historyIndex]
  );

  /**
   * Navigate back in time
   * Điều hướng ngược thời gian
   */
  const goBack = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setCurrentTime(history[newIndex]);
    }
  }, [history, historyIndex]);

  /**
   * Navigate forward in time
   * Điều hướng tiến thời gian
   */
  const goForward = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setCurrentTime(history[newIndex]);
    }
  }, [history, historyIndex]);

  /**
   * Get character with active attributes at current time
   * Lấy nhân vật với thuộc tính hoạt động tại thời gian hiện tại
   *
   * @param characterId - The character ID / ID nhân vật
   * @returns Character with active attribute or null / Nhân vật với thuộc tính hoạt động hoặc null
   */
  const getCharacterWithActiveAttribute = useCallback(
    (characterId: string): Character | null => {
      const character = mockData.characters.find((c) => c.id === characterId);
      if (!character) return null;

      const activeAttribute = getActiveCharacterAttribute(character, currentTime);
      if (!activeAttribute) return null;

      return character;
    },
    [currentTime]
  );

  /**
   * Get location with active attributes at current time
   * Lấy địa điểm với thuộc tính hoạt động tại thời gian hiện tại
   *
   * @param locationId - The location ID / ID địa điểm
   * @returns Location with active attribute or null / Địa điểm với thuộc tính hoạt động hoặc null
   */
  const getLocationWithActiveAttribute = useCallback(
    (locationId: string): Location | null => {
      const location = mockData.locations.find((l) => l.id === locationId);
      if (!location) return null;

      const activeAttribute = getActiveLocationAttribute(location, currentTime);
      if (!activeAttribute) return null;

      return location;
    },
    [currentTime]
  );

  /**
   * Get faction with active attributes at current time
   * Lấy phái với thuộc tính hoạt động tại thời gian hiện tại
   *
   * @param factionId - The faction ID / ID phái
   * @returns Faction with active attribute or null / Phái với thuộc tính hoạt động hoặc null
   */
  const getFactionWithActiveAttribute = useCallback(
    (factionId: string): Faction | null => {
      const faction = mockData.factions.find((f) => f.id === factionId);
      if (!faction) return null;

      const activeAttribute = getActiveFactionAttribute(faction, currentTime);
      if (!activeAttribute) return null;

      return faction;
    },
    [currentTime]
  );

  /**
   * Get relationship with active details at current time
   * Lấy mối quan hệ với chi tiết hoạt động tại thời gian hiện tại
   *
   * @param relationshipId - The relationship ID / ID mối quan hệ
   * @returns Relationship with active detail or null / Mối quan hệ với chi tiết hoạt động hoặc null
   */
  const getRelationshipWithActiveDetail = useCallback(
    (relationshipId: string): Relationship | null => {
      const relationship = mockData.relationships.find((r) => r.id === relationshipId);
      if (!relationship) return null;

      const activeDetail = getActiveRelationshipDetail(relationship, currentTime);
      if (!activeDetail) return null;

      return relationship;
    },
    [currentTime]
  );

  // Compute active entities based on current time / Tính toán thực thể hoạt động dựa trên thời gian hiện tại
  const activeCharacters = filterCharactersByTime(mockData.characters, currentTime);
  const activeEvents = filterEventsByTime(mockData.events, currentTime);
  const activeLocations = filterLocationsByTime(mockData.locations, currentTime);
  const activeFactions = filterFactionsByTime(mockData.factions, currentTime);
  const activeRelationships = filterRelationshipsByTime(mockData.relationships, currentTime);

  // Context value / Giá trị ngữ cảnh
  const value: DataContextValue = {
    // Time state / Trạng thái thời gian
    currentTime,
    setCurrentTime: handleSetCurrentTime,
    goBack,
    goForward,
    canGoBack: historyIndex > 0,
    canGoForward: historyIndex < history.length - 1,

    // Characters / Nhân vật
    characters: mockData.characters,
    activeCharacters,
    getCharacterWithActiveAttribute,

    // Events / Sự kiện
    events: mockData.events,
    activeEvents,

    // Locations / Địa điểm
    locations: mockData.locations,
    activeLocations,
    getLocationWithActiveAttribute,

    // Factions / Phái
    factions: mockData.factions,
    activeFactions,
    getFactionWithActiveAttribute,

    // Relationships / Mối quan hệ
    relationships: mockData.relationships,
    activeRelationships,
    getRelationshipWithActiveDetail,

    // Timeline / Dòng thời gian
    timeline: mockData.timeline,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

/**
 * Export DataContext for use in hooks
 * Export DataContext để sử dụng trong hooks
 */
export { DataContext };
