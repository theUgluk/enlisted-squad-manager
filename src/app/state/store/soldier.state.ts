import { Injectable } from "@angular/core";
import {
  Action, Selector, State, StateContext
} from "@ngxs/store";

import {Soldier} from "../../models/soldier.model";
import { SoldierActions } from "../actions/soldierActions";
import { SoldierStateModel } from "../models/soldier.model";

@State<SoldierStateModel>({
  name: "soldier",
  defaults: {
    soldiers: [
      new Soldier(0, 1),
    ],
  }
})

@Injectable()
export class SoldierState {
  @Selector()
  public static getSoldiers(state: SoldierStateModel): Soldier[] {
    return state.soldiers;
  }

  @Action(SoldierActions.AddSoldier)
  public setBoolean(ctx: StateContext<SoldierStateModel>, action: SoldierActions.AddSoldier) {
    ctx.setState({
      soldiers: [
        ...ctx.getState().soldiers,
        new Soldier(ctx.getState().soldiers.length, action.squadId)
      ]
    });
  }
}
