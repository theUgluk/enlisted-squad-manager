import { Injectable } from "@angular/core";
import {
  Action, Selector, State, StateContext
} from "@ngxs/store";

import {ISquad} from "../../models/squad.model";
import {SquadActions} from "../actions/squadActions";
import {SquadStateModel} from "../models/squad.model";
import AddSquad = SquadActions.AddSquad;

@State<SquadStateModel>({
  name: "squad",
  defaults: {
    squads: [{
      id: 1,
    }],
  }
})

@Injectable()
export class SquadState {
  @Selector()
  public static getSquads(state: SquadStateModel): ISquad[] {
    return state.squads;
  }

  @Action(AddSquad)
  public addSquad(ctx: StateContext<SquadStateModel>) {
    const state = ctx.getState();
    ctx.setState({ ...state, squads: [...state.squads, {
      id: state.squads.length + 1,
    }]});
  }
}
