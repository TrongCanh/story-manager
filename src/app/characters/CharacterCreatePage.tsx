/**
 * React Router imports / Import React Router
 */
import { useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import CharacterForm from '../../components/domain/character/CharacterForm';

/**
 * Hooks imports / Import hooks
 */
import { useI18n } from '../../hooks/useI18n';

/**
 * CharacterCreatePage Component
 * Thành phần Trang Tạo Nhân vật
 *
 * Form for creating new characters.
 * Biểu mẫu để tạo nhân vật mới.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The character create page component
 */
function CharacterCreatePage(): React.ReactElement {
  const navigate = useNavigate();
  const { t } = useI18n();

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   */
  const handleSubmit = () => {
    // TODO: Implement create functionality
    navigate('/characters');
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate('/characters');
  };

  return (
    <div>
      {/* Page Header / Tiêu đề trang */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t('characters.create')}
        </h1>
      </div>

      {/* Character Form / Biểu mẫu nhân vật */}
      <CharacterForm character={null} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default CharacterCreatePage;
