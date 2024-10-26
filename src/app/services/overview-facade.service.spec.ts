import {signal} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {NgxsModule, Store} from "@ngxs/store";

import {Soldier} from "../models/soldier.model";
import {Squad} from "../models/squad.model";
import {SquadActions} from "../state/actions/squadActions";
import {SquadState} from "../state/store/squad.state";
import { OverviewFacadeService } from "./overview-facade.service";
import AddSquad = SquadActions.AddSquad;
import {SoldierActions} from "../state/actions/soldierActions";
import AddSoldier = SoldierActions.AddSoldier;
import {SoldierState} from "../state/store/soldier.state";

describe("OverviewService", () => {
  let service: OverviewFacadeService;
  let store: Store;

  beforeEach(() => {
    // setup state
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SquadState, SoldierState])],
    });
    store = TestBed.inject(Store);
    store.reset({
      squad: [{id: 1}],
    });
    service = TestBed.inject(OverviewFacadeService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  // Dispatches AddSquad action to the store
  it("should dispatch AddSquad action to the store when addSquad is called", () => {
    const dispatchSpy = vi.spyOn(store, "dispatch");

    // Act
    service.addSquad();

    // Assert
    expect(dispatchSpy).toHaveBeenCalledWith(new SquadActions.AddSquad());
  });

  it("should initialize and subscribe to SquadState on creation", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: vi.fn()
      })
    };
    service = new OverviewFacadeService(storeMock as any);

    // Act
    const subscriptionSpy = storeMock.select(SquadState.getSquads).subscribe;

    // Assert
    expect(storeMock.select).toHaveBeenCalledWith(SquadState.getSquads);
    expect(subscriptionSpy).toHaveBeenCalled();
  });

  it("should update squadList with an empty array when SquadState is empty", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: (callback) => callback([])
      })
    };
    service = new OverviewFacadeService(storeMock as any);

    // Act
    const result = service.squadList();

    const test = new Map<number, Squad>();

    // Assert
    expect(result).toEqual(test);
  });

  // Updates existing squadSignalList entry when squad hash has changed
  it("should update existing squadSignalList entry when squad hash changes", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: (callback) => callback([])
      })
    };
    service = new OverviewFacadeService(storeMock as any);
    const squads = [new Squad(1), new Squad(2)];
    service.updateSquadSignalList(squads);
    const updatedSquad = new Squad(1);
    updatedSquad.tickCount();

    // Act
    service.updateSquadSignalList([updatedSquad]);

    // Assert
    expect(service.squadSignalList.get(1)).toBeDefined();
    expect(service.squadSignalList.get(2)).toBeDefined();
    expect(service.squadSignalList.get(1)()).toEqual(updatedSquad);
    expect(service.squadSignalList.get(2)()).toEqual(squads[1]);
  });

  // Handles empty squads array without errors
  it("should handle empty squads array without errors", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: (callback) => callback([])
      })
    };
    service = new OverviewFacadeService(storeMock as any);
    const squads = [];

    // Act
    service.updateSquadSignalList(squads);

    // Assert
    expect(service.squadSignalList.size).toBe(0);
  });
  it("should add new signals to squadSignalList when squad arrayIndex is not present", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: (callback) => callback([])
      })
    };
    service = new OverviewFacadeService(storeMock as any);
    const squads = [new Squad(1), new Squad(2)];

    // Act
    service.updateSquadSignalList(squads);

    // Assert
    expect(service.squadSignalList.get(1)).toBeDefined();
    expect(service.squadSignalList.get(2)).toBeDefined();
    expect(service.squadSignalList.get(1)()).toEqual(squads[0]);
    expect(service.squadSignalList.get(2)()).toEqual(squads[1]);
  });

  // Handles squads with identical hash values
  it("should update existing squad signals when hash values are different", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: (callback) => callback([])
      })
    };
    service = new OverviewFacadeService(storeMock as any);
    const squadSignals = [new Squad(1), new Squad(2)];
    service.squadSignalList.set(1, signal(new Squad(1)));
    service.squadSignalList.set(2, signal(new Squad(2)));
    const squadList = new Map<number, Squad>();
    squadList.set(1, new Squad(1));
    squadList.set(2, new Squad(2));

    service.squadList.set(squadList);

    // Act
    service.updateSquadSignalList(squadSignals);

    // Assert
    expect(service.squadSignalList.get(1)()).toEqual(squadSignals[0]);
    expect(service.squadSignalList.get(2)()).toEqual(squadSignals[1]);
  });

  // Handles empty squads array without errors
  it("should handle empty squads array without errors", () => {
    // Arrange
    const storeMock = { select: vi.fn(() => ({ subscribe: vi.fn() })) };
    service = new OverviewFacadeService(storeMock as any);
    const squads: Squad[] = [];

    // Act
    service.updateSquadSignalList(squads);

    // Assert
    expect(service.squadSignalList.size).toBe(0);
  });

  it("should update squadList correctly when only some squads change", () => {
    // Arrange
    const storeMock = { select: vi.fn(() => ({ subscribe: vi.fn() })) };
    service = new OverviewFacadeService(storeMock as any);
    const initialSquads = [new Squad(1), new Squad(2)];
    service.updateSquadSignalList(initialSquads);
    const updatedSquads = [new Squad(1), new Squad(3)];

    // Act
    service.updateSquadSignalList(updatedSquads);

    // Assert
    expect(service.squadList()).toEqual(updatedSquads);
  });    // Retrieve squad IDs and ensure they match the current squad list
  it("should update squad signal list when new squads are retrieved", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: vi.fn()
      })
    };
    service = new OverviewFacadeService(storeMock as any);
    const squad1 = new Squad(1);
    const squad2 = new Squad(2);
    const squad3 = new Squad(3);
    const squads = [squad1, squad2, squad3];

    // Act
    service.updateSquadSignalList(squads);

    // Assert
    expect(service.squadList().size).toBe(3);
    expect(service.squadList().get(1)).toEqual(squad1);
    expect(service.squadList().get(2)).toEqual(squad2);
    expect(service.squadList().get(3)).toEqual(squad3);
  });

  // Retrieve soldier IDs and ensure they match the current soldier list
  it("should retrieve soldier IDs and match the current soldier list", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: vi.fn()
      })
    };
    const service = new OverviewFacadeService(storeMock as any);
    const squad = new Squad(1);
    const soldier = new Soldier(1, 1);
    service.squadList().set(1, squad);
    service.soldierList.set(1, soldier);

    // Act
    const soldierIds = service.getSoldierIds();

    // Assert
    expect(soldierIds).toContain(1);
  });

  it("should update squad and soldier lists when hash changes unexpectedly", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: vi.fn()
      })
    };
    const service = new OverviewFacadeService(storeMock as any);
    const squad = new Squad(1);
    const soldier = new Soldier(1, 1);
    service.squadList().set(1, squad);
    service.soldierList.set(1, soldier);

    // Act
    squad.tickCount();
    soldier.tickCount();

    // Assert
    expect(service.squadList().get(1)?.hash).toBe(squad.hash);
    expect(service.soldierList.get(1)?.hash).toBe(soldier.hash);
  });

  // Test concurrent updates to squad and soldier lists
  it("should update squad and soldier lists concurrently", () => {
    // Arrange
    const storeMock = {
      select: vi.fn().mockReturnValue({
        subscribe: vi.fn()
      })
    };
    service = new OverviewFacadeService(storeMock as any);

    const squad1 = new Squad(1);
    const squad2 = new Squad(2);
    const soldier1 = new Soldier(1, 1);
    const soldier2 = new Soldier(2, 2);

    // Act
    service.updateSquadSignalList([squad1, squad2]);
    service.updateSoldierSignalList([soldier1, soldier2]);

    // Assert
    expect(service.squadList().size).toBe(2);
    expect(service.soldierList.size).toBe(2);
    expect(service.squadList().get(1)).toEqual(squad1);
    expect(service.squadList().get(2)).toEqual(squad2);
    expect(service.soldierList.get(1)).toEqual(soldier1);
    expect(service.soldierList.get(2)).toEqual(soldier2);
  });
});
