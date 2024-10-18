import { TestBed } from "@angular/core/testing";
import { provideStore } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { SoldierState } from "./state/store/soldier.state";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideStore([SoldierState])],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have the 'boilerplate' title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("boilerplate");
  });
});
