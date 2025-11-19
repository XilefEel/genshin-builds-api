type Element =
  | "Pyro"
  | "Hydro"
  | "Cryo"
  | "Electro"
  | "Dendro"
  | "Anemo"
  | "Geo";

type WeaponType = "Sword" | "Claymore" | "Polearm" | "Catalyst" | "Bow";

type Role =
  | "On-field DPS"
  | "Off-field DPS"
  | "Healer"
  | "Buffer"
  | "Debuffer"
  | "Reaction"
  | "Applicator";

type Rarity = "3 Star" | "4 Star" | "5 Star";

type SubStats =
  | "HP"
  | "HP%"
  | "ATK"
  | "ATK%"
  | "DEF"
  | "DEF%"
  | "EM"
  | "ER%"
  | "CR%"
  | "CD%";

type SandStats = "HP%" | "ATK%" | "DEF%" | "EM" | "ER%";

type GobletStats =
  | "HP%"
  | "ATK%"
  | "DEF%"
  | "EM"
  | "Pyro DMG%"
  | "Hydro DMG%"
  | "Cryo DMG%"
  | "Electro DMG%"
  | "Dendro DMG%"
  | "Anemo DMG%"
  | "Geo DMG%"
  | "Physical DMG%";

type CircletStats = "HP%" | "ATK%" | "DEF%" | "EM" | "CR%" | "CD%" | "HB%";

type Talent = "AA" | "Skill" | "Burst";

type Constellations = "1" | "2" | "3" | "4" | "5" | "6";

type Summary = {
  element: Element;
  rarity: Rarity;
  weapon: WeaponType;
  role: Role | Role[];
  description?: string;
};

type BestWeapons = {
  name: string;
  rarity: Rarity;
  rating: 1 | 2 | 3 | 4 | 5;
};

type BestArtifacts = {
  set: string | string[];
  mainStats: {
    sands: SandStats | SandStats[];
    goblet: GobletStats | GobletStats[];
    circlet: CircletStats | CircletStats[];
  };
  subStats: SubStats[];
};

// main types
export type CharacterGuide = {
  id: number;
  name: string;
  summary?: Summary;
  bestWeapons: BestWeapons[];
  bestArtifacts: BestArtifacts[];
  talentPriority: Talent[];
  bestConstellations: Constellations[];
  bestTeams: string[][];
};

export type NewCharacterGuide = Omit<CharacterGuide, "id">;

export type UpdateCharacterGuide = Partial<CharacterGuide>;

export type CharacterQueryParams = {
  element?: Element;
  weapon?: WeaponType;
  role?: Role;
  search?: string;
  sort?: string;
  limit?: string;
};
