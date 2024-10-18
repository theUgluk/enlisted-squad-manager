import { ComponentFixture, TestBed } from "@angular/core/testing";
import {provideStore} from "@ngxs/store";

import {SquadState} from "../../state/store/squad.state";
import { OverviewComponent } from "./overview.component";

describe("OverviewComponent", () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent],
      providers: [provideStore([SquadState])],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
