import {fakeAsync, flush, TestBed } from "@angular/core/testing";
import {NgxsModule, Store} from "@ngxs/store";

import {Soldier} from "../../models/soldier.model";
import {SoldierActions} from "../actions/soldierActions";
import {SoldierStateModel} from "../models/soldier.model";
import {SoldierState} from "../store/soldier.state";
import {SquadState} from "../store/squad.state";

const defaultState: SoldierStateModel = {
  maxSoldierId: 0,
  soldiers: [new Soldier(0, 1)]
}

describe("Soldier", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SquadState, SoldierState])],
    });
    store = TestBed.inject(Store);
  });

  it("should have the default state at startup", fakeAsync(() => {
    expect(store.snapshot().soldier).toEqual(defaultState);
  }));

  it("When we add a soldier we expect the state to be updated with the soldier", fakeAsync(() => {
    const testState = [...defaultState.soldiers, new Soldier(1, 1)];
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.select(SoldierState.getSoldiers).subscribe(val => {
      expect(val).toEqual(testState);
      expect(val.length).toBe(2);
      const newSoldier = val[1];
      //Should be a rifleman (id 13)
      expect(newSoldier.soldierTypeId).toBe(13);
      expect(newSoldier.id).toBe(1);
      // Check if max soldier id is set correctly
      expect(store.snapshot().soldier.maxSoldierId).toBe(1);
    })
    flush();
  }));

  it("When we delete a soldier, we expect the state to remove ONLY that soldier", fakeAsync(() => {
    const testState = [...defaultState.soldiers, new Soldier(1, 1), new Soldier(2, 1)].filter(val => val.id !== 1);
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.dispatch(new SoldierActions.DeleteSoldier(1));
    store.select(SoldierState.getSoldiers).subscribe(val => {
      expect(val.length).toBe(2);
      expect(val).toEqual(testState);
    })
    flush();
  }));

  it("When we delete all soldier for a squad, we expect the state to reflect those changes", fakeAsync(() => {
    const testState = [
      new Soldier(3, 2),
      new Soldier(4, 2),
    ];
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.dispatch(new SoldierActions.AddSoldier(2));
    store.dispatch(new SoldierActions.AddSoldier(2));
    store.dispatch(new SoldierActions.AddSoldier(1));
    store.dispatch(new SoldierActions.DeleteSoldiersForSquad(1));
    store.select(SoldierState.getSoldiers).subscribe(val => {
      expect(val).toEqual(testState);
    })
    flush();
  }));

  it("When we change the soldierType of a soldier, we expect the state to reflect those changes", fakeAsync(() => {
    const testSoldier = new Soldier(1, 1);
    testSoldier.setSoldierTypeId(10);
    const testState = [
      new Soldier(0, 1),
      testSoldier,
    ];

    store.dispatch(new SoldierActions.AddSoldier(1));
    // We add a perk to the soldier to check if those get removed
    store.dispatch(new SoldierActions.AddPerkToSoldier(1, 0));
    store.dispatch(new SoldierActions.ChangeSoldierType(1, 10));
    store.select(SoldierState.getSoldiers).subscribe(val => {
      expect(val).toEqual(testState);
    });
    flush();
  }));
});
