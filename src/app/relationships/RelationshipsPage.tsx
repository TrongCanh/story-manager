import { Link2 } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

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
    <PlaceholderPage
      title="Relationships"
      subtitle="Relationship Management"
      description="Track relationships between entities. Visualize connections between characters, factions, locations, and events over time."
      phaseText="Coming in Phase 8"
      icon={<Link2 className="w-8 h-8" />}
      iconColorLight="text-teal-600"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default RelationshipsPage;
