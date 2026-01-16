/**
 * RelationshipsPage Component
 * Placeholder page for relationship management.
 * Will be implemented in Phase 8 with full relationship list, detail, and form views.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 8: Full relationship management features
 */
function RelationshipsPage() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Relationships</h1>

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
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Relationship Management</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Track relationships between entities. Visualize connections between characters, factions,
          locations, and events over time.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 8</p>
      </div>
    </div>
  );
}

export default RelationshipsPage;
