import { TestBed } from "@angular/core/testing";

import { PerkService } from "./perk.service";

describe("PerksService", () => {
  let service: PerkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerkService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
