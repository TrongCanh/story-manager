/**
 * FactionsPage Component
 * Placeholder page for faction management.
 * Will be implemented in Phase 7 with full faction list, detail, and form views.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 7: Full faction management features
 */
function FactionsPage() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Factions</h1>

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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Faction Management</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Manage factions and their members. Organize groups, organizations, and political entities
          within your story world.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 7</p>
      </div>
    </div>
  );
}

export default FactionsPage;
