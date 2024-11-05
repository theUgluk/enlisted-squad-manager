import {Squad} from "../../models/squad.model";

export interface SquadStateModel {
  maxSquadId: number;
  squads: Squad[];
}
