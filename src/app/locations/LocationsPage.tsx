import { MapPin } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

/**
 * LocationsPage Component
 * Placeholder page for location management.
 * Will be implemented in Phase 6 with full location list, detail, and form views.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 6: Full location management features
 */
function LocationsPage() {
  return (
    <PlaceholderPage
      title="Locations"
      subtitle="Location Management"
      description="Organize story locations and settings. Track where events occur and manage geographical details of your narrative world."
      phaseText="Coming in Phase 6"
      icon={<MapPin className="w-8 h-8" />}
      iconColorLight="text-amber-500"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default LocationsPage;
