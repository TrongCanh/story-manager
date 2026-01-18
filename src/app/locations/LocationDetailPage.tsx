/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { getActiveLocationAttribute, formatDate } from '../../lib/timeFilter';
import { useI18n } from '../../hooks/useI18n';

/**
 * LocationDetailPage Component
 * Thành phần Trang Chi tiết Địa điểm
 *
 * Displays detailed information about a specific location.
 * Hiển thị thông tin chi tiết về một địa điểm cụ thể.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The location detail page component
 */
function LocationDetailPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { getLocationWithActiveAttribute, currentTime } = useDataContext();

  const location = id ? getLocationWithActiveAttribute(id) : null;
  const activeAttribute = location ? getActiveLocationAttribute(location, currentTime) : null;

  /**
   * Handle back navigation
   * Xử lý điều hướng quay lại
   */
  const handleBack = () => {
    navigate('/locations');
  };

  /**
   * Handle edit action
   * Xử lý hành động sửa
   */
  const handleEdit = () => {
    if (id) {
      navigate(`/locations/${id}/edit`);
    }
  };

  /**
   * Handle delete action
   * Xử lý hành động xóa
   */
  const handleDelete = () => {
    if (id && confirm(t('locations.confirmDelete'))) {
      // TODO: Implement delete functionality
      navigate('/locations');
    }
  };

  if (!location || !activeAttribute) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">
          {t('locations.details')}
        </h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Location not found</p>
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

      {/* Location Info Card / Thẻ thông tin địa điểm */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 mb-6 dark:bg-gray-800 dark:border-gray-700">
        {/* Location Name and Description / Tên và mô tả địa điểm */}
        <div className="border-b border-emerald-100 pb-4 mb-4 dark:border-gray-700">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">
            {location.name}
          </h1>
          <p className="text-sm text-gray-700 dark:text-gray-300">{location.description}</p>
        </div>

        {/* Location Attributes / Thuộc tính địa điểm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location Type / Loại địa điểm */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.locationType')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {activeAttribute.locationType}
            </p>
          </div>

          {/* Climate / Khí hậu */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.climate')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.climate}</p>
          </div>

          {/* Geography / Địa lý */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.geography')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.geography}</p>
          </div>

          {/* Population / Dân số */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.population')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.population}</p>
          </div>

          {/* Culture / Văn hóa */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.culture')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.culture}</p>
          </div>

          {/* Economy / Kinh tế */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.economy')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.economy}</p>
          </div>

          {/* Government / Chính quyền */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.government')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.government}</p>
          </div>

          {/* Notes / Ghi chú */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium text-gray-900 mb-1 dark:text-white">
              {t('locations.attributes.notes')}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{activeAttribute.notes}</p>
          </div>
        </div>

        {/* Time Range Info / Thông tin phạm vi thời gian */}
        <div className="mt-4 pt-4 border-t border-emerald-100 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-white">
            {t('locations.timeRange')}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-700 dark:text-gray-300">
            <span>
              {t('locations.from')}: {formatDate(activeAttribute.timeRange.from)}
            </span>
            <span>→</span>
            <span>
              {activeAttribute.timeRange.to
                ? formatDate(activeAttribute.timeRange.to)
                : t('locations.current')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationDetailPage;
