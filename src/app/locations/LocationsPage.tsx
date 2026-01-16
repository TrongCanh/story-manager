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
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Locations</h1>

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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Location Management</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Organize story locations and settings. Track where events occur and manage geographical
          details of your narrative world.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 6</p>
      </div>
    </div>
  );
}

export default LocationsPage;
