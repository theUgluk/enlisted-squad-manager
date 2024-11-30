import { Component, effect, input, signal, WritableSignal } from "@angular/core";

import { perks } from "../../../data/perks";
import {IPerk} from "../../models/perk.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";
import {PerkComponent} from "../perk/perk.component";

@Component({
  selector: "app-perk-overview",
  standalone: true,
  imports: [
    PerkComponent
  ],
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

  public perkClicked(perkId: number){
    this.overviewFacade.addPerkToSelectedSoldier(perkId);
  }

  public selectedAmountForPerk(perkId: number): number{
    return this.overviewFacade.soldierList.get(this.selectedSoldierId())?.
      perks?.find(perk => perk.perkId === perkId)?.amount || 0;
  }

}
