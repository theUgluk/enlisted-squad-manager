import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SelectedPerkComponent } from "./selected-perk.component";

describe("SelectedPerkComponent", () => {
  let component: SelectedPerkComponent;
  let fixture: ComponentFixture<SelectedPerkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPerkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectedPerkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
