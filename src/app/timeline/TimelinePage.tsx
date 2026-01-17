import { Clock } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

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
    <PlaceholderPage
      title="Timeline"
      subtitle="Timeline Visualization"
      description="Visualize and navigate your story timeline. View events, character states, and relationships at any point in your narrative."
      phaseText="Coming in Phase 9"
      icon={<Clock className="w-8 h-8" />}
      iconColorLight="text-amber-600"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default TimelinePage;
