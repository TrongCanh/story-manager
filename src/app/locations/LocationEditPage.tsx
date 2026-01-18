/**
 * React Router imports / Import React Router
 */
import { useParams, useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import LocationForm from '../../components/domain/location/LocationForm';
import type { LocationFormData } from '../../components/domain/location/LocationForm';

/**
 * Hooks imports / Import hooks
 */
import { useDataContext } from '../../hooks/useData';

/**
 * LocationEditPage Component
 * Thành phần Trang Sửa Địa điểm
 *
 * Page for editing existing locations.
 * Trang để sửa địa điểm hiện có.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The location edit page component
 */
function LocationEditPage(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { locations } = useDataContext();

  const location = id ? locations.find((loc) => loc.id === id) : null;

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   *
   * @param data - Form data / Dữ liệu biểu mẫu
   */
  const handleSubmit = (data: LocationFormData) => {
    // TODO: Implement update functionality
    console.log('Update location:', data);
    navigate(`/locations/${id}`);
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate(`/locations/${id}`);
  };

  if (!location) {
    return (
      <div>
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">Edit Location</h1>
        <div className="bg-white border border-emerald-100 rounded-xl p-6 text-center dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">Location not found</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Location Form / Biểu mẫu địa điểm */}
      <LocationForm location={location} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default LocationEditPage;
