/**
 * Mock Data / Dữ liệu Mock
 *
 * This file contains mock data for all entities.
 * Tệp này chứa dữ liệu mock cho tất cả thực thể.
 *
 * All data is time-based with versioned attributes.
 * Tất cả dữ liệu dựa trên thời gian với các thuộc tính được phiên bản hóa.
 */

import type { Character, Event, Location, Faction, Relationship, Timeline } from '../types';

/**
 * Mock characters data
 * Dữ liệu nhân vật mock
 */
export const mockCharacters: Character[] = [
  {
    id: 'char-001',
    name: 'Alex Nguyen',
    description: 'The protagonist of the story',
    type: 'character',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2020-01-01T00:00:00Z',
          to: '2023-06-15T00:00:00Z',
        },
        role: 'Student',
        age: 20,
        gender: 'Male',
        appearance: 'Tall, athletic build, black hair, brown eyes',
        personality: 'Determined, curious, sometimes impulsive',
        background: 'Born in a small town, moved to the city for university',
        goals: 'To uncover the truth about his family',
        flaws: 'Can be stubborn and reckless',
        skills: 'Martial arts, investigation',
        notes: 'Has a mysterious pendant',
      },
      {
        timeRange: {
          from: '2023-06-15T00:00:00Z',
          to: null,
        },
        role: 'Investigator',
        age: 24,
        gender: 'Male',
        appearance: 'Tall, athletic build, black hair, brown eyes, scar on left cheek',
        personality: 'Determined, cautious, strategic',
        background: 'Former student turned investigator after discovering family secrets',
        goals: 'To protect those he cares about and find the truth',
        flaws: 'Struggles with trust issues',
        skills: 'Martial arts, investigation, leadership',
        notes: 'Scar from an encounter with the Shadow Faction',
      },
    ],
  },
  {
    id: 'char-002',
    name: 'Sarah Chen',
    description: "Alex's childhood friend and ally",
    type: 'character',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2020-01-01T00:00:00Z',
          to: null,
        },
        role: 'Hacker',
        age: 23,
        gender: 'Female',
        appearance: 'Medium height, slim, short brown hair, green eyes',
        personality: 'Intelligent, loyal, witty',
        background: 'Grew up in the same town as Alex, showed early talent with computers',
        goals: 'To help Alex and uncover the conspiracy',
        flaws: 'Can be overly protective',
        skills: 'Hacking, coding, research',
        notes: 'Works as a freelance security consultant',
      },
    ],
  },
  {
    id: 'char-003',
    name: 'Marcus Blackwood',
    description: 'Former military officer turned mercenary',
    type: 'character',
    createdAt: '2021-03-15T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2021-03-15T00:00:00Z',
          to: '2023-08-01T00:00:00Z',
        },
        role: 'Mercenary',
        age: 35,
        gender: 'Male',
        appearance: 'Muscular, tall, shaved head, intense gray eyes',
        personality: 'Stoic, professional, honorable',
        background: 'Former special forces, discharged under mysterious circumstances',
        goals: 'To find redemption for past actions',
        flaws: 'Struggles with emotional expression',
        skills: 'Combat tactics, weapons, survival',
        notes: 'Has connections to the military',
      },
      {
        timeRange: {
          from: '2023-08-01T00:00:00Z',
          to: null,
        },
        role: 'Ally',
        age: 37,
        gender: 'Male',
        appearance: 'Muscular, tall, shaved head, intense gray eyes, slight limp',
        personality: 'Stoic, professional, honorable, more open',
        background: 'Former special forces, now working with Alex',
        goals: 'To protect the team and expose the truth',
        flaws: 'Still struggles with emotional expression',
        skills: 'Combat tactics, weapons, survival, mentoring',
        notes: 'Limp from a battle injury',
      },
    ],
  },
  {
    id: 'char-004',
    name: 'Elena Voronova',
    description: 'Mysterious scientist with knowledge of the conspiracy',
    type: 'character',
    createdAt: '2022-06-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2022-06-01T00:00:00Z',
          to: null,
        },
        role: 'Scientist',
        age: 31,
        gender: 'Female',
        appearance: 'Elegant, medium height, blonde hair, blue eyes, glasses',
        personality: 'Brilliant, guarded, compassionate',
        background: 'Former researcher for a shadowy organization',
        goals: "To expose the organization's crimes",
        flaws: 'Holds too many secrets',
        skills: 'Science, research, analysis',
        notes: 'Has evidence of the conspiracy',
      },
    ],
  },
];

/**
 * Mock events data
 * Dữ liệu sự kiện mock
 */
export const mockEvents: Event[] = [
  {
    id: 'evt-001',
    name: 'The Discovery',
    description: "Alex discovers his family's hidden past",
    type: 'event',
    timestamp: '2023-06-15T10:30:00Z',
    locationId: 'loc-001',
    eventType: 'Plot Point',
    importance: 'critical',
    participants: ['char-001', 'char-002'],
    outcome: 'Alex learns about the conspiracy',
    impact: 'Sets Alex on his path as an investigator',
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z',
  },
  {
    id: 'evt-002',
    name: 'First Encounter',
    description: 'Alex meets Marcus for the first time',
    type: 'event',
    timestamp: '2023-07-20T14:15:00Z',
    locationId: 'loc-002',
    eventType: 'Meeting',
    importance: 'high',
    participants: ['char-001', 'char-003'],
    outcome: 'Marcus agrees to help Alex',
    impact: 'Alex gains a powerful ally',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2023-07-20T00:00:00Z',
  },
  {
    id: 'evt-003',
    name: 'The Break-In',
    description: 'The team infiltrates a secure facility',
    type: 'event',
    timestamp: '2023-09-10T02:00:00Z',
    locationId: 'loc-003',
    eventType: 'Action',
    importance: 'high',
    participants: ['char-001', 'char-002', 'char-003'],
    outcome: 'They retrieve important documents',
    impact: 'Marcus is injured but survives',
    createdAt: '2023-09-10T00:00:00Z',
    updatedAt: '2023-09-10T00:00:00Z',
  },
  {
    id: 'evt-004',
    name: 'Meeting Elena',
    description: 'Alex meets Elena Voronova',
    type: 'event',
    timestamp: '2023-10-05T16:45:00Z',
    locationId: 'loc-004',
    eventType: 'Meeting',
    importance: 'critical',
    participants: ['char-001', 'char-004'],
    outcome: 'Elena shares her knowledge',
    impact: 'The team gains crucial information',
    createdAt: '2023-10-05T00:00:00Z',
    updatedAt: '2023-10-05T00:00:00Z',
  },
  {
    id: 'evt-005',
    name: 'The Betrayal',
    description: 'A trusted ally reveals their true allegiance',
    type: 'event',
    timestamp: '2023-11-20T19:30:00Z',
    locationId: 'loc-001',
    eventType: 'Plot Twist',
    importance: 'critical',
    participants: ['char-001', 'char-002'],
    outcome: 'The team is compromised',
    impact: 'Alex must reevaluate who he can trust',
    createdAt: '2023-11-20T00:00:00Z',
    updatedAt: '2023-11-20T00:00:00Z',
  },
];

/**
 * Mock locations data
 * Dữ liệu địa điểm mock
 */
export const mockLocations: Location[] = [
  {
    id: 'loc-001',
    name: "Alex's Apartment",
    description: "Alex's home base in the city",
    type: 'location',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2020-01-01T00:00:00Z',
          to: null,
        },
        locationType: 'Apartment',
        climate: 'Temperate',
        geography: 'Urban, downtown area',
        population: 'N/A',
        culture: 'Modern urban',
        economy: 'Mixed residential/commercial',
        government: 'City jurisdiction',
        notes: "Contains Alex's investigation board",
      },
    ],
  },
  {
    id: 'loc-002',
    name: 'The Rusty Anchor',
    description: 'A bar where Marcus can often be found',
    type: 'location',
    createdAt: '2021-03-15T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2021-03-15T00:00:00Z',
          to: null,
        },
        locationType: 'Bar',
        climate: 'Temperate',
        geography: 'Urban, waterfront district',
        population: 'N/A',
        culture: 'Working class',
        economy: 'Hospitality',
        government: 'City jurisdiction',
        notes: 'Neutral ground for meetings',
      },
    ],
  },
  {
    id: 'loc-003',
    name: 'Shadow Facility',
    description: 'A secret research facility',
    type: 'location',
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2022-01-01T00:00:00Z',
          to: null,
        },
        locationType: 'Research Facility',
        climate: 'Controlled',
        geography: 'Underground, unknown location',
        population: 'Classified',
        culture: 'Military/Scientific',
        economy: 'Government funded',
        government: 'Classified',
        notes: 'High security, contains sensitive data',
      },
    ],
  },
  {
    id: 'loc-004',
    name: 'Safe House',
    description: 'A hidden location used by Elena',
    type: 'location',
    createdAt: '2022-06-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2022-06-01T00:00:00Z',
          to: null,
        },
        locationType: 'Safe House',
        climate: 'Temperate',
        geography: 'Suburban, secluded',
        population: 'N/A',
        culture: 'Private',
        economy: 'N/A',
        government: 'Private property',
        notes: "Contains Elena's research materials",
      },
    ],
  },
];

/**
 * Mock factions data
 * Dữ liệu phái mock
 */
export const mockFactions: Faction[] = [
  {
    id: 'fac-001',
    name: 'Shadow Faction',
    description: 'A mysterious organization pulling strings behind the scenes',
    type: 'faction',
    createdAt: '2010-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2010-01-01T00:00:00Z',
          to: null,
        },
        factionType: 'Conspiracy',
        ideology: 'Control through information',
        goals: 'To maintain power and control',
        resources: 'Extensive, including technology and influence',
        influence: 'Global',
        members: [],
        leader: null,
        notes: 'True extent unknown',
      },
    ],
  },
  {
    id: 'fac-002',
    name: 'The Resistance',
    description: 'A group fighting against the Shadow Faction',
    type: 'faction',
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    attributes: [
      {
        timeRange: {
          from: '2022-01-01T00:00:00Z',
          to: null,
        },
        factionType: 'Resistance',
        ideology: 'Freedom and truth',
        goals: 'To expose and stop the Shadow Faction',
        resources: 'Limited, but growing',
        influence: 'Regional',
        members: ['char-001', 'char-002', 'char-003', 'char-004'],
        leader: 'char-001',
        notes: 'Operating in secret',
      },
    ],
  },
];

/**
 * Mock relationships data
 * Dữ liệu mối quan hệ mock
 */
export const mockRelationships: Relationship[] = [
  {
    id: 'rel-001',
    name: 'Alex and Sarah',
    description: 'Childhood friends and allies',
    type: 'relationship',
    entity1Id: 'char-001',
    entity2Id: 'char-002',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    details: [
      {
        timeRange: {
          from: '2020-01-01T00:00:00Z',
          to: null,
        },
        relationshipType: 'Friendship',
        description: 'Childhood friends who grew up together',
        status: 'active',
        strength: 9,
      },
    ],
  },
  {
    id: 'rel-002',
    name: 'Alex and Marcus',
    description: 'Former rivals turned allies',
    type: 'relationship',
    entity1Id: 'char-001',
    entity2Id: 'char-003',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    details: [
      {
        timeRange: {
          from: '2023-07-20T00:00:00Z',
          to: null,
        },
        relationshipType: 'Ally',
        description: 'Respectful alliance built on mutual goals',
        status: 'active',
        strength: 8,
      },
    ],
  },
  {
    id: 'rel-003',
    name: 'Alex and Elena',
    description: 'Informant and investigator',
    type: 'relationship',
    entity1Id: 'char-001',
    entity2Id: 'char-004',
    createdAt: '2023-10-05T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    details: [
      {
        timeRange: {
          from: '2023-10-05T00:00:00Z',
          to: null,
        },
        relationshipType: 'Professional',
        description: 'Working relationship based on shared goals',
        status: 'active',
        strength: 7,
      },
    ],
  },
  {
    id: 'rel-004',
    name: 'Sarah and Marcus',
    description: 'Cautious allies',
    type: 'relationship',
    entity1Id: 'char-002',
    entity2Id: 'char-003',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    details: [
      {
        timeRange: {
          from: '2023-07-20T00:00:00Z',
          to: null,
        },
        relationshipType: 'Ally',
        description: 'Professional relationship with mutual respect',
        status: 'active',
        strength: 6,
      },
    ],
  },
];

/**
 * Mock timeline data
 * Dữ liệu dòng thời gian mock
 */
export const mockTimeline: Timeline = {
  id: 'timeline-001',
  name: 'Main Story Timeline',
  startDate: '2020-01-01T00:00:00Z',
  endDate: '2024-12-31T23:59:59Z',
  events: [
    {
      id: 'tevt-001',
      timestamp: '2020-01-01T00:00:00Z',
      title: 'Story Begins',
      description: 'The story starts with Alex as a student',
      eventId: 'evt-001',
    },
    {
      id: 'tevt-002',
      timestamp: '2023-06-15T10:30:00Z',
      title: 'The Discovery',
      description: "Alex discovers his family's hidden past",
      eventId: 'evt-001',
    },
    {
      id: 'tevt-003',
      timestamp: '2023-07-20T14:15:00Z',
      title: 'First Encounter',
      description: 'Alex meets Marcus for the first time',
      eventId: 'evt-002',
    },
    {
      id: 'tevt-004',
      timestamp: '2023-09-10T02:00:00Z',
      title: 'The Break-In',
      description: 'The team infiltrates a secure facility',
      eventId: 'evt-003',
    },
    {
      id: 'tevt-005',
      timestamp: '2023-10-05T16:45:00Z',
      title: 'Meeting Elena',
      description: 'Alex meets Elena Voronova',
      eventId: 'evt-004',
    },
    {
      id: 'tevt-006',
      timestamp: '2023-11-20T19:30:00Z',
      title: 'The Betrayal',
      description: 'A trusted ally reveals their true allegiance',
      eventId: 'evt-005',
    },
  ],
};

/**
 * All mock data combined
 * Tất cả dữ liệu mock kết hợp
 */
export const mockData = {
  characters: mockCharacters,
  events: mockEvents,
  locations: mockLocations,
  factions: mockFactions,
  relationships: mockRelationships,
  timeline: mockTimeline,
};
