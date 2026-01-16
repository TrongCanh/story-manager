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
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
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
