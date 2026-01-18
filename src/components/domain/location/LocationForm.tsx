/**
 * React imports / Import React
 */
import { useState } from 'react';

/**
 * Types imports / Import kiểu
 */
import type { Location } from '../../../types';

/**
 * Hooks imports / Import hooks
 */
import { useI18n } from '../../../hooks/useI18n';

/**
 * LocationForm Props
 * Props của Biểu mẫu Địa điểm
 */
interface LocationFormProps {
  /** Location to edit (null for create) / Địa điểm để sửa (null cho tạo mới) */
  location: Location | null;
  /** Function to handle form submission / Hàm xử lý khi gửi biểu mẫu */
  onSubmit: (data: LocationFormData) => void;
  /** Function to handle cancel / Hàm xử lý khi hủy */
  onCancel: () => void;
}

/**
 * Location Form Data
 * Dữ liệu biểu mẫu Địa điểm
 */
export interface LocationFormData {
  /** Location name / Tên địa điểm */
  name: string;
  /** Location description / Mô tả địa điểm */
  description: string;
  /** Location type / Loại địa điểm */
  locationType: string;
  /** Location climate / Khí hậu địa điểm */
  climate: string;
  /** Location geography / Địa lý địa điểm */
  geography: string;
  /** Location population / Dân số địa điểm */
  population: string;
  /** Location culture / Văn hóa địa điểm */
  culture: string;
  /** Location economy / Kinh tế địa điểm */
  economy: string;
  /** Location government / Chính quyền địa điểm */
  government: string;
  /** Location notes / Ghi chú địa điểm */
  notes: string;
  /** Time range from / Phạm vi thời gian từ */
  timeFrom: string;
  /** Time range to / Phạm vi thời gian đến */
  timeTo: string | null;
}

/**
 * LocationForm Component
 * Thành phần Biểu mẫu Địa điểm
 *
 * Form for creating or editing locations.
 * Biểu mẫu để tạo hoặc sửa địa điểm.
 *
 * Design follows project guidelines:
 * - Vertical form layout with labels above inputs
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {LocationFormProps} props - Component props
 * @returns {React.ReactElement} The location form component
 */
function LocationForm({ location, onSubmit, onCancel }: LocationFormProps): React.ReactElement {
  const { t } = useI18n();

  // Initialize form state
  // Khởi tạo trạng thái biểu mẫu
  const [formData, setFormData] = useState<LocationFormData>({
    name: location?.name || '',
    description: location?.description || '',
    locationType: location?.attributes[location.attributes.length - 1]?.locationType || '',
    climate: location?.attributes[location.attributes.length - 1]?.climate || '',
    geography: location?.attributes[location.attributes.length - 1]?.geography || '',
    population: location?.attributes[location.attributes.length - 1]?.population || '',
    culture: location?.attributes[location.attributes.length - 1]?.culture || '',
    economy: location?.attributes[location.attributes.length - 1]?.economy || '',
    government: location?.attributes[location.attributes.length - 1]?.government || '',
    notes: location?.attributes[location.attributes.length - 1]?.notes || '',
    timeFrom: location?.attributes[location.attributes.length - 1]?.timeRange.from || '',
    timeTo: location?.attributes[location.attributes.length - 1]?.timeRange.to || null,
  });

  /**
   * Handle input change
   * Xử lý thay đổi input
   *
   * @param field - The field to update / Trường cần cập nhật
   * @param value - The new value / Giá trị mới
   */
  const handleChange = (field: keyof LocationFormData, value: string | null) => {
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
          {location ? t('locations.edit') : t('locations.create')}
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

      {/* Location Attributes / Thuộc tính địa điểm */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
          {t('locations.attributes.locationType')}
        </h2>

        {/* Location Type / Loại địa điểm */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.locationType')}
          </label>
          <input
            type="text"
            value={formData.locationType}
            onChange={(e) => handleChange('locationType', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Climate / Khí hậu */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.climate')}
          </label>
          <input
            type="text"
            value={formData.climate}
            onChange={(e) => handleChange('climate', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Geography / Địa lý */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.geography')}
          </label>
          <textarea
            value={formData.geography}
            onChange={(e) => handleChange('geography', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Population / Dân số */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.population')}
          </label>
          <input
            type="text"
            value={formData.population}
            onChange={(e) => handleChange('population', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Culture / Văn hóa */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.culture')}
          </label>
          <textarea
            value={formData.culture}
            onChange={(e) => handleChange('culture', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Economy / Kinh tế */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.economy')}
          </label>
          <textarea
            value={formData.economy}
            onChange={(e) => handleChange('economy', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Government / Chính quyền */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.government')}
          </label>
          <input
            type="text"
            value={formData.government}
            onChange={(e) => handleChange('government', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Notes / Ghi chú */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('locations.attributes.notes')}
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
          />
        </div>

        {/* Time Range / Phạm vi thời gian */}
        <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 mb-4 dark:text-white">
            {t('locations.timeRange')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
                {t('locations.from')}
              </label>
              <input
                type="datetime-local"
                value={formData.timeFrom}
                onChange={(e) => handleChange('timeFrom', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
                {t('locations.to')}
              </label>
              <input
                type="datetime-local"
                value={formData.timeTo ?? ''}
                onChange={(e) => handleChange('timeTo', e.target.value || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
              />
            </div>
          </div>
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

export default LocationForm;
