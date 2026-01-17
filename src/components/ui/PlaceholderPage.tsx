/**
 * PlaceholderPage Component Props
 */
interface PlaceholderPageProps {
  /** Page title */
  title: string;
  /** Page subtitle/description */
  subtitle: string;
  /** Detailed description */
  description: string;
  /** Coming soon phase text */
  phaseText: string;
  /** Icon component */
  icon: React.ReactNode;
  /** Icon color class (light mode) */
  iconColorLight?: string;
  /** Icon color class (dark mode) */
  iconColorDark?: string;
}

/**
 * PlaceholderPage Component
 * Displays a placeholder page with icon, title, and description.
 * Used for pages that are not yet implemented (Phase 1 placeholders).
 *
 * Design follows project guidelines:
 * - Centered layout
 * - Clean, minimal style
 * - Consistent spacing
 * - Theme-aware colors
 *
 * @param {PlaceholderPageProps} props - Component props
 * @returns {React.ReactElement} The placeholder page component
 */
function PlaceholderPage({
  title,
  subtitle,
  description,
  phaseText,
  icon,
  iconColorLight = 'text-emerald-400',
  iconColorDark = 'text-gray-400',
}: PlaceholderPageProps): React.ReactElement {
  return (
    <div>
      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-white">{title}</h1>

      {/* Placeholder Content */}
      <div className="bg-white border border-emerald-100 rounded-xl p-8 text-center dark:bg-gray-800 dark:border-gray-700">
        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 dark:bg-gray-700">
          <div className={iconColorLight + ' ' + iconColorDark}>{icon}</div>
        </div>
        <h2 className="text-lg font-medium text-gray-900 mb-2 dark:text-white">{subtitle}</h2>
        <p className="text-sm text-gray-700 max-w-md mx-auto dark:text-gray-300">{description}</p>
        <p className="text-sm text-gray-500 mt-4 dark:text-gray-400">{phaseText}</p>
      </div>
    </div>
  );
}

export default PlaceholderPage;
