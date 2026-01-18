/**
 * React Router imports / Import React Router
 */
import { useNavigate } from 'react-router-dom';

/**
 * Domain components imports / Import thành phần domain
 */
import LocationForm from '../../components/domain/location/LocationForm';
import type { LocationFormData } from '../../components/domain/location/LocationForm';

/**
 * LocationCreatePage Component
 * Thành phần Trang Tạo Địa điểm
 *
 * Page for creating new locations.
 * Trang để tạo địa điểm mới.
 *
 * Design follows project guidelines:
 * - Centered layout with max-w-6xl
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @returns {React.ReactElement} The location create page component
 */
function LocationCreatePage(): React.ReactElement {
  const navigate = useNavigate();

  /**
   * Handle form submission
   * Xử lý gửi biểu mẫu
   *
   * @param data - Form data / Dữ liệu biểu mẫu
   */
  const handleSubmit = (data: LocationFormData) => {
    // TODO: Implement create functionality
    console.log('Create location:', data);
    navigate('/locations');
  };

  /**
   * Handle cancel
   * Xử lý khi hủy
   */
  const handleCancel = () => {
    navigate('/locations');
  };

  return (
    <div>
      {/* Location Form / Biểu mẫu địa điểm */}
      <LocationForm location={null} onSubmit={handleSubmit} onCancel={handleCancel} />
    </div>
  );
}

export default LocationCreatePage;
