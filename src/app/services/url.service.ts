import {Location} from "@angular/common";
import { Injectable } from "@angular/core";
import {Store} from "@ngxs/store";
import * as JSLZString from "lz-string";
import {BehaviorSubject} from "rxjs";

import {Soldier} from "../models/soldier.model";
import {SoldierActions} from "../state/actions/soldierActions";
import {SquadActions} from "../state/actions/squadActions";
import {SystemActions} from "../state/actions/systemActions";
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

  private version = 2;

  private encode = false;

  constructor(private store: Store, private location: Location) {
    this.initialLoaded.subscribe(loaded => {
      if (loaded) {
        this.store.select(SoldierState.getSoldiers).subscribe(soldiers => {
          this.createUrl(soldiers);
        });
      }
    });
  }

  public createUrl(soldiers?: Soldier[]){
    let soldierList = soldiers;
    if(soldierList === undefined){
      soldierList = this.store.selectSnapshot(SoldierState.getSoldiers)
    }
    const sortedSoldiers = this.sortSoldiers(soldierList);
    this._url = `${this.version}-`;
    this._url += this.getUrlFromSoldiers(sortedSoldiers);
    if(this.encode) {
      this._url = JSLZString.compressToEncodedURIComponent(this._url);
    }
    this.location.replaceState("/" + this._url);
  }

  public sortSoldiers(soldiers: Soldier[]): Soldier[] {
    return soldiers.sort((a, b) => a.squadId - b.squadId);
  }

  private getUrlFromSoldiers(soldiers: Soldier[]): string {
    let url = "";
    soldiers.forEach(soldier => {
      url += soldier.hash + "-";
    })
    return url.substring(0, url.length - 1);
  }

  public initialLoad(){
    //Annoyingly JSLZ uses +, which isn't url safe >:(
    let uri = this.location.path().substring(1, this.location.path().length).replaceAll("%2B", "+");
    if(this.encode){
      uri = JSLZString.decompressFromEncodedURIComponent(uri);
    }
    let lowestSquadId = 1;
    if(uri && uri.length > 0) {
      let soldierHashes = uri.split("-")
      // remove the version number
      const hashVersion = soldierHashes.shift();
      if(hashVersion && Util.decodeNumber(hashVersion) < this.version) {
        soldierHashes = this.convertHashFromVersion(soldierHashes, Util.decodeNumber(hashVersion));
      }
      const soldiers: Soldier[] = []
      if (soldierHashes && soldierHashes.length > 0) {
        this.store.dispatch(new SquadActions.DeleteSquad(1)).subscribe(() => {
          soldierHashes.forEach((soldierHash: string) => {
            soldiers.push(this.createSoldierFromHash(soldierHash));
          });
          this.store.dispatch(new SoldierActions.SetSoldier(soldiers));
          lowestSquadId = Math.min(...this.squadIds);
          this.squadIds.forEach((squadId: number) => {
            this.store.dispatch(new SquadActions.SetSquad(squadId));
          })
        });
      }
    }
    this.store.dispatch(new SystemActions.SelectSquad(lowestSquadId));
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

  private convertHashFromVersion(hash: string[], hashVersion: number): string[] {
    let result = hash;
    //let currentVersion = hashVersion;
    if(hashVersion === 1){
      result = this.convertOneToTwo(hash)
      //currentVersion = 2;
    }
    return result
  }

  // Id of Vitality perk changed from 0 to 53
  private convertOneToTwo(hash: string[]): string[] {
    const soldiers: string[] = [];
    hash.forEach((soldierHash: string) => {
      // check the perks and change if necessary
      const perkHash = soldierHash.substring(3);
      soldiers.push(soldierHash.substring(0, 3) + perkHash.replaceAll("0", "r"));
    });
    return soldiers;
  }

}
