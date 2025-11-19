import { CharacterGuide } from "../models/types.js";

// mock data
// switching to a database later
const characterBuilds: CharacterGuide[] = [
  {
    id: 1,
    name: "Nilou",
    summary: {
      element: "hydro",
      weapon: "sword",
      role: "support",
    },
    bestWeapons: [
      {
        name: "Key of Khaj Nisut",
        rarity: "5 star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["2pc HP% 2pc HP%"],
        mainStats: {
          sands: "HP%",
          goblet: "HP%",
          circlet: "HP%",
        },
        subStats: ["HP", "HP%", "EM", "ER%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      ["Nilou", "Kokomi", "Nahida", "Lauma"],
      ["Nilou", "Kokomi", "Nahida", "Baizhu"],
      ["Nilou", "Kokomi", "Nahida", "Yaoyao"],
    ],
  },
  {
    id: 2,
    name: "Sangonomiya Kokomi",
    summary: {
      element: "hydro",
      weapon: "catalyst",
      role: "healer",
    },
    bestWeapons: [
      {
        name: "Key of Khaj Nisut",
        rarity: "5 star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["2pc HP% 2pc HP%"],
        mainStats: {
          sands: "HP%",
          goblet: "HP%",
          circlet: "HP%",
        },
        subStats: ["HP", "HP%", "EM", "ER%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      ["Nilou", "Kokomi", "Nahida", "Lauma"],
      ["Nilou", "Kokomi", "Nahida", "Baizhu"],
      ["Nilou", "Kokomi", "Nahida", "Yaoyao"],
    ],
  },
  {
    id: 3,
    name: "Nahida",
    summary: {
      element: "dendro",
      weapon: "catalyst",
      role: "buffer",
    },
    bestWeapons: [
      {
        name: "A Thousand Floating Dreams",
        rarity: "5 star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["4pc Deepwood"],
        mainStats: {
          sands: "EM",
          goblet: "EM",
          circlet: "EM",
        },
        subStats: ["EM", "ER%", "CR%", "CD%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      ["Nilou", "Kokomi", "Nahida", "Lauma"],
      ["Nilou", "Kokomi", "Nahida", "Baizhu"],
      ["Nilou", "Kokomi", "Nahida", "Yaoyao"],
    ],
  },
  {
    id: 4,
    name: "Lauma",
    summary: {
      element: "dendro",
      weapon: "catalyst",
      role: "buffer",
    },
    bestWeapons: [
      {
        name: "Key of Khaj Nisut",
        rarity: "5 star",
        rating: 5,
      },
    ],
    bestArtifacts: [
      {
        set: ["2pc HP% 2pc HP%"],
        mainStats: {
          sands: "HP%",
          goblet: "HP%",
          circlet: "HP%",
        },
        subStats: ["HP", "HP%", "EM", "ER%"],
      },
    ],
    talentPriority: ["Skill", "Burst", "AA"],
    bestConstellations: ["2", "6", "1", "4", "3", "5"],
    bestTeams: [
      ["Nilou", "Kokomi", "Nahida", "Lauma"],
      ["Nilou", "Kokomi", "Nahida", "Baizhu"],
      ["Nilou", "Kokomi", "Nahida", "Yaoyao"],
    ],
  },
];

export default characterBuilds;
