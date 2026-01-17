import { Users } from 'lucide-react';

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
          <Users className="w-8 h-8 text-gray-400" />
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
