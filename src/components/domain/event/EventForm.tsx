/**
 * React imports / Import React
 */
import { useState } from 'react';

/**
 * Types imports / Import kiểu
 */
import type { Event } from '../../../types';

/**
 * Hooks imports / Import hooks
 */
import { useI18n } from '../../../hooks/useI18n';

/**
 * EventForm Props
 * Props của Biểu mẫu Sự kiện
 */
interface EventFormProps {
  /** Event to edit (null for create) / Sự kiện để sửa (null cho tạo mới) */
  event: Event | null;
  /** Function to handle form submission / Hàm xử lý khi gửi biểu mẫu */
  onSubmit: (data: EventFormData) => void;
  /** Function to handle cancel / Hàm xử lý khi hủy */
  onCancel: () => void;
}

/**
 * Event Form Data
 * Dữ liệu biểu mẫu Sự kiện
 */
export interface EventFormData {
  /** Event name / Tên sự kiện */
  name: string;
  /** Event description / Mô tả sự kiện */
  description: string;
  /** Event timestamp / Thời gian sự kiện */
  timestamp: string;
  /** Event location ID / ID địa điểm sự kiện */
  locationId: string | null;
  /** Event type / Loại sự kiện */
  eventType: string;
  /** Event importance / Mức độ quan trọng sự kiện */
  importance: 'low' | 'medium' | 'high' | 'critical';
  /** Event participants (character IDs) / Người tham gia sự kiện (ID nhân vật) */
  participants: string[];
  /** Event outcome / Kết quả sự kiện */
  outcome: string;
  /** Event impact / Tác động sự kiện */
  impact: string;
}

/**
 * EventForm Component
 * Thành phần Biểu mẫu Sự kiện
 *
 * Form for creating or editing events.
 * Biểu mẫu để tạo hoặc sửa sự kiện.
 *
 * Design follows project guidelines:
 * - Vertical form layout with labels above inputs
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {EventFormProps} props - Component props
 * @returns {React.ReactElement} The event form component
 */
function EventForm({ event, onSubmit, onCancel }: EventFormProps): React.ReactElement {
  const { t } = useI18n();

  // Initialize form state
  // Khởi tạo trạng thái biểu mẫu
  const [formData, setFormData] = useState<EventFormData>({
    name: event?.name || '',
    description: event?.description || '',
    timestamp: event?.timestamp || new Date().toISOString().slice(0, 16),
    locationId: event?.locationId || null,
    eventType: event?.eventType || '',
    importance: event?.importance || 'medium',
    participants: event?.participants || [],
    outcome: event?.outcome || '',
    impact: event?.impact || '',
  });

  /**
   * Handle input change
   * Xử lý thay đổi input
   *
   * @param field - The field to update / Trường cần cập nhật
   * @param value - The new value / Giá trị mới
   */
  const handleChange = (field: keyof EventFormData, value: string | string[] | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   *
   * @param event - The form submit event / Sự kiện gửi biểu mẫu
   */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information / Thông tin cơ bản */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
          {event ? t('events.edit') : t('events.create')}
        </h2>

        {/* Name / Tên */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('common.name') || 'Name'}
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Description / Mô tả */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('common.description') || 'Description'}
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>
      </div>

      {/* Event Details / Chi tiết sự kiện */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
          {t('events.details')}
        </h2>

        {/* Timestamp / Thời gian */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.timestamp')}
          </label>
          <input
            type="datetime-local"
            value={formData.timestamp}
            onChange={(e) => handleChange('timestamp', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Location ID / ID địa điểm */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.location')}
          </label>
          <input
            type="text"
            value={formData.locationId || ''}
            onChange={(e) => handleChange('locationId', e.target.value || null)}
            placeholder="Location ID (optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
          />
        </div>

        {/* Event Type / Loại sự kiện */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.eventType')}
          </label>
          <input
            type="text"
            value={formData.eventType}
            onChange={(e) => handleChange('eventType', e.target.value)}
            placeholder="e.g., Plot Point, Meeting, Action"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Importance / Mức độ quan trọng */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.importance')}
          </label>
          <select
            value={formData.importance}
            onChange={(e) =>
              handleChange('importance', e.target.value as 'low' | 'medium' | 'high' | 'critical')
            }
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          >
            <option value="low">{t('events.importanceLevels.low')}</option>
            <option value="medium">{t('events.importanceLevels.medium')}</option>
            <option value="high">{t('events.importanceLevels.high')}</option>
            <option value="critical">{t('events.importanceLevels.critical')}</option>
          </select>
        </div>

        {/* Participants / Người tham gia */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.participants')}
          </label>
          <textarea
            value={formData.participants.join(', ')}
            onChange={(e) =>
              handleChange(
                'participants',
                e.target.value
                  .split(',')
                  .map((p) => p.trim())
                  .filter((p) => p)
              )
            }
            rows={2}
            placeholder="Character IDs separated by commas (e.g., char-001, char-002)"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Outcome / Kết quả */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.outcome')}
          </label>
          <textarea
            value={formData.outcome}
            onChange={(e) => handleChange('outcome', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Impact / Tác động */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('events.impact')}
          </label>
          <textarea
            value={formData.impact}
            onChange={(e) => handleChange('impact', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>
      </div>

      {/* Form Actions / Hành động biểu mẫu */}
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          {t('common.cancel')}
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          {t('common.save')}
        </button>
      </div>
    </form>
  );
}

export default EventForm;
