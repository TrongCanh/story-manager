/**
 * Mock Data / Dữ liệu Mock
 *
 * This file contains mock data for all entities.
 * Tệp này chứa dữ liệu mock cho tất cả thực thể.
 *
 * All data is time-based with versioned attributes.
 * Tất cả dữ liệu dựa trên thời gian với các thuộc tính được phiên bản hóa.
 */

import type { Novel, Character, Event, Location, Faction, Relationship, Tag } from '../types';

/**
 * Mock novels data
 * Dữ liệu tiểu thuyết mock
 */
export const mockNovels: Novel[] = [
  {
    id: 'novel-001',
    name: 'The Shadow Conspiracy',
    description: 'A thrilling story about uncovering a mysterious organization',
    type: 'novel',
    coverImage: null,
    owner: 'user-001',
    status: 'private',
    viewers: ['user-002', 'user-003'],
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'novel-002',
    name: 'The Last Kingdom',
    description: 'An epic tale of courage and sacrifice',
    type: 'novel',
    coverImage: null,
    owner: 'user-001',
    status: 'public',
    viewers: [],
    createdAt: '2021-06-15T00:00:00Z',
    updatedAt: '2024-11-20T00:00:00Z',
  },
];

/**
 * Mock tags data
 * Dữ liệu tag mock
 */
export const mockTags: Tag[] = [
  {
    id: 'tag-001',
    name: 'Protagonist',
    description: 'Main character of the story',
    color: '#10B981',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-002',
    name: 'Antagonist',
    description: 'Opposing character or force',
    color: '#EF4444',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-003',
    name: 'Ally',
    description: 'Supporting character who helps the protagonist',
    color: '#3B82F6',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-004',
    name: 'Mentor',
    description: 'Wise character who guides the protagonist',
    color: '#F59E0B',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-005',
    name: 'Safe Location',
    description: 'A secure or protected place',
    color: '#8B5CF6',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-006',
    name: 'Dangerous',
    description: 'Hazardous or threatening',
    color: '#DC2626',
    type: 'tag',
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
  },
  {
    id: 'tag-007',
    name: 'Hero',
    description: 'Heroic character',
    color: '#10B981',
    type: 'tag',
    novelId: 'novel-002',
    createdAt: '2021-06-15T00:00:00Z',
    updatedAt: '2024-11-20T00:00:00Z',
  },
  {
    id: 'tag-008',
    name: 'Villain',
    description: 'Villainous character',
    color: '#EF4444',
    type: 'tag',
    novelId: 'novel-002',
    createdAt: '2021-06-15T00:00:00Z',
    updatedAt: '2024-11-20T00:00:00Z',
  },
];

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
    avatar: null,
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'char-001-ver-001',
        validFrom: null,
        validTo: '2023-06-15T00:00:00Z',
        appearance: 'Tall, athletic build, black hair, brown eyes',
        personality: 'Determined, curious, sometimes impulsive',
        status: 'Sống',
        notes: 'Has a mysterious pendant',
      },
      {
        id: 'char-001-ver-002',
        validFrom: '2023-06-15T00:00:00Z',
        validTo: null,
        appearance: 'Tall, athletic build, black hair, brown eyes, scar on left cheek',
        personality: 'Determined, cautious, strategic',
        status: 'Sống',
        notes: 'Scar from an encounter with the Shadow Faction',
      },
    ],
    tags: ['tag-001'],
  },
  {
    id: 'char-002',
    name: 'Sarah Chen',
    description: "Alex's childhood friend and ally",
    type: 'character',
    avatar: null,
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'char-002-ver-001',
        validFrom: null,
        validTo: null,
        appearance: 'Medium height, slim, short brown hair, green eyes',
        personality: 'Intelligent, loyal, witty',
        status: 'Sống',
        notes: 'Works as a freelance security consultant',
      },
    ],
    tags: ['tag-003'],
  },
  {
    id: 'char-003',
    name: 'Marcus Blackwood',
    description: 'Former military officer turned mercenary',
    type: 'character',
    avatar: null,
    novelId: 'novel-001',
    createdAt: '2021-03-15T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'char-003-ver-001',
        validFrom: '2021-03-15T00:00:00Z',
        validTo: '2023-08-01T00:00:00Z',
        appearance: 'Muscular, tall, shaved head, intense gray eyes',
        personality: 'Stoic, professional, honorable',
        status: 'Sống',
        notes: 'Has connections to the military',
      },
      {
        id: 'char-003-ver-002',
        validFrom: '2023-08-01T00:00:00Z',
        validTo: null,
        appearance: 'Muscular, tall, shaved head, intense gray eyes, slight limp',
        personality: 'Stoic, professional, honorable, more open',
        status: 'Sống',
        notes: 'Limp from a battle injury',
      },
    ],
    tags: ['tag-003', 'tag-004'],
  },
  {
    id: 'char-004',
    name: 'Elena Voronova',
    description: 'Mysterious scientist with knowledge of the conspiracy',
    type: 'character',
    avatar: null,
    novelId: 'novel-001',
    createdAt: '2022-06-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'char-004-ver-001',
        validFrom: '2022-06-01T00:00:00Z',
        validTo: null,
        appearance: 'Elegant, medium height, blonde hair, blue eyes, glasses',
        personality: 'Brilliant, guarded, compassionate',
        status: 'Sống',
        notes: 'Has evidence of the conspiracy',
      },
    ],
    tags: ['tag-003'],
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
    title: 'The Discovery',
    description: "Alex discovers his family's hidden past",
    type: 'event',
    startDate: '2023-06-15T10:30:00Z',
    endDate: '2023-06-15T12:00:00Z',
    novelId: 'novel-001',
    characters: [
      {
        characterId: 'char-001',
        role: 'Chủ đạo',
        notes: 'Alex learns about the conspiracy',
      },
      {
        characterId: 'char-002',
        role: 'Người hỗ trợ',
        notes: 'Sarah helps Alex process the discovery',
      },
    ],
    locations: ['loc-001'],
    factions: [],
    tags: ['tag-001'],
    createdAt: '2023-06-15T00:00:00Z',
    updatedAt: '2023-06-15T00:00:00Z',
  },
  {
    id: 'evt-002',
    name: 'First Encounter',
    title: 'First Encounter',
    description: 'Alex meets Marcus for the first time',
    type: 'event',
    startDate: '2023-07-20T14:15:00Z',
    endDate: '2023-07-20T15:30:00Z',
    novelId: 'novel-001',
    characters: [
      {
        characterId: 'char-001',
        role: 'Chủ đạo',
        notes: 'Alex approaches Marcus for help',
      },
      {
        characterId: 'char-003',
        role: 'Người hỗ trợ',
        notes: 'Marcus agrees to help Alex',
      },
    ],
    locations: ['loc-002'],
    factions: [],
    tags: ['tag-003'],
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2023-07-20T00:00:00Z',
  },
  {
    id: 'evt-003',
    name: 'The Break-In',
    title: 'The Break-In',
    description: 'The team infiltrates a secure facility',
    type: 'event',
    startDate: '2023-09-10T02:00:00Z',
    endDate: '2023-09-10T04:30:00Z',
    novelId: 'novel-001',
    characters: [
      {
        characterId: 'char-001',
        role: 'Chỉ huy',
        notes: 'Alex leads the operation',
      },
      {
        characterId: 'char-002',
        role: 'Hỗ trợ kỹ thuật',
        notes: 'Sarah handles security systems',
      },
      {
        characterId: 'char-003',
        role: 'Bảo vệ',
        notes: 'Marcus provides combat support',
      },
    ],
    locations: ['loc-003'],
    factions: [
      {
        factionId: 'fac-001',
        role: 'Đối thủ',
        notes: 'Shadow Faction guards the facility',
      },
    ],
    tags: ['tag-001', 'tag-006'],
    createdAt: '2023-09-10T00:00:00Z',
    updatedAt: '2023-09-10T00:00:00Z',
  },
  {
    id: 'evt-004',
    name: 'Meeting Elena',
    title: 'Meeting Elena',
    description: 'Alex meets Elena Voronova',
    type: 'event',
    startDate: '2023-10-05T16:45:00Z',
    endDate: '2023-10-05T18:00:00Z',
    novelId: 'novel-001',
    characters: [
      {
        characterId: 'char-001',
        role: 'Chủ đạo',
        notes: 'Alex seeks information',
      },
      {
        characterId: 'char-004',
        role: 'Người cung cấp thông tin',
        notes: 'Elena shares her knowledge',
      },
    ],
    locations: ['loc-004'],
    factions: [],
    tags: ['tag-001', 'tag-005'],
    createdAt: '2023-10-05T00:00:00Z',
    updatedAt: '2023-10-05T00:00:00Z',
  },
  {
    id: 'evt-005',
    name: 'The Betrayal',
    title: 'The Betrayal',
    description: 'A trusted ally reveals their true allegiance',
    type: 'event',
    startDate: '2023-11-20T19:30:00Z',
    endDate: '2023-11-20T21:00:00Z',
    novelId: 'novel-001',
    characters: [
      {
        characterId: 'char-001',
        role: 'Nạn nhân',
        notes: 'Alex is betrayed',
      },
      {
        characterId: 'char-002',
        role: 'Kẻ phản bội',
        notes: 'Sarah reveals her true allegiance',
      },
    ],
    locations: ['loc-001'],
    factions: [
      {
        factionId: 'fac-001',
        role: 'Kẻ chủ mưu',
        notes: 'Shadow Faction orchestrated the betrayal',
      },
    ],
    tags: ['tag-001', 'tag-006'],
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
    novelId: 'novel-001',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'loc-001-ver-001',
        validFrom: null,
        validTo: null,
        description: "Alex's home base in the city",
        features: "Contains Alex's investigation board, computer setup, and personal belongings",
      },
    ],
    tags: ['tag-005'],
  },
  {
    id: 'loc-002',
    name: 'The Rusty Anchor',
    description: 'A bar where Marcus can often be found',
    type: 'location',
    novelId: 'novel-001',
    createdAt: '2021-03-15T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'loc-002-ver-001',
        validFrom: null,
        validTo: null,
        description: 'A bar where Marcus can often be found',
        features: 'Neutral ground for meetings, dim lighting, quiet atmosphere',
      },
    ],
    tags: ['tag-005'],
  },
  {
    id: 'loc-003',
    name: 'Shadow Facility',
    description: 'A secret research facility',
    type: 'location',
    novelId: 'novel-001',
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'loc-003-ver-001',
        validFrom: null,
        validTo: null,
        description: 'A secret research facility',
        features: 'High security, underground, contains sensitive data and experimental equipment',
      },
    ],
    tags: ['tag-006'],
  },
  {
    id: 'loc-004',
    name: 'Safe House',
    description: 'A hidden location used by Elena',
    type: 'location',
    novelId: 'novel-001',
    createdAt: '2022-06-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'loc-004-ver-001',
        validFrom: null,
        validTo: null,
        description: 'A hidden location used by Elena',
        features: "Contains Elena's research materials, well-hidden, secure",
      },
    ],
    tags: ['tag-005'],
  },
];

/**
 * Mock factions data
 * Dữ liệu thế lực mock
 */
export const mockFactions: Faction[] = [
  {
    id: 'fac-001',
    name: 'Shadow Faction',
    description: 'A mysterious organization pulling strings behind the scenes',
    type: 'faction',
    novelId: 'novel-001',
    createdAt: '2010-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'fac-001-ver-001',
        validFrom: null,
        validTo: null,
        description: 'A mysterious organization pulling strings behind the scenes',
        status: 'Hoạt động',
      },
    ],
    members: [],
    tags: ['tag-002'],
  },
  {
    id: 'fac-002',
    name: 'The Resistance',
    description: 'A group fighting against the Shadow Faction',
    type: 'faction',
    novelId: 'novel-001',
    createdAt: '2022-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    versions: [
      {
        id: 'fac-002-ver-001',
        validFrom: null,
        validTo: null,
        description: 'A group fighting against the Shadow Faction',
        status: 'Hoạt động',
      },
    ],
    members: [
      {
        id: 'fac-002-mem-001',
        characterId: 'char-001',
        joinedDate: '2022-01-01T00:00:00Z',
        leftDate: null,
        notes: 'Founder of The Resistance',
        roles: [
          {
            id: 'fac-002-mem-001-role-001',
            validFrom: '2022-01-01T00:00:00Z',
            validTo: null,
            roleName: 'Lãnh đạo',
          },
        ],
      },
      {
        id: 'fac-002-mem-002',
        characterId: 'char-002',
        joinedDate: '2022-02-15T00:00:00Z',
        leftDate: null,
        notes: 'Early member',
        roles: [
          {
            id: 'fac-002-mem-002-role-001',
            validFrom: '2022-02-15T00:00:00Z',
            validTo: null,
            roleName: 'Chuyên gia kỹ thuật',
          },
        ],
      },
      {
        id: 'fac-002-mem-003',
        characterId: 'char-003',
        joinedDate: '2023-08-01T00:00:00Z',
        leftDate: null,
        notes: 'Joined after helping Alex',
        roles: [
          {
            id: 'fac-002-mem-003-role-001',
            validFrom: '2023-08-01T00:00:00Z',
            validTo: null,
            roleName: 'Cố vấn quân sự',
          },
        ],
      },
      {
        id: 'fac-002-mem-004',
        characterId: 'char-004',
        joinedDate: '2023-10-05T00:00:00Z',
        leftDate: null,
        notes: 'Joined after meeting Alex',
        roles: [
          {
            id: 'fac-002-mem-004-role-001',
            validFrom: '2023-10-05T00:00:00Z',
            validTo: null,
            roleName: 'Cố vấn khoa học',
          },
        ],
      },
    ],
    tags: ['tag-003'],
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
    characterAId: 'char-001',
    characterBId: 'char-002',
    createdAt: '2020-01-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    periods: [
      {
        id: 'rel-001-per-001',
        relationshipType: 'Bạn bè',
        validFrom: null,
        validTo: '2023-11-20T19:30:00Z',
        description: 'Childhood friends who grew up together',
      },
      {
        id: 'rel-001-per-002',
        relationshipType: 'Kẻ thù',
        validFrom: '2023-11-20T19:30:00Z',
        validTo: null,
        description: "After Sarah's betrayal",
      },
    ],
  },
  {
    id: 'rel-002',
    name: 'Alex and Marcus',
    description: 'Former rivals turned allies',
    type: 'relationship',
    characterAId: 'char-001',
    characterBId: 'char-003',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    periods: [
      {
        id: 'rel-002-per-001',
        relationshipType: 'Đồng minh',
        validFrom: '2023-07-20T00:00:00Z',
        validTo: null,
        description: 'Respectful alliance built on mutual goals',
      },
    ],
  },
  {
    id: 'rel-003',
    name: 'Alex and Elena',
    description: 'Informant and investigator',
    type: 'relationship',
    characterAId: 'char-001',
    characterBId: 'char-004',
    createdAt: '2023-10-05T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    periods: [
      {
        id: 'rel-003-per-001',
        relationshipType: 'Hợp tác',
        validFrom: '2023-10-05T00:00:00Z',
        validTo: null,
        description: 'Working relationship based on shared goals',
      },
    ],
  },
  {
    id: 'rel-004',
    name: 'Sarah and Marcus',
    description: 'Cautious allies',
    type: 'relationship',
    characterAId: 'char-002',
    characterBId: 'char-003',
    createdAt: '2023-07-20T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z',
    periods: [
      {
        id: 'rel-004-per-001',
        relationshipType: 'Đồng minh',
        validFrom: '2023-07-20T00:00:00Z',
        validTo: '2023-11-20T19:30:00Z',
        description: 'Professional relationship with mutual respect',
      },
      {
        id: 'rel-004-per-002',
        relationshipType: 'Kẻ thù',
        validFrom: '2023-11-20T19:30:00Z',
        validTo: null,
        description: "After Sarah's betrayal",
      },
    ],
  },
];

/**
 * All mock data combined
 * Tất cả dữ liệu mock kết hợp
 */
export const mockData = {
  novels: mockNovels,
  tags: mockTags,
  characters: mockCharacters,
  events: mockEvents,
  locations: mockLocations,
  factions: mockFactions,
  relationships: mockRelationships,
};
