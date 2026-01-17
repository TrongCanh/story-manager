/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

/**
 * Domain components imports / Import thành phần domain
 */
import CharacterRelationships from '../../components/domain/character/CharacterRelationships';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { getActiveCharacterAttribute, formatDate } from '../../lib/timeFilter';
import { useI18n } from '../../hooks/useI18n';

/**
 * CharacterDetailPage Component
 * Thành phần Trang Chi tiết Nhân vật
 *
 * Displays detailed information about a specific character.
 * Hiển thị thông tin chi tiết về một nhân vật cụ thể.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The character detail page component
 */
function CharacterDetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { getCharacterWithActiveAttribute, relationships, currentTime } = useDataContext();

  const character = id ? getCharacterWithActiveAttribute(id) : null;
  const activeAttribute = character ? getActiveCharacterAttribute(character, currentTime) : null;

  /**
   * Handle back navigation
   * Xử lý điều hướng quay lại
   */
  const handleBack = () => {
    navigate('/characters');
  };

  /**
   * Handle edit action
   * Xử lý hành động sửa
   */
  const handleEdit = () => {
    if (id) {
      navigate(`/characters/${id}/edit`);
    }
  };

  /**
   * Handle delete action
   * Xử lý hành động xóa
   */
  const handleDelete = () => {
    if (id && confirm(t('characters.confirmDelete'))) {
      // TODO: Implement delete functionality
      navigate('/characters');
    }
  };

  if (!character || !activeAttribute) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          {t('characters.details')}
        </h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Character not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header with Back Button / Tiêu đề với nút quay lại */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-600 transition-colors dark:text-gray-300 dark:hover:text-emerald-400"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('common.back')}
        </button>
        <div className="flex gap-2">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <Edit className="w-4 h-4" />
            {t('common.edit')}
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 px-3 py-2 text-sm border border-red-300 text-red-600 rounded hover:bg-red-50 transition-colors dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/20"
          >
            <Trash2 className="w-4 h-4" />
            {t('common.delete')}
          </button>
        </div>
      </div>

      {/* Character Info Card / Thẻ thông tin nhân vật */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 mb-6 dark:bg-gray-800 dark:border-gray-700">
        {/* Character Name and Description / Tên và mô tả nhân vật */}
        <div className="border-b border-emerald-100 pb-4 mb-4 dark:border-gray-700">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">
            {character.name}
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">{character.description}</p>
        </div>

        {/* Character Attributes / Thuộc tính nhân vật */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Role / Vai trò */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.role')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.role}</p>
          </div>

          {/* Age / Tuổi */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.age')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.age ?? '-'}</p>
          </div>

          {/* Gender / Giới tính */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.gender')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.gender}</p>
          </div>

          {/* Appearance / Ngoại hình */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.appearance')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.appearance}</p>
          </div>

          {/* Personality / Tính cách */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.personality')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {activeAttribute.personality}
            </p>
          </div>

          {/* Background / Tiền cảnh */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.background')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.background}</p>
          </div>

          {/* Goals / Mục tiêu */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.goals')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.goals}</p>
          </div>

          {/* Flaws / Khuyết điểm */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.flaws')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.flaws}</p>
          </div>

          {/* Skills / Kỹ năng */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.skills')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.skills}</p>
          </div>

          {/* Notes / Ghi chú */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('characters.attributes.notes')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.notes}</p>
          </div>
        </div>

        {/* Time Range Info / Thông tin phạm vi thời gian */}
        <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-white">
            {t('characters.timeRange')}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <span>
              {t('characters.from')}: {formatDate(activeAttribute.timeRange.from)}
            </span>
            <span>→</span>
            <span>
              {activeAttribute.timeRange.to
                ? formatDate(activeAttribute.timeRange.to)
                : t('characters.current')}
            </span>
          </div>
        </div>
      </div>

      {/* Character Relationships / Mối quan hệ nhân vật */}
      <CharacterRelationships
        character={character}
        relationships={relationships}
        currentTime={currentTime}
      />
    </div>
  );
}

export default CharacterDetailPage;
