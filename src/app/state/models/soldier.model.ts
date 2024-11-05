import {Soldier} from "../../models/soldier.model";

export interface SoldierStateModel {
  soldiers: Soldier[];
  maxSoldierId: number;
}
