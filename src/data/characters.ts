import { CharacterGuide } from "../models/types.js";

// mock data
// switching to a database later
const characterBuilds: CharacterGuide[] = [
  {
    id: 1,
    name: "Nilou",
    summary: {
      element: "Hydro",
      rarity: "5 Star",
      weapon: "Sword",
      role: ["Reaction", "Applicator"],
    },
    bestWeapons: [
      {
        name: "Key of Khaj Nisut",
        rarity: "5 Star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["2pc Tenacity 2pc Vorushaka", "2pc Tenacity 2pc Gilded"],
        mainStats: {
          sands: ["HP%"],
          goblet: ["HP%"],
          circlet: ["HP%"],
        },
        subStats: ["HP", "HP%", "EM", "ER%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      {
        name: "Nilou Bloom",
        cost: "Premium",
        team: ["Nilou", "Kokomi", "Nahida", "Lauma"],
      },
    ],
  },
  {
    id: 2,
    name: "Sangonomiya Kokomi",
    summary: {
      element: "Hydro",
      rarity: "5 Star",
      weapon: "Catalyst",
      role: ["Healer", "Buffer", "Applicator"],
    },
    bestWeapons: [
      {
        name: "TTDS",
        rarity: "5 Star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["4pc Ocean", "4pc Gilded"],
        mainStats: {
          sands: ["HP%", "EM"],
          goblet: ["HP%", "EM"],
          circlet: ["HB%", "EM"],
        },
        subStats: ["HP", "HP%", "EM", "ER%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      {
        name: "Nilou Bloom",
        cost: "Premium",
        team: ["Nilou", "Kokomi", "Nahida", "Lauma"],
      },
    ],
  },
  {
    id: 3,
    name: "Nahida",
    summary: {
      element: "Dendro",
      rarity: "5 Star",
      weapon: "Catalyst",
      role: ["Buffer", "Reaction"],
    },
    bestWeapons: [
      {
        name: "A Thousand Floating Dreams",
        rarity: "5 Star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["4pc Deepwood"],
        mainStats: {
          sands: ["EM"],
          goblet: ["EM", "Dendro DMG%"],
          circlet: ["EM", "CR%", "CD%"],
        },
        subStats: ["EM", "ER%", "CR%", "CD%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      {
        name: "Nilou Bloom",
        cost: "Premium",
        team: ["Nilou", "Kokomi", "Nahida", "Lauma"],
      },
    ],
  },
  {
    id: 4,
    name: "Lauma",
    summary: {
      element: "Dendro",
      rarity: "5 Star",
      weapon: "Catalyst",
      role: ["Buffer", "Reaction"],
    },
    bestWeapons: [
      {
        name: "Key of Khaj Nisut",
        rarity: "5 Star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["4pc Serenade"],
        mainStats: {
          sands: ["EM"],
          goblet: ["EM"],
          circlet: ["EM", "CR%", "CD%"],
        },
        subStats: ["EM", "ER%", "CR%", "CD%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      {
        name: "Nilou Bloom",
        cost: "Premium",
        team: ["Nilou", "Kokomi", "Nahida", "Lauma"],
      },
    ],
  },
];

export default characterBuilds;
