import { ComponentFixture, TestBed } from "@angular/core/testing";
import {provideStore} from "@ngxs/store";

import {SquadState} from "../../state/store/squad.state";
import { SquadComponent } from "./squad.component";

describe("OverviewComponent", () => {
  let component: SquadComponent;
  let fixture: ComponentFixture<SquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquadComponent],
      providers: [provideStore([SquadState])],
    }).compileComponents();

    fixture = TestBed.createComponent(SquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
