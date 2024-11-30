import { Component, effect, input, signal, WritableSignal } from "@angular/core";

import { perks } from "../../../data/perks";
import {IPerk} from "../../models/perk.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";

@Component({
  selector: "app-perk-overview",
  standalone: true,
  imports: [],
  templateUrl: "./perk-overview.component.html",
  styleUrl: "./perk-overview.component.scss"
})
export class PerkOverviewComponent {

  constructor(public overviewFacade: OverviewFacadeService) {
    effect(() => {
      const soldierSignal = this.overviewFacade.soldierSignalList.get(this.selectedSoldierId());
      if(soldierSignal) {
        this.possiblePerks.set(this.getPossiblePerks(soldierSignal().soldierTypeId));
      }
    },
    {
      allowSignalWrites: true,
    });
  }

  selectedSoldierId = input.required<number>();

  public possiblePerks: WritableSignal<IPerk[]> = signal([]);

  private getPossiblePerks(soldierTypeId: number): IPerk[] {
    return perks.filter(perk => {
      return (perk.include && perk.class.includes(soldierTypeId))
        || (!perk.include && !perk.class.includes(soldierTypeId));
    });
  }

}
