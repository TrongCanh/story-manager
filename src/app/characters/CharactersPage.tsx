/**
 * CharactersPage Component
 * Placeholder page for character management.
 * Will be implemented in Phase 4 with full character list, detail, and form views.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 4: Full character management features
 */
function CharactersPage() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Characters</h1>

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
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Character Management</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Manage your story characters with time-based attributes. Track character roles,
          relationships, and evolution across your narrative timeline.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 4</p>
      </div>
    </div>
  );
}

export default CharactersPage;
