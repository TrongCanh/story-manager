import { Calendar } from 'lucide-react';

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
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Events</h1>

      {/* Placeholder Content */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Event Management</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Track story events across your narrative timeline. Organize events by time, location, and
          participating characters.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 5</p>
      </div>
    </div>
  );
}

export default EventsPage;
