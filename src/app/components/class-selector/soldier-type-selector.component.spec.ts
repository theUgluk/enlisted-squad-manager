import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SoldierTypeSelectorComponent } from "./soldier-type-selector.component";

describe("ClassSelectorComponent", () => {
  let component: SoldierTypeSelectorComponent;
  let fixture: ComponentFixture<SoldierTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldierTypeSelectorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoldierTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
