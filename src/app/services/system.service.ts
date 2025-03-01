import {Injectable, Signal} from "@angular/core";
import {Store} from "@ngxs/store";

import {SystemActions} from "../state/actions/systemActions";
import {SystemState} from "../state/store/system.state";

@Injectable({
  providedIn: "root"
})
export class SystemService {
  public selectedSoldierId: Signal<number | null>;
  public selectedSquadId: Signal<number | null>;

  constructor(private _store: Store) {
    this.selectedSoldierId = this._store.selectSignal(SystemState.getSelectedSoldierId);
    this.selectedSquadId = this._store.selectSignal(SystemState.getSelectedSquadId);
  }

  public setSelectedSoldierId(id: number) {
    this._store.dispatch(new SystemActions.SelectSoldier(id));
  }

  public setSelectedSquadId(id: number) {
    this._store.dispatch(new SystemActions.SelectSquad(id));
  }

  public unsetSelectedSoldierId() {
    this._store.dispatch(new SystemActions.SelectSoldier(null));
  }

  public unsetSelectedSquadId() {
    this._store.dispatch(new SystemActions.SelectSquad(null));
  }

  public unsetSoldierIfSelectedSoldierId(soldierId: number) {
    if(this.selectedSoldierId() === soldierId) {
      this.unsetSelectedSoldierId();
    }
  }

  public unsetSquadIfSelectedSquadId(squadId: number) {
    if(this.selectedSquadId() === squadId) {
      this.unsetSelectedSquadId();
      this.unsetSelectedSoldierId();
    }
  }
}
