import { Link } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import ThemeSwitcher from '../common/ThemeSwitcher';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { Menu, Home, X } from 'lucide-react';

/**
 * Header Component Props
 */
interface HeaderProps {
  /** Callback to toggle mobile sidebar */
  onMenuToggle: () => void;
  /** Whether mobile sidebar is currently open */
  isMobileMenuOpen: boolean;
}

/**
 * Header Component
 * Displays the application header with title, navigation controls, and mobile menu toggle.
 * Includes theme and language switchers.
 *
 * @param {HeaderProps} props - Component props
 * @returns {React.ReactElement} The header component
 */
function Header({ onMenuToggle, isMobileMenuOpen }: HeaderProps): React.ReactElement {
  const { t } = useI18n();

  return (
    <header className="border-b border-emerald-100 bg-white dark:border-gray-700 dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* App Title / Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center dark:bg-blue-500">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {t('app.title')}
              </h1>
            </div>
          </Link>
        </div>

        {/* Header Controls - Theme and Language Switchers */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
