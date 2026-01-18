import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './app/HomePage';
import CharactersPage from './app/characters/CharactersPage';
import CharacterDetailPage from './app/characters/CharacterDetailPage';
import CharacterCreatePage from './app/characters/CharacterCreatePage';
import CharacterEditPage from './app/characters/CharacterEditPage';
import EventsPage from './app/events/EventsPage';
import EventDetailPage from './app/events/EventDetailPage';
import EventCreatePage from './app/events/EventCreatePage';
import EventEditPage from './app/events/EventEditPage';
import LocationsPage from './app/locations/LocationsPage';
import LocationDetailPage from './app/locations/LocationDetailPage';
import LocationCreatePage from './app/locations/LocationCreatePage';
import LocationEditPage from './app/locations/LocationEditPage';
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
 * - /events/create: EventCreatePage (Phase 5)
 * - /events/:id: EventDetailPage (Phase 5)
 * - /events/:id/edit: EventEditPage (Phase 5)
 * - /locations: LocationsPage (Phase 6)
 * - /locations/create: LocationCreatePage (Phase 6)
 * - /locations/:id: LocationDetailPage (Phase 6)
 * - /locations/:id/edit: LocationEditPage (Phase 6)
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
          <Route path="events/create" element={<EventCreatePage />} />
          <Route path="events/:id" element={<EventDetailPage />} />
          <Route path="events/:id/edit" element={<EventEditPage />} />
          <Route path="locations" element={<LocationsPage />} />
          <Route path="locations/create" element={<LocationCreatePage />} />
          <Route path="locations/:id" element={<LocationDetailPage />} />
          <Route path="locations/:id/edit" element={<LocationEditPage />} />
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
