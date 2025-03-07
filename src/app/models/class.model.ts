import {PerkPointsPerSoldierType} from "./perk-points-per-soldiertype.model";

export interface soldierType {
  id: number;
  name: string;
  minLevel: number;
  maxLevel: number;
  perkPoints: Map<number, PerkPointsPerSoldierType>;
  icon: string;
}
