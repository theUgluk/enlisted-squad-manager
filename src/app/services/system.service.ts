import {Injectable, signal, Signal} from '@angular/core';
import {Store} from "@ngxs/store";
import {SystemState} from "../state/store/system.state";
import {SystemActions} from "../state/actions/systemActions";

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  public selectedSoldierId: Signal<number | null>;
  constructor(private _store: Store) {
    this.selectedSoldierId = this._store.selectSignal(SystemState.getSelectedSoldierId);
  }

  public setSelectedSoldierId(id: number) {
    this._store.dispatch(new SystemActions.SelectSoldier(id));
  }

  public unsetSelectedSoldierId() {
    this._store.dispatch(new SystemActions.SelectSoldier(null));
  }
}
