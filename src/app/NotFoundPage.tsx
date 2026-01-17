import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

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
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6 dark:bg-gray-700">
        <AlertTriangle className="w-8 h-8 text-amber-500 dark:text-gray-400" />
      </div>

      {/* Error Message */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-2 dark:text-gray-100">
        Page Not Found
      </h1>
      <p className="text-sm text-gray-700 mb-8 max-w-md dark:text-gray-300">
        The page you are looking for does not exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
}

export default NotFoundPage;
