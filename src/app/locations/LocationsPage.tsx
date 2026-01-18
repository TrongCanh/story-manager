/**
 * React Router imports / Import React Router
 */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search } from 'lucide-react';

/**
 * Domain components imports / Import thành phần domain
 */
import LocationTable from '../../components/domain/location/LocationTable';

/**
 * Hooks imports / Import hooks
 */

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';
import { useI18n } from '../../hooks/useI18n';

/**
 * LocationsPage Component
 * Thành phần Trang Địa điểm
 *
 * Displays list of locations with search and create functionality.
 * Hiển thị danh sách địa điểm với tìm kiếm và chức năng tạo.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The locations page component
 */
function LocationsPage(): React.ReactElement {
  const navigate = useNavigate();
  const { t } = useI18n();
  const { locations } = useDataContext();

  // Search state / Trạng thái tìm kiếm
  const [searchQuery, setSearchQuery] = useState('');

  /**
   * Filter locations by search query
   * Lọc địa điểm theo từ khóa tìm kiếm
   *
   * @returns Filtered locations / Địa điểm đã lọc
   */
  const filteredLocations = locations.filter((location) => {
    const query = searchQuery.toLowerCase();
    return (
      location.name.toLowerCase().includes(query) ||
      location.description.toLowerCase().includes(query)
    );
  });

  /**
   * Handle location click
   * Xử lý khi click vào địa điểm
   *
   * @param locationId - The location ID / ID địa điểm
   */
  const handleLocationClick = (locationId: string) => {
    navigate(`/locations/${locationId}`);
  };

  /**
   * Handle create button click
   * Xử lý khi click vào nút tạo
   */
  const handleCreate = () => {
    navigate('/locations/create');
  };

  /**
   * Handle edit action
   * Xử lý hành động sửa
   *
   * @param locationId - The location ID / ID địa điểm
   */
  const handleEdit = (locationId: string) => {
    navigate(`/locations/${locationId}/edit`);
  };

  return (
    <div>
      {/* Page Header / Tiêu đề trang */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {t('locations.title')}
        </h1>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          {t('locations.create')}
        </button>
      </div>

      {/* Search Bar / Thanh tìm kiếm */}
      <div className="bg-white border border-emerald-100 rounded-xl p-4 mb-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={t('locations.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Location Table / Bảng địa điểm */}
      <div className="bg-white border border-emerald-100 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
        <LocationTable
          locations={filteredLocations}
          onLocationClick={handleLocationClick}
          onEdit={handleEdit}
        />
      </div>

      {/* Empty State / Trạng thái trống */}
      {filteredLocations.length === 0 && (
        <div className="bg-white border border-emerald-100 rounded-xl p-8 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('locations.noLocations')}</p>
        </div>
      )}
    </div>
  );
}

export default LocationsPage;
