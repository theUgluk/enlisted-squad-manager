import { SystemModel } from "../models/system.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {SystemActions} from "../actions/systemActions";
import SelectSoldier = SystemActions.SelectSoldier;

@State<SystemModel>({
  name: "system",
  defaults: {
    selectedSoldierId: null,
  }
})

@Injectable()
export class SystemState {
  @Selector()
  public static getSelectedSoldierId(state: SystemModel) {
    return state.selectedSoldierId;
  }

  @Action(SelectSoldier)
  public selectSoldier(ctx:StateContext<SystemModel>, action: SystemActions.SelectSoldier) {
    const state = ctx.getState();
    //@TODO check this
    console.log('selecting: ', action);
    debugger
    ctx.setState({
      ...state,
      selectedSoldierId: action.soldierId
    })
  }
}
