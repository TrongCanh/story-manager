/**
 * StatusItem Component Props
 */
interface StatusItemProps {
  /** Status text */
  text: string;
}

/**
 * StatusItem Component
 * Displays a status item with a colored dot indicator.
 *
 * @param {StatusItemProps} props - Component props
 * @returns {React.ReactElement} The status item component
 */
function StatusItem({ text }: StatusItemProps): React.ReactElement {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-emerald-500 rounded-full dark:bg-blue-500"></span>
      <span className="text-sm text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
}

/**
 * StatusSection Component Props
 */
interface StatusSectionProps {
  /** Section title */
  title: string;
  /** Array of status items */
  items: string[];
}

/**
 * StatusSection Component
 * Displays a section with a title and a list of status items.
 * Used in HomePage to show project status.
 *
 * Design follows project guidelines:
 * - Clean, minimal layout
 * - Colored dot indicators
 * - Consistent spacing
 *
 * @param {StatusSectionProps} props - Component props
 * @returns {React.ReactElement} The status section component
 */
function StatusSection({ title, items }: StatusSectionProps): React.ReactElement {
  return (
    <div className="mt-8 bg-white border border-emerald-200 rounded-xl p-6 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-lg font-medium text-gray-900 mb-4 dark:text-white">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <StatusItem key={index} text={item} />
        ))}
      </div>
    </div>
  );
}

export default StatusSection;
