import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

/**
 * Layout Component
 * Main application layout shell that wraps all pages.
 * Combines Header, Sidebar, and Main content area with centered layout.
 *
 * Layout Structure:
 * - Header: Normal flow (scrolls with content)
 * - Sidebar: Left navigation (hidden on mobile, toggleable; visible on desktop)
 * - Main: Centered content area (max-w-6xl, mx-auto, px-6)
 *
 * @returns {React.ReactElement} The layout wrapper component
 */
function Layout(): React.ReactElement {
  /**
   * State for mobile sidebar toggle
   * Controls whether mobile sidebar overlay is visible
   */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Toggle mobile menu state
   * Opens/closes of mobile sidebar overlay
   */
  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  /**
   * Close mobile menu (used when clicking outside or on route change)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="h-screen w-screen bg-emerald-50 dark:bg-gray-900 flex flex-col overflow-hidden">
      {/* Header Component with mobile menu toggle */}
      <Header onMenuToggle={handleMenuToggle} isMobileMenuOpen={isMobileMenuOpen} />

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay - Shows when menu is open */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
        )}

        {/* Sidebar - Desktop visible, Mobile toggleable */}
        <aside
          className={`
            fixed lg:static top-0 left-0 bottom-0 z-50
            w-64 border-r border-emerald-100 bg-white dark:border-gray-700 dark:bg-gray-900
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0
            overflow-y-auto
          `}
        >
          <Sidebar />
        </aside>

        {/* Main Content Wrapper */}
        <main className="flex-1 overflow-y-auto bg-emerald-50 dark:bg-gray-900">
          {/* Centered Layout Container */}
          <div className="max-w-6xl mx-auto px-6 py-8">
            {/* Page Content Outlet */}
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
