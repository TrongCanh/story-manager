import { Link } from 'react-router-dom';

/**
 * NotFoundPage Component
 * 404 error page displayed when a user navigates to a non-existent route.
 * Provides a clear message and a link to return to the home page.
 *
 * Design follows the project's minimal, professional style:
 * - Centered layout
 * - Clear error message
 * - Action button to return home
 */
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {/* Error Icon */}
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      {/* Error Message */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-sm text-gray-700 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
