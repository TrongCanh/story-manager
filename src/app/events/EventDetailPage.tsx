/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { useI18n } from '../../hooks/useI18n';

/**
 * EventDetailPage Component
 * Thành phần Trang Chi tiết Sự kiện
 *
 * Displays detailed information about a specific event.
 * Hiển thị thông tin chi tiết về một sự kiện cụ thể.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The event detail page component
 */
function EventDetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { events, characters, locations } = useDataContext();

  const event = events.find((e) => e.id === id);

  /**
   * Handle back navigation
   * Xử lý điều hướng quay lại
   */
  const handleBack = () => {
    navigate('/events');
  };

  /**
   * Handle edit action
   * Xử lý hành động sửa
   */
  const handleEdit = () => {
    if (id) {
      navigate(`/events/${id}/edit`);
    }
  };

  /**
   * Handle delete action
   * Xử lý hành động xóa
   */
  const handleDelete = () => {
    if (id && confirm(t('events.confirmDelete'))) {
      // TODO: Implement delete functionality
      navigate('/events');
    }
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

  /**
   * Get location name by ID
   * Lấy tên địa điểm theo ID
   *
   * @param locationId - The location ID / ID địa điểm
   * @returns Location name or placeholder / Tên địa điểm hoặc placeholder
   */
  const getLocationName = (locationId: string | null): string => {
    if (!locationId) return '-';
    const location = locations.find((l) => l.id === locationId);
    return location?.name || locationId;
  };

  /**
   * Get participant names by IDs
   * Lấy tên người tham gia theo IDs
   *
   * @param participantIds - Array of character IDs / Mảng ID nhân vật
   * @returns Array of character names / Mảng tên nhân vật
   */
  const getParticipantNames = (participantIds: string[]): string[] => {
    return participantIds.map((id) => {
      const character = characters.find((c) => c.id === id);
      return character?.name || id;
    });
  };

  if (!event) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          {t('events.details')}
        </h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Event not found</p>
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

      {/* Event Info Card / Thẻ thông tin sự kiện */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 mb-6 dark:bg-gray-800 dark:border-gray-700">
        {/* Event Name and Description / Tên và mô tả sự kiện */}
        <div className="border-b border-emerald-100 pb-4 mb-4 dark:border-gray-700">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">
            {event.name}
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">{event.description}</p>
        </div>

        {/* Event Details / Chi tiết sự kiện */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Timestamp / Thời gian */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.timestamp')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {formatTimestamp(event.timestamp)}
            </p>
          </div>

          {/* Event Type / Loại sự kiện */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.eventType')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{event.eventType}</p>
          </div>

          {/* Importance / Mức độ quan trọng */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.importance')}
            </h3>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceBadgeColor(event.importance)}`}
            >
              {event.importance === 'low' && t('events.importanceLevels.low')}
              {event.importance === 'medium' && t('events.importanceLevels.medium')}
              {event.importance === 'high' && t('events.importanceLevels.high')}
              {event.importance === 'critical' && t('events.importanceLevels.critical')}
            </span>
          </div>

          {/* Location / Địa điểm */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.location')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {getLocationName(event.locationId)}
            </p>
          </div>

          {/* Outcome / Kết quả */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.outcome')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{event.outcome}</p>
          </div>

          {/* Impact / Tác động */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('events.impact')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{event.impact}</p>
          </div>
        </div>

        {/* Participants / Người tham gia */}
        <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-white">
            {t('events.participants')}
          </h3>
          {event.participants.length === 0 ? (
            <p className="text-sm text-gray-500 dark:text-gray-400">-</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {getParticipantNames(event.participants).map((name, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm dark:bg-gray-700 dark:text-gray-300"
                >
                  {name}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
