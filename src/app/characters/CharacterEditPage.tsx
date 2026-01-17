/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import CharacterForm from '../../components/domain/character/CharacterForm';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { useI18n } from '../../hooks/useI18n';

/**
 * CharacterEditPage Component
 * Thành phần Trang Sửa Nhân vật
 *
 * Form for editing existing characters.
 * Biểu mẫu để sửa nhân vật hiện có.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The character edit page component
 */
function CharacterEditPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { getCharacterWithActiveAttribute } = useDataContext();

  const character = id ? getCharacterWithActiveAttribute(id) : null;

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   */
  const handleSubmit = () => {
    // TODO: Implement update functionality
    navigate(`/characters/${id}`);
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate(`/characters/${id}`);
  };

  if (!character) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          {t('characters.edit')}
        </h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Character not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header / Tiêu đề trang */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t('characters.edit')}
        </h1>
      </div>

      {/* Character Form / Biểu mẫu nhân vật */}
      <CharacterForm character={character} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default CharacterEditPage;
