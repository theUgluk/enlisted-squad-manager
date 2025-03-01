import { SystemModel } from "../models/system.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SystemActions} from "../actions/systemActions";
import SelectSoldier = SystemActions.SelectSoldier;
import SelectSquad = SystemActions.SelectSquad;

@State<SystemModel>({
  name: "system",
  defaults: {
    selectedSoldierId: null,
    selectedSquadId: null,
  }
})

@Injectable()
export class SystemState {
  @Selector()
  public static getSelectedSoldierId(state: SystemModel) {
    return state.selectedSoldierId;
  }

  @Selector()
  public static getSelectedSquadId(state: SystemModel) {
    return state.selectedSquadId;
  }

  @Action(SelectSoldier)
  public selectSoldier(ctx:StateContext<SystemModel>, action: SystemActions.SelectSoldier) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedSoldierId: action.soldierId
    })
  }

  @Action(SelectSquad)
  public selectSquad(ctx:StateContext<SystemModel>, action: SystemActions.SelectSquad) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedSquadId: action.squadId
    })
  }
}
