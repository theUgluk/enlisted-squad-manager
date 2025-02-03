import { Injectable } from "@angular/core";
import {
  Action, Selector, State, StateContext
} from "@ngxs/store";

import {Squad} from "../../models/squad.model";
import {SquadActions} from "../actions/squadActions";
import {SquadStateModel} from "../models/squad.model";
import AddSquad = SquadActions.AddSquad;
import DeleteSquad = SquadActions.DeleteSquad;
import {SoldierActions} from "../actions/soldierActions";
import DeleteSoldiersForSquad = SoldierActions.DeleteSoldiersForSquad;
import SetSquad = SquadActions.SetSquad;

@State<SquadStateModel>({
  name: "squad",
  defaults: {
    maxSquadId: 1,
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
    const newSquadId = state.maxSquadId + 1;
    ctx.setState({
      ...state,
      maxSquadId: newSquadId,
      squads: [
        ...state.squads,
        new Squad(newSquadId)
      ]
    });
  }

  @Action(DeleteSquad)
  public DeleteSquad(ctx: StateContext<SquadStateModel>, action: SquadActions.DeleteSquad) {
    const squads = [...ctx.getState().squads];
    const index = squads.findIndex(squad => squad.id === action.squadId)
    if(index > -1) {
      ctx.setState({
        ...ctx.getState(),
        squads: squads.filter((squad) => squad.id !== action.squadId)
      });
    }
    ctx.dispatch(new DeleteSoldiersForSquad(action.squadId))
  }
  @Action(SetSquad)
  public setSquad(ctx: StateContext<SquadStateModel>, action: SetSquad) {
    ctx.setState({
      ...ctx.getState(),
      squads: [
        ...ctx.getState().squads,
        new Squad(action.squadId)
      ]
    })
  }
}
