import {Injectable, signal, WritableSignal} from "@angular/core";
import {Store} from "@ngxs/store";

import {Soldier} from "../models/soldier.model";
import {Squad} from "../models/squad.model";
import {SoldierActions} from "../state/actions/soldierActions";
import {SquadActions} from "../state/actions/squadActions";
import {SoldierState} from "../state/store/soldier.state";
import {SquadState} from "../state/store/squad.state";
import AddPerkToSoldier = SoldierActions.AddPerkToSoldier;
import RemovePerkFromSoldier = SoldierActions.RemovePerkFromSoldier;
import {SystemState} from "../state/store/system.state";
import {SystemActions} from "../state/actions/systemActions";

@Injectable({
  providedIn: "root"
})
export class OverviewFacadeService {
  public selectedSquadId: WritableSignal<number> = signal(0);

  public selectedSoldierId = this._store.selectSignal(SystemState.getSelectedSoldierId);

  public squadList: WritableSignal<Map<number, Squad>> = signal(new Map<number, Squad>());

  private newSquadCreated = false;

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
    let doesSelectedSquadExist = this.selectedSquadId() === 0;
    const newSquadIds = squads.map((x) => x.id);
    this.getSquadIds()
      .filter((x) => !newSquadIds.includes(x))
      .forEach((id) => {
        this.squadList().delete(id);
        this.squadSignalList.delete(id);
      });
    squads.map(squad => {
      if(squad.id === this.selectedSquadId()){
        doesSelectedSquadExist = true;
      }
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
    });
    if(doesSelectedSquadExist && newSquadIds.length > 0) {
      // if we just created a squad we want to select it immeadiatly, otherwise we want to select the first squad
      if(this.newSquadCreated){
        this.newSquadCreated = false;
        this.selectedSquadId.set(newSquadIds.reduce((prev, curr) => {
          return prev > curr ? prev : curr;
        }));
      } else {
        this.selectedSquadId.set(newSquadIds.reduce((prev, curr) => {
          return prev < curr ? prev : curr;
        }));
      }
    } else if(!doesSelectedSquadExist) {
      this.selectedSquadId.set(0);
    }

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

  public deleteSoldier(soldierId: number){
    this._store.dispatch(new SystemActions.SelectSoldier(null));
    this._store.dispatch(new SoldierActions.DeleteSoldier(soldierId));
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

    // Delete soldiers from maps if they are no longer in the state
    const accurateSoldierIds = soldiers.map(el => el.id);
    const soldierIdsToDelete = this.getSoldierIds().filter(soldierId => !accurateSoldierIds.includes(soldierId));
    soldierIdsToDelete.forEach((soldierId) => {
      this.soldierSignalList.delete(soldierId);
      this.soldierList.delete(soldierId);
    })
  }

  public addSquad(){
    this.newSquadCreated = true;
    this._store.dispatch(new SquadActions.AddSquad());
  }

  public addSoldier(squadId: number): void {
    this._store.dispatch(new SoldierActions.AddSoldier(squadId));
  }

  public deleteSquad(squadId: number): void {
    this._store.dispatch(new SquadActions.DeleteSquad(squadId));
  }

  public changeSoldierType(soldierId: number, soldierTypeId: number){
    this._store.dispatch(new SoldierActions.ChangeSoldierType(soldierId, soldierTypeId));
  }
  public changeSoldierTypeLevel(soldierId: number, soldierTypeLevel: number){
    this._store.dispatch(new SoldierActions.ChangeSoldierTypeLevel(soldierId, soldierTypeLevel))
  }

  public addPerkToSoldier(perkId: number, soldierId: number){
    this._store.dispatch(new AddPerkToSoldier(soldierId, perkId));
  }

  public removePerkFromSelectedSoldier(perkId: number){
    const soldierId = this.selectedSoldierId();
    if(soldierId !== null){
      this._store.dispatch(new RemovePerkFromSoldier(soldierId, perkId));
    }
  }

  public addPerkToSelectedSoldier(perkId: number){
    const soldierId = this.selectedSoldierId();
    if(soldierId !== null){
      this.addPerkToSoldier(perkId, soldierId);
    }
  }
}
