/**
 * React Router imports / Import React Router
 */
import { useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import EventForm from '../../components/domain/event/EventForm';

/**
 * Hooks imports / Import hooks
 */
import { useI18n } from '../../hooks/useI18n';

/**
 * EventCreatePage Component
 * Thành phần Trang Tạo Sự kiện
 *
 * Form for creating new events.
 * Biểu mẫu để tạo sự kiện mới.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The event create page component
 */
function EventCreatePage(): React.ReactElement {
  const navigate = useNavigate();
  const { t } = useI18n();

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   */
  const handleSubmit = () => {
    // TODO: Implement create functionality
    navigate('/events');
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate('/events');
  };

  return (
    <div>
      {/* Page Header / Tiêu đề trang */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t('events.create')}
        </h1>
      </div>

      {/* Event Form / Biểu mẫu sự kiện */}
      <EventForm event={null} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default EventCreatePage;
