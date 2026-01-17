/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import EventForm from '../../components/domain/event/EventForm';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { useI18n } from '../../hooks/useI18n';

/**
 * EventEditPage Component
 * Thành phần Trang Sửa Sự kiện
 *
 * Form for editing existing events.
 * Biểu mẫu để sửa sự kiện hiện có.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The event edit page component
 */
function EventEditPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { events } = useDataContext();

  const event = id ? events.find((e) => e.id === id) : null;

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   */
  const handleSubmit = () => {
    // TODO: Implement update functionality
    navigate(`/events/${id}`);
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate(`/events/${id}`);
  };

  if (!event) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          {t('events.edit')}
        </h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Event not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header / Tiêu đề trang */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{t('events.edit')}</h1>
      </div>

      {/* Event Form / Biểu mẫu sự kiện */}
      <EventForm event={event} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default EventEditPage;
