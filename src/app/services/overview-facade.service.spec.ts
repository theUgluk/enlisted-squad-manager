import {signal} from "@angular/core";
import { TestBed } from "@angular/core/testing";
import {NgxsModule, Store} from "@ngxs/store";

import {Squad} from "../models/squad.model";
import {SquadActions} from "../state/actions/squadActions";
import {SquadState} from "../state/store/squad.state";
import { OverviewFacadeService } from "./overview-facade.service";

describe("OverviewService", () => {
  let service: OverviewFacadeService;
  let store: Store;

  beforeEach(() => {
    // setup state
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SquadState])],
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

    // Assert
    expect(result).toEqual([]);
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
    expect(service.squadSignalList[0]).toBeDefined();
    expect(service.squadSignalList[1]).toBeDefined();
    expect(service.squadSignalList[0]()).toEqual(updatedSquad);
    expect(service.squadSignalList[1]()).toEqual(squads[1]);
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
    expect(service.squadSignalList.length).toBe(0);
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
    expect(service.squadSignalList[0]).toBeDefined();
    expect(service.squadSignalList[1]).toBeDefined();
    expect(service.squadSignalList[0]()).toEqual(squads[0]);
    expect(service.squadSignalList[1]()).toEqual(squads[1]);
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
    const squads = [new Squad(1), new Squad(2)];
    service.squadSignalList[0] = signal(new Squad(1));
    service.squadSignalList[1] = signal(new Squad(2));
    service.squadList.set([new Squad(1), new Squad(2)]);

    // Act
    service.updateSquadSignalList(squads);

    // Assert
    expect(service.squadSignalList[0]()).toEqual(squads[0]);
    expect(service.squadSignalList[1]()).toEqual(squads[1]);
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
    expect(service.squadSignalList.length).toBe(0);
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
  });
});
