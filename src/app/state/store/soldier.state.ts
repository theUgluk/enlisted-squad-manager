import { Injectable } from "@angular/core";
import {
  Action, Selector, State, StateContext
} from "@ngxs/store";

import { SoldierActions } from "../actions/soldierActions";
import { SoldierStateModel } from "../models/soldier.model";

@State<SoldierStateModel>({
  name: "soldier",
  defaults: {
    boolean: true
  }
})

@Injectable()
export class SoldierState {
  @Selector()
  public static getBoolean(state: SoldierStateModel): boolean {
    return state.boolean;
  }

  @Action(SoldierActions.SetBoolean)
  public setBoolean(ctx: StateContext<SoldierStateModel>, action: SoldierActions.SetBoolean) {
    ctx.setState({ ...ctx.getState(), boolean: action.boolean });
  }
}
