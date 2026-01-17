/**
 * Character Types / Các kiểu Nhân vật
 */
import type { Character, Relationship } from '../../../types';
import { getActiveRelationshipDetail } from '../../../lib/timeFilter';
import { Link2 } from 'lucide-react';

/**
 * CharacterRelationships Props
 * Props của Mối quan hệ Nhân vật
 */
interface CharacterRelationshipsProps {
  /** The character to show relationships for / Nhân vật để hiển thị mối quan hệ */
  character: Character;
  /** All relationships / Tất cả mối quan hệ */
  relationships: Relationship[];
  /** Current time for filtering / Thời gian hiện tại để lọc */
  currentTime: string;
}

/**
 * CharacterRelationships Component
 * Thành phần Mối quan hệ Nhân vật
 *
 * Displays relationships for a specific character.
 * Hiển thị mối quan hệ cho một nhân vật cụ thể.
 *
 * Design follows project guidelines:
 * - Clean list layout
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {CharacterRelationshipsProps} props - Component props
 * @returns {React.ReactElement} The character relationships component
 */
function CharacterRelationships({
  character,
  relationships,
  currentTime,
}: CharacterRelationshipsProps): React.ReactElement {
  /**
   * Get relationships for this character
   * Lấy mối quan hệ cho nhân vật này
   *
   * @returns Array of relationships / Mảng mối quan hệ
   */
  const getCharacterRelationships = (): Relationship[] => {
    return relationships.filter(
      (rel) => rel.entity1Id === character.id || rel.entity2Id === character.id
    );
  };

  const characterRelationships = getCharacterRelationships();

  return (
    <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
      {/* Section Title / Tiêu đề phần */}
      <div className="flex items-center gap-2 mb-4">
        <Link2 className="w-5 h-5 text-emerald-600 dark:text-blue-400" />
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Relationships</h2>
      </div>

      {/* Relationships List / Danh sách mối quan hệ */}
      {characterRelationships.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">No relationships found</p>
      ) : (
        <div className="space-y-4">
          {characterRelationships.map((relationship) => {
            const activeDetail = getActiveRelationshipDetail(relationship, currentTime);
            if (!activeDetail) return null;

            return (
              <div
                key={relationship.id}
                className="border-b border-emerald-100 pb-4 last:border-0 last:pb-0 dark:border-gray-700"
              >
                {/* Relationship Name / Tên mối quan hệ */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                    {relationship.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {activeDetail.relationshipType}
                  </span>
                </div>

                {/* Relationship Description / Mô tả mối quan hệ */}
                <p className="text-sm text-gray-700 mb-2 dark:text-gray-300">
                  {activeDetail.description}
                </p>

                {/* Relationship Strength / Độ mạnh mối quan hệ */}
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                      <span>Strength</span>
                      <span>{activeDetail.strength}/10</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                      <div
                        className="h-full bg-emerald-500 dark:bg-blue-500 transition-all"
                        style={{ width: `${(activeDetail.strength / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      activeDetail.status === 'active'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400'
                    }`}
                  >
                    {activeDetail.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterRelationships;
