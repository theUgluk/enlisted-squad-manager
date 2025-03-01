import { ComponentFixture, TestBed } from "@angular/core/testing";
import {provideStore} from "@ngxs/store";

import {SoldierState} from "../../state/store/soldier.state";
import {SquadState} from "../../state/store/squad.state";
import {SystemState} from "../../state/store/system.state";
import { OverviewComponent } from "./overview.component";

describe("OverviewComponent", () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [provideStore([SquadState, SoldierState, SystemState])],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
