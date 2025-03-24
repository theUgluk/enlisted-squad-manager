import { NgClass } from "@angular/common";
import {
  Component,
  inject,
  input,
  OnInit,
  WritableSignal,
} from "@angular/core";

import { Squad } from "../../models/squad.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";
import { PopupService } from "../../services/popup.service";
import { SystemService } from "../../services/system.service";

@Component({
  selector: "app-squad",
  imports: [NgClass],
  templateUrl: "./squad.component.html",
  styleUrl: "./squad.component.scss",
})
export class SquadComponent implements OnInit {
  constructor(
    public overviewFacade: OverviewFacadeService,
    public systemService: SystemService
  ) {}

  private popupService = inject(PopupService);

  // Priority list of soldier type IDs whose icons should be used if present
  private readonly prioritySoldierTypeIds = [1, 5, 6, 7, 10, 12, 15, 16, 17];

  private readonly defaultIconUri = "rifle.svg";

  squadId = input.required<number>();

  public squadSignal!: WritableSignal<Squad>;
  ngOnInit() {
    this.squadSignal = <WritableSignal<Squad>>(
      this.overviewFacade.squadSignalList.get(this.squadId())
    );
  }

  public selectSquad() {
    this.systemService.setSelectedSquadId(this.squadId());
  }

  public deleteSquad(event: Event) {
    event.stopPropagation();
    this.popupService.showPopupWithText(
      "Are you sure you want to delete the squad?",
      "Delete Squad",
      () => {
        this.systemService.unsetSquadIfSelectedSquadId(this.squadId());
        this.overviewFacade.deleteSquad(this.squadId());
      }
    );
  }

  public moveSquadUp(event: Event) {
    event.stopPropagation();
    const squadIds = this.overviewFacade.getSquadIds();
    const currentIndex = squadIds.indexOf(this.squadId());
    if (currentIndex > 0) {
      this.overviewFacade.swapSquadIds(
        this.squadId(),
        squadIds[currentIndex - 1]
      );
      this.systemService.setSelectedSquadId(squadIds[currentIndex - 1]);
    }
  }

  public moveSquadDown(event: Event) {
    event.stopPropagation();
    const squadIds = this.overviewFacade.getSquadIds();
    const currentIndex = squadIds.indexOf(this.squadId());
    if (currentIndex < squadIds.length - 1) {
      this.overviewFacade.swapSquadIds(
        this.squadId(),
        squadIds[currentIndex + 1]
      );
      this.systemService.setSelectedSquadId(squadIds[currentIndex + 1]);
    }
  }

  public getSquadIcon(): string {
    const soldiers = this.overviewFacade.soldierForSquad(this.squadId());
    if (soldiers.length === 0) return this.defaultIconUri;

    // First check for priority soldier types
    for (const priorityTypeId of this.prioritySoldierTypeIds) {
      const prioritySoldier = soldiers.find(
        (s) => s.soldierTypeId === priorityTypeId
      );
      if (prioritySoldier) {
        return prioritySoldier.getSoldierType()?.icon || this.defaultIconUri;
      }
    }

    // If no priority types found, use the most common type
    const typeCounts = new Map<number, number>();
    soldiers.forEach((soldier) => {
      const typeId = soldier.soldierTypeId;
      typeCounts.set(typeId, (typeCounts.get(typeId) || 0) + 1);
    });

    let mostCommonTypeId = -1;
    let maxCount = 0;
    typeCounts.forEach((count, typeId) => {
      if (count > maxCount) {
        maxCount = count;
        mostCommonTypeId = typeId;
      }
    });

    const mostCommonSoldier = soldiers.find(
      (s) => s.soldierTypeId === mostCommonTypeId
    );
    return mostCommonSoldier?.getSoldierType()?.icon || this.defaultIconUri;
  }
}
