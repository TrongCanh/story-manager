/**
 * FeatureCard Component Props
 */
interface FeatureCardProps {
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Feature path/route */
  path: string;
  /** Feature icon component */
  icon: React.ReactNode;
}

/**
 * FeatureCard Component
 * Displays a feature card with icon, title, and description.
 * Used in HomePage to display available features.
 *
 * Design follows project guidelines:
 * - Gradient icon background
 * - Hover effects with shadow
 * - Responsive layout
 *
 * @param {FeatureCardProps} props - Component props
 * @returns {React.ReactElement} The feature card component
 */
function FeatureCard({ title, description, path, icon }: FeatureCardProps): React.ReactElement {
  return (
    <a
      href={path}
      className="group bg-white border border-emerald-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-md transition-all dark:bg-gray-800 dark:border-gray-700 dark:hover:border-blue-500 dark:hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        {/* Feature Icon */}
        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white shadow-sm dark:from-blue-600 dark:to-indigo-600">
          {icon}
        </div>

        {/* Feature Content */}
        <div className="flex-1">
          <h2 className="text-lg font-medium text-gray-900 mb-2 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default FeatureCard;
