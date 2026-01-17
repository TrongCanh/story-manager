/**
 * Character Types / Các kiểu Nhân vật
 */
import type { Character } from '../../../types';

/**
 * CharacterTable Props
 * Props của bảng nhân vật
 */
interface CharacterTableProps {
  /** Array of characters to display / Mảng nhân vật để hiển thị */
  characters: Character[];
  /** Function to handle character click / Hàm xử lý khi click vào nhân vật */
  onCharacterClick?: (characterId: string) => void;
  /** Function to handle edit action / Hàm xử lý hành động sửa */
  onEdit?: (characterId: string) => void;
  /** Function to handle delete action / Hàm xử lý hành động xóa */
  onDelete?: (characterId: string) => void;
}

/**
 * CharacterTable Component
 * Thành phần Bảng Nhân vật
 *
 * Displays characters in a table format with name, description, role, and actions.
 * Hiển thị nhân vật dưới dạng bảng với tên, mô tả, vai trò và hành động.
 *
 * Design follows project guidelines:
 * - Clean table layout
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {CharacterTableProps} props - Component props
 * @returns {React.ReactElement} The character table component
 */
function CharacterTable({
  characters,
  onCharacterClick,
  onEdit,
  onDelete,
}: CharacterTableProps): React.ReactElement {
  /**
   * Handle character row click
   * Xử lý khi click vào hàng nhân vật
   *
   * @param characterId - The character ID / ID nhân vật
   * @param event - The click event / Sự kiện click
   */
  const handleRowClick = (characterId: string, event: React.MouseEvent) => {
    // Prevent row click if clicking on action buttons
    // Ngăn chặn click vào hàng khi click vào nút hành động
    if ((event.target as HTMLElement).closest('button')) {
      return;
    }
    onCharacterClick?.(characterId);
  };

  /**
   * Handle edit button click
   * Xử lý khi click vào nút sửa
   *
   * @param characterId - The character ID / ID nhân vật
   * @param event - The click event / Sự kiện click
   */
  const handleEditClick = (characterId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onEdit?.(characterId);
  };

  /**
   * Handle delete button click
   * Xử lý khi click vào nút xóa
   *
   * @param characterId - The character ID / ID nhân vật
   * @param event - The click event / Sự kiện click
   */
  const handleDeleteClick = (characterId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    onDelete?.(characterId);
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
              Role
            </th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-900 dark:text-white">
              Actions
            </th>
          </tr>
        </thead>

        {/* Table Body / Nội dung bảng */}
        <tbody>
          {characters.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                No characters found
              </td>
            </tr>
          ) : (
            characters.map((character) => (
              <tr
                key={character.id}
                onClick={(e) => handleRowClick(character.id, e)}
                className="border-b border-emerald-100 hover:bg-emerald-50 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-gray-800"
              >
                {/* Character Name / Tên nhân vật */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-900 font-medium dark:text-white">
                    {character.name}
                  </span>
                </td>

                {/* Character Description / Mô tả nhân vật */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {character.description}
                  </span>
                </td>

                {/* Character Role / Vai trò nhân vật */}
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {character.attributes[character.attributes.length - 1]?.role || '-'}
                  </span>
                </td>

                {/* Actions / Hành động */}
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {onEdit && (
                      <button
                        onClick={(e) => handleEditClick(character.id, e)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Edit
                      </button>
                    )}
                    {onDelete && (
                      <button
                        onClick={(e) => handleDeleteClick(character.id, e)}
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

export default CharacterTable;
