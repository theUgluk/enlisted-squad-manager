import {Location} from "@angular/common";
import { Injectable } from "@angular/core";
import {Store} from "@ngxs/store";
import * as JSLZString from "lz-string";
import {BehaviorSubject} from "rxjs";

import {Soldier} from "../models/soldier.model";
import {SoldierActions} from "../state/actions/soldierActions";
import {SquadActions} from "../state/actions/squadActions";
import {SoldierState} from "../state/store/soldier.state";
import Util from "../util";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  private _url = "";

  private id = 0;

  private squadIds: number[] = [];

  public initialLoaded = new BehaviorSubject<boolean>(false);

  private version = 1;

  constructor(private store: Store, private location: Location) {
    this.initialLoaded.subscribe(loaded => {
      if (loaded) {
        this.store.select(SoldierState.getSoldiers).subscribe(soldiers => {
          this._url = `${this.version}-`;
          soldiers.forEach(soldier => {
            this._url += soldier.hash + "-";
          })
          this._url = JSLZString.compressToEncodedURIComponent(this._url.substring(0, this._url.length - 1));
          this.location.replaceState("/" + this._url);
        });
      }
    });
  }

  public initialLoad(){
    //Annoyingly JSLZ uses +, which isn't url safe >:(
    const uri = JSLZString.decompressFromEncodedURIComponent(
      this.location.path().substring(1, this.location.path().length).replaceAll("%2B", "+")
    );
    if(uri && uri.length > 0) {
      const soldierHashes = uri.split("-")
      // remove the version number
      soldierHashes.shift();
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
    const squadId = Util.decodeNumber(soldierHash.substring(0, 1));
    if(this.squadIds.indexOf(squadId) === -1){
      this.squadIds.push(squadId);
    }
    const soldierTypeId = Util.decodeNumber(soldierHash.substring(1, 2));
    const soldierTypeLevel = Util.decodeNumber(soldierHash.substring(2, 3));
    const perkHashes = soldierHash.substring(3);
    const perks: {perkId: number, amount: number}[] = [];
    perkHashes.match(/.{1,2}/g)?.forEach((hash: string) => {
      const perkId = Util.decodeNumber(hash.substring(0, 1));
      const perkAmount = Util.decodeNumber(hash.substring(1));
      perks.push({
        perkId: perkId,
        amount: perkAmount
      })
    });
    return new Soldier(soldierId, squadId, soldierTypeId, soldierTypeLevel, perks);
  }
}
