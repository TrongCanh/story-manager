import { Building2 } from 'lucide-react';
import PlaceholderPage from '../../components/ui/PlaceholderPage';

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
    <PlaceholderPage
      title="Factions"
      subtitle="Faction Management"
      description="Manage factions and their members. Organize groups, organizations, and political entities within your story world."
      phaseText="Coming in Phase 7"
      icon={<Building2 className="w-8 h-8" />}
      iconColorLight="text-emerald-600"
      iconColorDark="dark:text-gray-400"
    />
  );
}

export default FactionsPage;
