import { Injectable } from "@angular/core";
import {
  Action, Selector, State, StateContext
} from "@ngxs/store";

import {Squad} from "../../models/squad.model";
import {SquadActions} from "../actions/squadActions";
import {SquadStateModel} from "../models/squad.model";
import AddSquad = SquadActions.AddSquad;

@State<SquadStateModel>({
  name: "squad",
  defaults: {
    squads: [new Squad(1)],
  }
})

@Injectable()
export class SquadState {
  @Selector()
  public static getSquads(state: SquadStateModel): Squad[] {
    return state.squads;
  }

  @Action(AddSquad)
  public addSquad(ctx: StateContext<SquadStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, squads: [...state.squads, new Squad(state.squads.length + 1)]});
  }
}
