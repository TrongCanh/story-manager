import { Users } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

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
    <PlaceholderPage
      title="Characters"
      subtitle="Character Management"
      description="Manage your story characters with time-based attributes. Track character roles, relationships, and evolution across your narrative timeline."
      phaseText="Coming in Phase 4"
      icon={<Users className="w-8 h-8" />}
      iconColorLight="text-emerald-400"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default CharactersPage;
