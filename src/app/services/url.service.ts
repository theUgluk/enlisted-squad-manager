import {Location} from "@angular/common";
import { Injectable } from "@angular/core";
import {Store} from "@ngxs/store";
import {BehaviorSubject} from "rxjs";

import {Soldier} from "../models/soldier.model";
import {SoldierActions} from "../state/actions/soldierActions";
import {SquadActions} from "../state/actions/squadActions";
import {SoldierState} from "../state/store/soldier.state";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  private _url = "";

  private id = 0;

  private squadIds: number[] = [];

  public initialLoaded = new BehaviorSubject<boolean>(false);

  constructor(private store: Store, private location: Location) {
    this.initialLoaded.subscribe(loaded => {
      if (loaded) {
        this.store.select(SoldierState.getSoldiers).subscribe(soldiers => {
          this._url = "";
          soldiers.forEach(soldier => {
            this._url += soldier.hash + "-";
          })
          this._url = this._url.substring(0, this._url.length - 1);
          this.location.replaceState("/" + this._url);
        });
      }
    });
  }

  public initialLoad(){
    const uri = this.location.path().substring(1, this.location.path().length);
    if(uri && uri.length > 0) {
      const soldierHashes = uri.split("-")
      const soldiers: Soldier[] = []
      if (soldierHashes && soldierHashes.length > 0) {
        this.store.dispatch(new SquadActions.DeleteSquad(1)).subscribe(() => {
          soldierHashes.forEach((soldierHash: string) => {
            soldiers.push(this.createSoldierFromHash(soldierHash));
          });
          this.store.dispatch(new SoldierActions.SetSoldier(soldiers));
          this.squadIds.forEach((squadId: number) => {
            this.store.dispatch(new SquadActions.SetSquad(squadId));
          })
        });
      }
    }
    this.initialLoaded.next(true);
  }

  private createSoldierFromHash(soldierHash: string): Soldier {
    // min of 4:
    const soldierId = this.id;
    this.id++;
    const squadId = parseInt(soldierHash.substring(0, 2), 36);
    if(this.squadIds.indexOf(squadId) === -1){
      this.squadIds.push(squadId);
    }
    const soldierTypeId = parseInt(soldierHash.substring(2, 3), 36);
    const soldierTypeLevel = parseInt(soldierHash.substring(3, 4), 36);
    return new Soldier(soldierId, squadId, soldierTypeId, soldierTypeLevel);
  }
}
