import {NgClass} from "@angular/common";
import {Component, input, OnInit, WritableSignal} from "@angular/core";

import {Soldier} from "../../models/soldier.model";
import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SystemService} from "../../services/system.service";
import {SoldierTypeSelectorComponent} from "../class-selector/soldier-type-selector.component";

@Component({
  selector: "app-soldier",
  imports: [
    SoldierTypeSelectorComponent,
    NgClass,
  ],
  templateUrl: "./soldier.component.html",
  styleUrl: "./soldier.component.scss"
})

export class SoldierComponent implements OnInit {
  constructor(public overviewFacade: OverviewFacadeService, public systemService: SystemService) {
  }

  soldierId = input.required<number>();

  public soldierSignal!: WritableSignal<Soldier>;

  ngOnInit() {
    this.soldierSignal = <WritableSignal<Soldier>>this.overviewFacade.soldierSignalList.get(this.soldierId());
  }

  public deleteSoldier(soldierId: number, event: Event) {
    event.stopPropagation();
    this.systemService.unsetSoldierIfSelectedSoldierId(soldierId);
    this.overviewFacade.deleteSoldier(soldierId);
  }

  public soldierTypeChange(value: number) {
    this.overviewFacade.changeSoldierType(this.soldierId(), value);
  }

  public soldierTypeLevelChange(value: number) {
    this.overviewFacade.changeSoldierTypeLevel(this.soldierId(), value);
  }

  public selectSoldier() {
    this.systemService.setSelectedSoldierId(this.soldierId());
  }

  public isPerkPointsLowerThanMax(type: "mobility" | "vitality" | "handling"): boolean {
    switch (type) {
      case "mobility":
        return this.soldierSignal().maxMobility - this.soldierSignal().getPerkPointsSpend().mobility > 0;
      case "vitality":
        return this.soldierSignal().maxVitality - this.soldierSignal().getPerkPointsSpend().vitality > 0;
      case "handling":
        return this.soldierSignal().maxHandling - this.soldierSignal().getPerkPointsSpend().weaponHandling > 0;
    }
    return false;
  }

  public isPerkPointsEqualToMax(type: "mobility" | "vitality" | "handling"): boolean {
    switch (type) {
      case "mobility":
        return this.soldierSignal().maxMobility - this.soldierSignal().getPerkPointsSpend().mobility === 0;
      case "vitality":
        return this.soldierSignal().maxVitality - this.soldierSignal().getPerkPointsSpend().vitality === 0;
      case "handling":
        return this.soldierSignal().maxHandling - this.soldierSignal().getPerkPointsSpend().weaponHandling === 0;
    }
    return false;
  }

  public isPerkPointsHigherThanMax(type: "mobility" | "vitality" | "handling"): boolean {
    switch (type) {
      case "mobility":
        return this.soldierSignal().maxMobility - this.soldierSignal().getPerkPointsSpend().mobility < 0;
      case "vitality":
        return this.soldierSignal().maxVitality - this.soldierSignal().getPerkPointsSpend().vitality < 0;
      case "handling":
        return this.soldierSignal().maxHandling - this.soldierSignal().getPerkPointsSpend().weaponHandling < 0;
    }
  }
}
