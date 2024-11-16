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
    maxSoldierId: 0,
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
    //
    const newSoldierId = ctx.getState().maxSoldierId + 1;
    ctx.setState({
      ...ctx.getState(),
      maxSoldierId: newSoldierId,
      soldiers: [
        ...ctx.getState().soldiers,
        new Soldier(newSoldierId, action.squadId)
      ]
    });
  }

  @Action(SoldierActions.DeleteSoldier)
  public deleteSoldier(ctx: StateContext<SoldierStateModel>, action: SoldierActions.DeleteSoldier) {
    const soldiers = [...ctx.getState().soldiers];
    const index = soldiers.findIndex(soldier => soldier.id === action.soldierId)
    if(index > -1) {
      ctx.setState({
        ...ctx.getState(),
        soldiers: soldiers.filter((soldier) => soldier.id !== action.soldierId)
      });
    }
  }

  @Action(SoldierActions.ChangeSoldierType)
  public changeSoldierType(ctx: StateContext<SoldierStateModel>, action: SoldierActions.ChangeSoldierType){
    ctx.setState({
      ...ctx.getState(),
      soldiers: [
        ...ctx.getState().soldiers.map(soldier => {
          if(soldier.id === action.soldierId){
            soldier.setSoldierTypeId(action.soldierTypeId);
          }
          return soldier;
        }),
      ]
    });
  }

  @Action(SoldierActions.ChangeSoldierTypeLevel)
  public changeSoldierTypeLevel(ctx: StateContext<SoldierStateModel>, action: SoldierActions.ChangeSoldierTypeLevel){
    ctx.setState({
      ...ctx.getState(),
      soldiers: [
        ...ctx.getState().soldiers.map(soldier => {
          if(soldier.id === action.soldierId){
            soldier.setSoldierTypeLevel(action.soldierTypeLevel);
          }
          return soldier;
        }),
      ]
    });
  }
}
