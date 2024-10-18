import {Injectable, signal, WritableSignal} from "@angular/core";
import {Store} from "@ngxs/store";

import {ISquad} from "../models/squad.model";
import {SquadActions} from "../state/actions/squadActions";
import {SquadState} from "../state/store/squad.state";

@Injectable({
  providedIn: "root"
})
export class OverviewFacadeService {
  public squadList: WritableSignal<ISquad[]> = signal([]);

  constructor(private _store: Store) {
    this._store.select(SquadState.getSquads).subscribe(squads => {
      this.squadList.update(() => squads)
    });
  }

  public addSquad(){
    this._store.dispatch(new SquadActions.AddSquad());
  }
}
