import {fakeAsync, flush, TestBed} from "@angular/core/testing";
import {Actions, NgxsModule, ofActionDispatched, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {expect} from "vitest";

import {Squad} from "../../models/squad.model";
import {SoldierActions} from "../actions/soldierActions";
import {SquadActions} from "../actions/squadActions";
import {SquadStateModel} from "../models/squad.model";
import {SoldierState} from "../store/soldier.state";
import {SquadState} from "../store/squad.state";

const defaultState: SquadStateModel = {
  maxSquadId: 1,
  squads: [new Squad(1)],
}

const maxSquadIdCorrect = (maxSquadId: number, squads: Squad[]) => {
  const highestId = squads.reduce((max, item) => (item.id > max ? item.id : max), 0);
  return maxSquadId === highestId;
}

describe("Squad", () => {
  let store: Store;

  beforeEach(() => {
    // setup state
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SquadState, SoldierState])],
    });
    store = TestBed.inject(Store);
  });

  it("should have the default state at startup", fakeAsync(() => {
    expect(store.snapshot().squad).toEqual(defaultState);
  }));

  it("adding a squad should up the squads and set the correct id's", fakeAsync(() => {
    store.dispatch(new SquadActions.AddSquad());
    store.select(SquadState.getSquads).subscribe(squads => {
      expect(squads.length).toBe(2);
      expect(squads[0].id).toBe(1);
      expect(squads[1].id).toBe(2);
      expect(maxSquadIdCorrect(store.snapshot().squad.maxSquadId, squads)).toBe(true);
    });
    flush();
  }));

  it("deleting a squad should remove the squad from the state", fakeAsync(() => {
    const actions$: Observable<any> = TestBed.get(Actions);
    store.dispatch(new SquadActions.AddSquad());
    actions$.pipe(ofActionDispatched(SoldierActions.DeleteSoldiersForSquad)).subscribe((calledAction) => {
      expect(calledAction.squadId).toBe(1);
    });
    store.dispatch(new SquadActions.DeleteSquad(1));
    store.select(SquadState.getSquads).subscribe(squads => {
      expect(squads[0].id).toBe(2);
      expect(maxSquadIdCorrect(store.snapshot().squad.maxSquadId, squads)).toBe(true);

    });
    flush();
  }));

});
