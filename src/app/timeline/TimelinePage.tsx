import { Clock } from 'lucide-react';

/**
 * TimelinePage Component
 * Placeholder page for timeline visualization and navigation.
 * Will be implemented in Phase 9 with full timeline features.
 *
 * Current Phase 1: Basic layout and routing placeholder
 * Phase 9: Full timeline visualization and navigation features
 */
function TimelinePage() {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Timeline</h1>

      {/* Placeholder Content */}
      <div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-gray-400" />
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2">Timeline Visualization</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto">
          Visualize and navigate your story timeline. View events, character states, and
          relationships at any point in your narrative.
        </p>
        <p className="text-sm text-gray-500 mt-4">Coming in Phase 9</p>
      </div>
    </div>
  );
}

export default TimelinePage;
