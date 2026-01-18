/**
 * Location Types / Các kiểu Địa điểm
 */
import type { Location } from '../../../types';

/**
 * LocationTable Props
 * Props của bảng địa điểm
 */
interface LocationTableProps {
  /** Array of locations to display / Mảng địa điểm để hiển thị */
  locations: Location[];
  /** Function to handle location click / Hàm xử lý khi click vào địa điểm */
  onLocationClick?: (locationId: string) => void;
  /** Function to handle edit action / Hàm xử lý hành động sửa */
  onEdit?: (locationId: string) => void;
  /** Function to handle delete action / Hàm xử lý hành động xóa */
  onDelete?: (locationId: string) => void;
}

/**
 * LocationTable Component
 * Thành phần Bảng Địa điểm
 *
 * Displays locations in a table format with name, description, type, and actions.
 * Hiển thị địa điểm dưới dạng bảng với tên, mô tả, loại và hành động.
 *
 * Design follows project guidelines:
 * - Clean table layout
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {LocationTableProps} props - Component props
 * @returns {React.ReactElement} The location table component
 */
function LocationTable({
  locations,
  onLocationClick,
  onEdit,
  onDelete,
}: LocationTableProps): React.ReactElement {
  /**
   * Handle location row click
   * Xử lý khi click vào hàng địa điểm
   *
   * @param locationId - The location ID / ID địa điểm
   * @param event - The click event / Sự kiện click
   */
  const handleRowClick = (locationId: string, event: React.MouseEvent) => {
    // Prevent row click if clicking on action buttons
    // Ngăn chặn click vào hàng khi click vào nút hành động
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    onLocationClick?.(locationId);
  };

  /**
   * Handle edit button click
   * Xử lý khi click vào nút sửa
   *
   * @param locationId - The location ID / ID địa điểm
   * @param event - The click event / Sự kiện click
   */
  const handleEditClick = (locationId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit?.(locationId);
  };

  /**
   * Handle delete button click
   * Xử lý khi click vào nút xóa
   *
   * @param locationId - The location ID / ID địa điểm
   * @param event - The click event / Sự kiện click
   */
  const handleDeleteClick = (locationId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete?.(locationId);
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
              Description
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Type
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>

        {/* Table Body / Nội dung bảng */}
        <tbody>
          {locations.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No locations found
              </td>
            </tr>
          ) : (
            locations.map((location) => (
              <tr
                key={location.id}
                onClick={(e) => handleRowClick(location.id, e)}
                className="border-b border-emerald-100 hover:bg-emerald-50 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-gray-800"
              >
                {/* Location Name / Tên địa điểm */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-900 font-medium dark:text-white">
                    {location.name}
                  </span>
                </td>

                {/* Location Description / Mô tả địa điểm */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {location.description}
                  </span>
                </td>

                {/* Location Type / Loại địa điểm */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {location.attributes[location.attributes.length - 1]?.locationType || '-'}
                  </span>
                </td>

                {/* Actions / Hành động */}
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {onEdit && (
                      <button
                        onClick={(e) => handleEditClick(location.id, e)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={(e) => handleDeleteClick(location.id, e)}
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

export default LocationTable;
