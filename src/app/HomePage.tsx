import { Users, Calendar, MapPin, Building2, Link2, Clock } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import StatusSection from '../components/ui/StatusSection';

/**
 * HomePage Component
 * Main landing page for the Story Manager application.
 * Displays an overview of all available features and navigation options.
 *
 * Design follows project guidelines:
 * - Centered layout (max-w-6xl)
 * - Minimal, professional style
 * - Feature cards with icons
 * - Clear visual hierarchy
 */
function HomePage() {
  /**
   * Feature items configuration
   * Each feature includes a title, description, and path
   */
  const features = [
    {
      title: 'Characters',
      description: 'Manage story characters with time-based attributes and evolution tracking',
      path: '/characters',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Events',
      description: 'Track story events across your narrative timeline with time-based filtering',
      path: '/events',
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: 'Locations',
      description: 'Organize story locations and settings with geographical details',
      path: '/locations',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Factions',
      description: 'Manage factions, organizations, and their members',
      path: '/factions',
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: 'Relationships',
      description: 'Track relationships between characters, factions, and other entities',
      path: '/relationships',
      icon: <Link2 className="w-6 h-6" />,
    },
    {
      title: 'Timeline',
      description: 'Visualize and navigate your story timeline with time-based data filtering',
      path: '/timeline',
      icon: <Clock className="w-6 h-6" />,
    },
  ];

  /**
   * Status items for Phase 1
   */
  const statusItems = [
    'React Router configured',
    'Header and Sidebar navigation',
    'Centered layout (max-w-6xl)',
    'Responsive design foundation',
  ];

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-white">Story Manager</h1>
      <p className="text-sm text-gray-700 mb-8 dark:text-gray-300">
        Professional story-management web application for novelists
      </p>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <FeatureCard
            key={feature.path}
            title={feature.title}
            description={feature.description}
            path={feature.path}
            icon={feature.icon}
          />
        ))}
      </div>

      {/* Status Section */}
      <StatusSection title="Phase 1: App Shell & Layout" items={statusItems} />
    </div>
  );
}

export default HomePage;
