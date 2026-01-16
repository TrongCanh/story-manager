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
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: 'Events',
      description: 'Track story events across your narrative timeline with time-based filtering',
      path: '/events',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Locations',
      description: 'Organize story locations and settings with geographical details',
      path: '/locations',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Factions',
      description: 'Manage factions, organizations, and their members',
      path: '/factions',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Relationships',
      description: 'Track relationships between characters, factions, and other entities',
      path: '/relationships',
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      title: 'Timeline',
      description: 'Visualize and navigate your story timeline with time-based data filtering',
      path: '/timeline',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
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
