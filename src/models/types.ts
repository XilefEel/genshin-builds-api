type Element =
  | "pyro"
  | "hydro"
  | "cryo"
  | "electro"
  | "dendro"
  | "anemo"
  | "geo";

type WeaponType = "sword" | "claymore" | "polearm" | "catalyst" | "bow";

type Role = "on-field dps" | "off-field dps" | "healer" | "buffer" | "debuffer";

type Summary = {
  element: Element;
  weapon: WeaponType;
  role: Role;
  description?: string;
};

type BestWeapons = {
  name: string;
  rarity: "3 star" | "4 star" | "5 star";
  rating: 1 | 2 | 3 | 4 | 5;
};

type BestArtifacts = {
  set: string[];
  mainStats: {
    sands: string;
    goblet: string;
    circlet: string;
  };
  subStats: string[];
};

// main types
export type CharacterGuide = {
  id: number;
  name: string;
  summary?: Summary;
  bestWeapons: BestWeapons[];
  bestArtifacts: BestArtifacts[];
  talentPriority: string[];
  bestConstellations: string[];
  bestTeams: string[][];
};

export type NewCharacterGuide = Omit<CharacterGuide, "id">;

export type UpdateCharacterGuide = Partial<Omit<CharacterGuide, "id">>;
