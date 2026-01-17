import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './app/HomePage';
import CharactersPage from './app/characters/CharactersPage';
import CharacterDetailPage from './app/characters/CharacterDetailPage';
import CharacterCreatePage from './app/characters/CharacterCreatePage';
import CharacterEditPage from './app/characters/CharacterEditPage';
import EventsPage from './app/events/EventsPage';
import LocationsPage from './app/locations/LocationsPage';
import FactionsPage from './app/factions/FactionsPage';
import RelationshipsPage from './app/relationships/RelationshipsPage';
import TimelinePage from './app/timeline/TimelinePage';
import NotFoundPage from './app/NotFoundPage';

/**
 * App Component
 * Main application component with React Router configuration.
 * Sets up all routes for the Story Manager application.
 *
 * Route Structure:
 * - /: HomePage (dashboard with feature overview)
 * - /characters: CharactersPage (Phase 4)
 * - /characters/create: CharacterCreatePage (Phase 4)
 * - /characters/:id: CharacterDetailPage (Phase 4)
 * - /characters/:id/edit: CharacterEditPage (Phase 4)
 * - /events: EventsPage (Phase 5)
 * - /locations: LocationsPage (Phase 6)
 * - /factions: FactionsPage (Phase 7)
 * - /relationships: RelationshipsPage (Phase 8)
 * - /timeline: TimelinePage (Phase 9)
 * - *: NotFoundPage (404)
 *
 * All routes are wrapped in the Layout component which provides:
 * - Header with app title and controls
 * - Sidebar navigation
 * - Centered main content area (max-w-6xl)
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes share the same Layout component */}
        <Route path="/" element={<Layout />}>
          {/* Home / Dashboard */}
          <Route index element={<HomePage />} />

          {/* Entity Management Pages */}
          <Route path="characters" element={<CharactersPage />} />
          <Route path="characters/create" element={<CharacterCreatePage />} />
          <Route path="characters/:id" element={<CharacterDetailPage />} />
          <Route path="characters/:id/edit" element={<CharacterEditPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="factions" element={<FactionsPage />} />
          <Route path="relationships" element={<RelationshipsPage />} />

          {/* Timeline Page */}
          <Route path="timeline" element={<TimelinePage />} />

          {/* 404 - Catch all unmatched routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
