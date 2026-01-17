import { NavLink } from 'react-router-dom';
import { useI18n } from '../../hooks/useI18n';
import type { TranslationKey } from '../../types/i18n';
import { Users, Calendar, MapPin, Building2, Link2, Clock } from 'lucide-react';

/**
 * Navigation item interface
 * Defines structure for sidebar navigation items
 */
interface NavItem {
  /** Route path */
  path: string;
  /** Translation key for label */
  labelKey: TranslationKey;
  /** Icon component */
  icon: React.ReactNode;
}

/**
 * Sidebar Component
 * Displays the main navigation sidebar with links to all entity pages.
 * Uses NavLink for active state styling and i18n for labels.
 *
 * @returns {React.ReactElement} The sidebar component
 */
function Sidebar(): React.ReactElement {
  const { t } = useI18n();

  /**
   * Navigation items configuration
   * Each item includes a path, translation key, and icon component
   */
  const navItems: NavItem[] = [
    {
      path: '/characters',
      labelKey: 'nav.characters',
      icon: <Users className="w-5 h-5" />,
    },
    {
      path: '/events',
      labelKey: 'nav.events',
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      path: '/locations',
      labelKey: 'nav.locations',
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      path: '/factions',
      labelKey: 'nav.factions',
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      path: '/relationships',
      labelKey: 'nav.relationships',
      icon: <Link2 className="w-5 h-5" />,
    },
    {
      path: '/timeline',
      labelKey: 'nav.timeline',
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="h-full p-4">
      <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 px-3">
        {t('common.actions')}
      </h2>
      <ul className="space-y-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-700 dark:bg-blue-900/20 dark:text-blue-400 font-medium'
                    : 'text-gray-700 hover:bg-emerald-50 dark:text-gray-300 dark:hover:bg-gray-800'
                }`
              }
            >
              {item.icon}
              <span>{t(item.labelKey)}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
