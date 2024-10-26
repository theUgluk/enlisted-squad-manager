import {Injectable, signal, WritableSignal} from "@angular/core";
import {Store} from "@ngxs/store";

import {Soldier} from "../models/soldier.model";
import {Squad} from "../models/squad.model";
import { SoldierActions } from "../state/actions/soldierActions";
import {SquadActions} from "../state/actions/squadActions";
import {SoldierState} from "../state/store/soldier.state";
import {SquadState} from "../state/store/squad.state";

@Injectable({
  providedIn: "root"
})
export class OverviewFacadeService {
  public selectedSquadId: WritableSignal<number> = signal(0);

  public squadList: WritableSignal<Map<number, Squad>> = signal(new Map<number, Squad>());

  public squadSignalList: Map<number, WritableSignal<Squad>> = new Map<number, WritableSignal<Squad>>();

  public soldierList: Map<number, Soldier> = new Map<number, Soldier>();

  public soldierSignalList: Map<number, WritableSignal<Soldier>> = new Map<number, WritableSignal<Soldier>>();

  constructor(private _store: Store) {
    this._store.select(SquadState.getSquads).subscribe(squads => {
      this.updateSquadSignalList(squads);
    });

    this._store.select(SoldierState.getSoldiers).subscribe(soldiers => {
      this.updateSoldierSignalList(soldiers);
    })
  }

  public updateSquadSignalList(squads: Squad[]): void {
    let markForCheck = false;
    const newSquadIds = squads.map((x) => x.id);
    this.getSquadIds()
      .filter((x) => !newSquadIds.includes(x))
      .forEach((id) => {
        this.squadList().delete(id);
        this.squadSignalList.delete(id);
      });
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

  public getSoldierIds(){
    return Array.from(this.soldierList.keys());
  }

  public soldierForSquad(squadId: number): Soldier[] {
    const soldiers: Soldier[] = [];
    this.getSoldierIds().forEach(soldierId => {
      if(this.soldierList.get(soldierId)?.squadId === squadId){
        soldiers.push(<Soldier>this.soldierList.get(soldierId));
      }
    });
    return soldiers;
  }

  public updateSoldierSignalList(soldiers: Soldier[]): void {
    soldiers.forEach(soldier => {
      if(!this.soldierSignalList.has(soldier.id) && this.squadList().has(soldier.squadId)){
        this.soldierList.set(soldier.id, soldier);
        this.soldierSignalList.set(soldier.id, signal(soldier));
        const squad = <Squad>this.squadList().get(soldier.squadId)
        this.squadSignalList.get(soldier.squadId)?.set(squad);
      } else {
        if(soldier.hash !== this.soldierList.get(soldier.id)?.hash){
          this.soldierList.set(soldier.id, soldier);
          this.soldierSignalList.get(soldier.id)?.set(soldier);
        }
      }
    });
  }

  public addSquad(){
    this._store.dispatch(new SquadActions.AddSquad());
  }

  public addSoldier(squadId: number): void {
    this._store.dispatch(new SoldierActions.AddSoldier(squadId));
  }
}
