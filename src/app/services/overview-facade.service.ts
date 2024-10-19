import {Injectable, signal, WritableSignal} from "@angular/core";
import {Store} from "@ngxs/store";

import {Squad} from "../models/squad.model";
import {SquadActions} from "../state/actions/squadActions";
import {SquadState} from "../state/store/squad.state";

@Injectable({
  providedIn: "root"
})
export class OverviewFacadeService {
  public squadList: WritableSignal<Squad[]> = signal([]);

  public squadSignalList: WritableSignal<Squad>[] = [];

  constructor(private _store: Store) {
    this._store.select(SquadState.getSquads).subscribe(squads => {
      this.updateSquadSignalList(squads);
    });
  }

  public updateSquadSignalList(squads: Squad[]): void {
    let markForCheck = false;
    squads.map(squad => {
      if(!this.squadSignalList[squad.arrayIndex]) {
        this.squadSignalList[squad.arrayIndex] = signal(squad);
        this.squadList.update(val => {
          val[squad.arrayIndex] = squad;
          return val;
        });
        markForCheck = true;
      } else {
        if(squad.hash !== this.squadList()[squad.arrayIndex].hash){
          this.squadList()[squad.arrayIndex] = squad;
          this.squadSignalList[squad.arrayIndex].set(squad);
        }
      }
    })
    if(markForCheck){
      this.squadList.set(squads);
    }
  }

  public addSquad(){
    this._store.dispatch(new SquadActions.AddSquad());
  }
}
