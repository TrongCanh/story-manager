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
    <header className="border-b border bg-surface sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* App Title / Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-text-muted hover:text-text-primary dark:text-text-secondary dark:hover:text-text-primary rounded-lg hover:bg-surfaceMuted dark:hover:bg-dark-surfaceMuted transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center dark:bg-blue-500">
              <Home className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-text-primary">{t('app.title')}</h1>
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
