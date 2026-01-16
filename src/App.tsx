function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <header className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Story Manager</h1>
          <p className="text-sm text-gray-700 mt-2">
            Professional story-management web application for novelists
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-6">
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Characters</h2>
              <p className="text-sm text-gray-700">
                Manage your story characters with time-based attributes
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Events</h2>
              <p className="text-sm text-gray-700">
                Track story events across your narrative timeline
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Locations</h2>
              <p className="text-sm text-gray-700">Organize story locations and settings</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Factions</h2>
              <p className="text-sm text-gray-700">Manage factions and their members</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Relationships</h2>
              <p className="text-sm text-gray-700">Track relationships between entities</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Timeline</h2>
              <p className="text-sm text-gray-700">Visualize and navigate your story timeline</p>
            </div>
          </div>

          {/* Status Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Phase 0: Foundation</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-700">React + TypeScript + Vite</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-700">TailwindCSS v4 configured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-700">ESLint + Prettier configured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-700">Project structure created</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-sm text-gray-700">Git repository initialized</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
