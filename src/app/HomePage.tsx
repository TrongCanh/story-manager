import { Users, Calendar, MapPin, Building2, Link2, Clock } from 'lucide-react';

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

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Story Manager</h1>
      <p className="text-sm text-gray-700 mb-8">
        Professional story-management web application for novelists
      </p>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <a
            key={feature.path}
            href={feature.path}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors"
          >
            <div className="flex items-start gap-4">
              {/* Feature Icon */}
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>

              {/* Feature Content */}
              <div className="flex-1">
                <h2 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h2>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Status Section */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Phase 1: App Shell & Layout</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-gray-700">React Router configured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-gray-700">Header and Sidebar navigation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-gray-700">Centered layout (max-w-6xl)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm text-gray-700">Responsive design foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
