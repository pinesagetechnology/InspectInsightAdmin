import { Region, User } from "../entities/user";
import { ConditionRatingEntity, InspectionEntity, MaintenanceActionEntity } from "../entities/inspection";
import { Structure, StructureElement } from "../entities/structure";

export const sampleElements: StructureElement[] = [
  {
    elementId: "1",
    code: "BR-100",
    description: "Main Bridge",
    quantity: 1,
    unit: "piece",
    elementCode: "MB-1",
    eciChannel: "1001",
    children: [
      {
        elementId: "2",
        code: "BR-101",
        description: "Substructure",
        quantity: 2,
        unit: "piece",
        elementCode: "SS-1",
        eciChannel: "1002",
        children: [
          {
            elementId: "3",
            code: "BR-102",
            description: "Pier",
            quantity: 4,
            unit: "piece",
            elementCode: "P-1",
            eciChannel: "1003"
          },
          {
            elementId: "4",
            code: "BR-103",
            description: "Abutment",
            quantity: 2,
            unit: "piece",
            elementCode: "A-1",
            eciChannel: "1004"
          }
        ]
      },
      {
        elementId: "5",
        code: "BR-104",
        description: "Superstructure",
        quantity: 1,
        unit: "piece",
        elementCode: "SS-2",
        eciChannel: "1005",
        children: [
          {
            elementId: "6",
            code: "BR-105",
            description: "Deck",
            quantity: 1,
            unit: "piece",
            elementCode: "D-1",
            eciChannel: "1006"
          },
          {
            elementId: "7",
            code: "BR-106",
            description: "Bearings",
            quantity: 8,
            unit: "piece",
            elementCode: "B-1",
            eciChannel: "1007"
          }
        ]
      }
    ]
  },
  {
    elementId: "8",
    code: "BR-200",
    description: "Secondary Bridge",
    quantity: 1,
    unit: "piece",
    elementCode: "SB-1",
    eciChannel: "2001",
    children: [
      {
        elementId: "9",
        code: "BR-201",
        description: "Foundation",
        quantity: 3,
        unit: "piece",
        elementCode: "F-1",
        eciChannel: "2002"
      },
      {
        elementId: "10",
        code: "BR-202",
        description: "Columns",
        quantity: 6,
        unit: "piece",
        elementCode: "C-1",
        eciChannel: "2003"
      }
    ]
  },
  {
    elementId: "11",
    code: "BR-300",
    description: "Tertiary Bridge",
    quantity: 1,
    unit: "piece",
    elementCode: "TB-1",
    eciChannel: "3001",
    children: [
      {

        elementId: "12",
        code: "BR-301",
        description: "Supports",
        quantity: 5,
        unit: "piece",
        elementCode: "S-1",
        eciChannel: "3002"
      },
      {
        elementId: "13",
        code: "BR-302",
        description: "Rails",
        quantity: 2,
        unit: "meters",
        elementCode: "R-1",
        eciChannel: "3003",
        children: [
          {
            elementId: "14",
            code: "BR-303",
            description: "Rail Head",
            quantity: 2,
            unit: "meters",
            elementCode: "RH-1",
            eciChannel: "3004"
          },
          {
            elementId: "15",
            code: "BR-304",
            description: "Rail Base",
            quantity: 2,
            unit: "meters",
            elementCode: "RB-1",
            eciChannel: "3005",
            children: [
              {
                elementId: "19",
                code: "BR-201",
                description: "Foundation",
                quantity: 3,
                unit: "piece",
                elementCode: "F-1",
                eciChannel: "2002"
              },
              {
                elementId: "110",
                code: "BR-202",
                description: "Columns",
                quantity: 6,
                unit: "piece",
                elementCode: "C-1",
                eciChannel: "2003"
              }
            ]
          }
        ]
      }
    ]
  }
];

export const mockStructures: Structure[] = [
  {
    id: '1',
    name: 'Golden Gate Bridge',
    code: 'GGB01',
    type: 'bridge',
    overal: 'large',
    at: 'SF',
    overalLength: '2737 m',
    overalWidth: '27 m',
    maxCmy: 15,
    maxMd: 18,
    lastInspectionDate: '2024-10-15T06:09:51.119Z',
    location: { latitude: -33.8523, longitude: 151.2108, region: "Zone 1" },
    elementMetadata: [...sampleElements],
  },
  {
    id: '2',
    name: 'test Bridge',
    code: 'GGB02',
    type: 'bridge',
    overal: 'large',
    at: 'SF',
    overalLength: '2737 m',
    overalWidth: '27 m',
    maxCmy: 15,
    maxMd: 18,
    lastInspectionDate: '2024-10-10T06:09:51.119Z',
    location: { latitude: -33.8691, longitude: 151.1861, region: "Zone 1" },
    elementMetadata: [...sampleElements],
  },
];

export const mockConditionRatings: ConditionRatingEntity[] = [
  {
    conditionRatingId: "BR-102",
    elementId: "3",  // Pier
    ratings: [1234, 2345, 3456, 4567]
  },
  {
    conditionRatingId: "BR-103",
    elementId: "4",  // Abutment
    ratings: [5678, 6789, 7890, 8901]
  },
  {
    conditionRatingId: "BR-105",
    elementId: "6",  // Deck
    ratings: [9012, 1012, 1123, 1234]
  },
  {
    conditionRatingId: "BR-106",
    elementId: "7",  // Bearings
    ratings: [2345, 3456, 4567, 5678]
  },
  {
    conditionRatingId: "BR-201",
    elementId: "9",  // Foundation
    ratings: [6789, 7890, 8901, 9012]
  },
];

export const mockInspectionData: InspectionEntity[] = [
  {
    id: "insp-001",
    structureId: "struct-123",
    inspectionType: "Routine",
    inspectionLevel: "Level 1",
    temperature: 22.5,
    inspectorName: "John Doe",
    inspectionDate: "2024-10-15T10:00:00Z",
    nextInspectionProposedDate: "2025-04-15T10:00:00Z",
    weather: "Sunny",
    engineerName: "Jane Smith",
    rate: "Good",
    comment: "The structure is in good condition with minor wear and tear.",
    maintenanceActions: [
      {
        id: "maint-001",
        activityDescription: "Replace worn-out bolts on the bridge deck",
      } as MaintenanceActionEntity,
      {
        id: "maint-002",
        activityDescription: "Repaint rusted areas",
      } as MaintenanceActionEntity,
    ],
    conditionRatings: [...mockConditionRatings],
    inspectionStatus: "Completed",
  },
  {
    id: "insp-002",
    structureId: "struct-123",
    inspectionType: "Routine",
    inspectionLevel: "Level 1",
    temperature: 23,
    inspectorName: "Richar Keil",
    inspectionDate: "2024-10-25T10:00:00Z",
    nextInspectionProposedDate: "2025-04-25T10:00:00Z",
    weather: "Sunny",
    engineerName: "Lora Craft",
    rate: "Good",
    comment: "The structure is in good condition with minor wear and tear.",
    maintenanceActions: [
      {
        id: "maint-001",
        activityDescription: "Replace worn-out bolts on the bridge deck",
      } as MaintenanceActionEntity,
      {
        id: "maint-002",
        activityDescription: "Repaint rusted areas",
      } as MaintenanceActionEntity,
    ],
    conditionRatings: [...mockConditionRatings],
    inspectionStatus: "InProgress",
  }
];

export const mockAuthResult = {
  accessToken: "mock_access_token",
  idToken: "mock_id_token",
  account: {
    homeAccountId: "user-id-123",
    environment: "https://login.microsoftonline.com",
    tenantId: "tenant-id-123",
    username: "user@example.com"
  },
  expiresOn: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour from now
  scopes: ["user.read", "mailbox.settings.read"],
  fromCache: false
};

export const Regions: Region[] = [
  {
    regionId: "456f7890-f89c-23d4-b567-526725174321",
    name: "North Region",
    code: "NR001"
  }
]

export const mockUser: User = {
  userId: "123e4567-e89b-12d3-a456-426614174000",
  regionId: "456f7890-f89c-23d4-b567-526725174321",
  azureAdId: "789g1011-g90d-34e5-c678-626836174222",
  email: "example@example.com",
  passwordHash: "hashed_password_string",
  name: "John Doe",
  roles: ["admin", "user"],
  createdAt: new Date("2023-01-01T00:00:00Z"),
  updatedAt: new Date("2023-01-02T00:00:00Z"),
  title: 'inspector',
  region: Regions[0]
};