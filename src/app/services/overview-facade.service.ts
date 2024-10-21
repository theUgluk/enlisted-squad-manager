import {Injectable, signal, WritableSignal} from "@angular/core";
import {Store} from "@ngxs/store";

import {Squad} from "../models/squad.model";
import {SquadActions} from "../state/actions/squadActions";
import {SquadState} from "../state/store/squad.state";

@Injectable({
  providedIn: "root"
})
export class OverviewFacadeService {
  public squadList: WritableSignal<Map<number, Squad>> = signal(new Map<number, Squad>());

  public squadSignalList: Map<number, WritableSignal<Squad>> = new Map<number, WritableSignal<Squad>>();

  constructor(private _store: Store) {
    this._store.select(SquadState.getSquads).subscribe(squads => {
      this.updateSquadSignalList(squads);
    });
  }

  public updateSquadSignalList(squads: Squad[]): void {
    let markForCheck = false;
    squads.map(squad => {
      if(!this.squadSignalList.has(squad.id)) {
        this.squadSignalList.set(squad.id, signal(squad));
        this.squadList.update(val => {
          val.set(squad.id, squad);
          return val;
        });
        markForCheck = true;
      } else {
        if(squad.hash !== this.squadList().get(squad.id)?.hash){
          this.squadList().set(squad.id, squad);
          this.squadSignalList.get(squad.id)?.set(squad);
        }
      }
    })
    if(markForCheck){
      const map = new Map<number, Squad>();
      this.getSquadIds().forEach(squadId => {
        map.set(squadId, <Squad>this.squadList().get(squadId));
      });
      this.squadList.set(map);
    }
  }

  public getSquadIds(){
    return Array.from(this.squadList().keys());
  }

  public addSquad(){
    this._store.dispatch(new SquadActions.AddSquad());
  }
}
