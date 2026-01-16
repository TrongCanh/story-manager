/**
 * Data Hooks / Hooks Dữ liệu
 *
 * This file provides custom hooks for accessing data context.
 * Tệp này cung cấp các hook tùy chỉnh để truy cập ngữ cảnh dữ liệu.
 */

import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import type { DataContextValue } from '../context/DataContext';
import { formatDateTime } from '../lib/timeFilter';

/**
 * Custom hook to use data context
 * Hook tùy chỉnh để sử dụng ngữ cảnh dữ liệu
 *
 * @returns The data context value / Giá trị ngữ cảnh dữ liệu
 * @throws Error if used outside of DataProvider / Lỗi nếu sử dụng ngoài DataProvider
 */
export function useDataContext(): DataContextValue {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
}

/**
 * Custom hook to get current effective time
 * Hook tùy chỉnh để lấy thời gian hiệu lực hiện tại
 *
 * @returns Current time and formatted time / Thời gian hiện tại và thời gian đã định dạng
 */
export function useCurrentTime() {
  const { currentTime, setCurrentTime, goBack, goForward, canGoBack, canGoForward } =
    useDataContext();

  return {
    currentTime,
    setCurrentTime,
    goBack,
    goForward,
    canGoBack,
    canGoForward,
    formattedTime: formatDateTime(currentTime),
  };
}
