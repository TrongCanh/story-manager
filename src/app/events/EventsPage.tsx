import { Calendar } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

/**
 * EventsPage Component
 * Placeholder page for event management.
 * Will be implemented in Phase 5 with full event list, detail, and form views.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 5: Full event management features
 */
function EventsPage() {
  return (
    <PlaceholderPage
      title="Events"
      subtitle="Event Management"
      description="Track story events across your narrative timeline. Organize events by time, location, and participating characters."
      phaseText="Coming in Phase 5"
      icon={<Calendar className="w-8 h-8" />}
      iconColorLight="text-teal-500"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default EventsPage;
