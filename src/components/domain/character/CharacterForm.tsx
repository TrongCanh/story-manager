/**
 * React imports / Import React
 */
import { useState } from 'react';

/**
 * Types imports / Import kiểu
 */
import type { Character } from '../../../types';

/**
 * Hooks imports / Import hooks
 */
import { useI18n } from '../../../hooks/useI18n';

/**
 * CharacterForm Props
 * Props của Biểu mẫu Nhân vật
 */
interface CharacterFormProps {
  /** Character to edit (null for create) / Nhân vật để sửa (null cho tạo mới) */
  character: Character | null;
  /** Function to handle form submission / Hàm xử lý khi gửi biểu mẫu */
  onSubmit: (data: CharacterFormData) => void;
  /** Function to handle cancel / Hàm xử lý khi hủy */
  onCancel: () => void;
}

/**
 * Character Form Data
 * Dữ liệu biểu mẫu Nhân vật
 */
export interface CharacterFormData {
  /** Character name / Tên nhân vật */
  name: string;
  /** Character description / Mô tả nhân vật */
  description: string;
  /** Character role / Vai trò nhân vật */
  role: string;
  /** Character age / Tuổi nhân vật */
  age: number | null;
  /** Character gender / Giới tính nhân vật */
  gender: string;
  /** Character appearance / Ngoại hình nhân vật */
  appearance: string;
  /** Character personality / Tính cách nhân vật */
  personality: string;
  /** Character background / Tiền cảnh nhân vật */
  background: string;
  /** Character goals / Mục tiêu nhân vật */
  goals: string;
  /** Character flaws / Khuyết điểm nhân vật */
  flaws: string;
  /** Character skills / Kỹ năng nhân vật */
  skills: string;
  /** Character notes / Ghi chú nhân vật */
  notes: string;
  /** Time range from / Phạm vi thời gian từ */
  timeFrom: string;
  /** Time range to / Phạm vi thời gian đến */
  timeTo: string | null;
}

/**
 * CharacterForm Component
 * Thành phần Biểu mẫu Nhân vật
 *
 * Form for creating or editing characters.
 * Biểu mẫu để tạo hoặc sửa nhân vật.
 *
 * Design follows project guidelines:
 * - Vertical form layout with labels above inputs
 * - Consistent spacing
 * - Theme-aware colors
 * - Minimal interactions
 *
 * @param {CharacterFormProps} props - Component props
 * @returns {React.ReactElement} The character form component
 */
function CharacterForm({ character, onSubmit, onCancel }: CharacterFormProps): React.ReactElement {
  const { t } = useI18n();

  // Initialize form state
  // Khởi tạo trạng thái biểu mẫu
  const [formData, setFormData] = useState<CharacterFormData>({
    name: character?.name || '',
    description: character?.description || '',
    role: character?.attributes[character.attributes.length - 1]?.role || '',
    age: character?.attributes[character.attributes.length - 1]?.age || null,
    gender: character?.attributes[character.attributes.length - 1]?.gender || '',
    appearance: character?.attributes[character.attributes.length - 1]?.appearance || '',
    personality: character?.attributes[character.attributes.length - 1]?.personality || '',
    background: character?.attributes[character.attributes.length - 1]?.background || '',
    goals: character?.attributes[character.attributes.length - 1]?.goals || '',
    flaws: character?.attributes[character.attributes.length - 1]?.flaws || '',
    skills: character?.attributes[character.attributes.length - 1]?.skills || '',
    notes: character?.attributes[character.attributes.length - 1]?.notes || '',
    timeFrom: character?.attributes[character.attributes.length - 1]?.timeRange.from || '',
    timeTo: character?.attributes[character.attributes.length - 1]?.timeRange.to || null,
  });

  /**
   * Handle input change
   * Xử lý thay đổi input
   *
   * @param field - The field to update / Trường cần cập nhật
   * @param value - The new value / Giá trị mới
   */
  const handleChange = (field: keyof CharacterFormData, value: string | number | null) => {
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
          {character ? t('characters.edit') : t('characters.create')}
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

      {/* Character Attributes / Thuộc tính nhân vật */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">
          {t('characters.attributes.role')}
        </h2>

        {/* Role / Vai trò */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.role')}
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => handleChange('role', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Age / Tuổi */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.age')}
          </label>
          <input
            type="number"
            value={formData.age ?? ''}
            onChange={(e) => handleChange('age', e.target.value ? Number(e.target.value) : null)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
          />
        </div>

        {/* Gender / Giới tính */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.gender')}
          </label>
          <input
            type="text"
            value={formData.gender}
            onChange={(e) => handleChange('gender', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
            required
          />
        </div>

        {/* Appearance / Ngoại hình */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.appearance')}
          </label>
          <textarea
            value={formData.appearance}
            onChange={(e) => handleChange('appearance', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Personality / Tính cách */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.personality')}
          </label>
          <textarea
            value={formData.personality}
            onChange={(e) => handleChange('personality', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Background / Tiền cảnh */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.background')}
          </label>
          <textarea
            value={formData.background}
            onChange={(e) => handleChange('background', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Goals / Mục tiêu */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.goals')}
          </label>
          <textarea
            value={formData.goals}
            onChange={(e) => handleChange('goals', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Flaws / Khuyết điểm */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.flaws')}
          </label>
          <textarea
            value={formData.flaws}
            onChange={(e) => handleChange('flaws', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Skills / Kỹ năng */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.skills')}
          </label>
          <textarea
            value={formData.skills}
            onChange={(e) => handleChange('skills', e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 resize-none"
            required
          />
        </div>

        {/* Notes / Ghi chú */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
            {t('characters.attributes.notes')}
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
            {t('characters.timeRange')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1 dark:text-white">
                {t('characters.from')}
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
                {t('characters.to')}
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

export default CharacterForm;
