import { TestBed } from "@angular/core/testing";
import {NgxsModule, Store} from "@ngxs/store";

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
});
