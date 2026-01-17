/**
 * Event Types / Các kiểu Sự kiện
 */
import type { Event } from '../../../types';

/**
 * EventTable Props
 * Props của bảng sự kiện
 */
interface EventTableProps {
  /** Array of events to display / Mảng sự kiện để hiển thị */
  events: Event[];
  /** Function to handle event click / Hàm xử lý khi click vào sự kiện */
  onEventClick?: (eventId: string) => void;
  /** Function to handle edit action / Hàm xử lý hành động sửa */
  onEdit?: (eventId: string) => void;
  /** Function to handle delete action / Hàm xử lý hành động xóa */
  onDelete?: (eventId: string) => void;
}

/**
 * EventTable Component
 * Thành phần Bảng Sự kiện
 *
 * Displays events in a table format with name, timestamp, type, importance, and actions.
 * Hiển thị sự kiện dưới dạng bảng với tên, thời gian, loại, mức độ quan trọng và hành động.
 *
 * Design follows project guidelines:
 * - Clean table layout
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {EventTableProps} props - Component props
 * @returns {React.ReactElement} The event table component
 */
function EventTable({
  events,
  onEventClick,
  onEdit,
  onDelete,
}: EventTableProps): React.ReactElement {
  /**
   * Handle event row click
   * Xử lý khi click vào hàng sự kiện
   *
   * @param eventId - The event ID / ID sự kiện
   * @param event - The click event / Sự kiện click
   */
  const handleRowClick = (eventId: string, event: React.MouseEvent) => {
    // Prevent row click if clicking on action buttons
    // Ngăn chặn click vào hàng khi click vào nút hành động
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    onEventClick?.(eventId);
  };

  /**
   * Handle edit button click
   * Xử lý khi click vào nút sửa
   *
   * @param eventId - The event ID / ID sự kiện
   * @param event - The click event / Sự kiện click
   */
  const handleEditClick = (eventId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit?.(eventId);
  };

  /**
   * Handle delete button click
   * Xử lý khi click vào nút xóa
   *
   * @param eventId - The event ID / ID sự kiện
   * @param event - The click event / Sự kiện click
   */
  const handleDeleteClick = (eventId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete?.(eventId);
  };

  /**
   * Get importance badge color
   * Lấy màu badge mức độ quan trọng
   *
   * @param importance - The importance level / Mức độ quan trọng
   * @returns Tailwind classes for badge / Các class Tailwind cho badge
   */
  const getImportanceBadgeColor = (importance: string): string => {
    switch (importance) {
      case 'low':
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
      case 'medium':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300';
      case 'high':
        return 'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300';
      case 'critical':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  /**
   * Format timestamp for display
   * Định dạng thời gian để hiển thị
   *
   * @param timestamp - The timestamp string / Chuỗi thời gian
   * @returns Formatted date string / Chuỗi ngày đã định dạng
   */
  const formatTimestamp = (timestamp: string): string => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Table Header / Tiêu đề bảng */}
        <thead>
          <tr className="border-b border-emerald-100 dark:border-gray-700">
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Timestamp
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Type
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Importance
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>

        {/* Table Body / Nội dung bảng */}
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No events found
              </td>
            </tr>
          ) : (
            events.map((event) => (
              <tr
                key={event.id}
                onClick={(e) => handleRowClick(event.id, e)}
                className="border-b border-emerald-100 hover:bg-emerald-50 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-gray-800"
              >
                {/* Event Name / Tên sự kiện */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-900 font-medium dark:text-white">
                    {event.name}
                  </span>
                </td>

                {/* Event Timestamp / Thời gian sự kiện */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {formatTimestamp(event.timestamp)}
                  </span>
                </td>

                {/* Event Type / Loại sự kiện */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {event.eventType}
                  </span>
                </td>

                {/* Event Importance / Mức độ quan trọng */}
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceBadgeColor(event.importance)}`}
                  >
                    {event.importance}
                  </span>
                </td>

                {/* Actions / Hành động */}
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {onEdit && (
                      <button
                        onClick={(e) => handleEditClick(event.id, e)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={(e) => handleDeleteClick(event.id, e)}
                        className="px-3 py-1 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EventTable;
