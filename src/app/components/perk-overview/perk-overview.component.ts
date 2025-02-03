import { Component, effect, input, signal, WritableSignal } from "@angular/core";

import { perks } from "../../../data/perks";
import {IPerk} from "../../models/perk.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";
import {PerkComponent} from "../perk/perk.component";
import {SelectedPerkComponent} from "../selected-perk/selected-perk.component";

@Component({
  selector: "app-perk-overview",
  standalone: true,
  imports: [
    PerkComponent,
    SelectedPerkComponent
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

  // Create an array so our HTML has a collection to loop over
  public levelsArray: number[] = [1, 2, 3];

  public perkTypeArray: number[] = [0, 1, 2];

  selectedSoldierId = input.required<number>();

  selectedPerkId: WritableSignal<number | null> = signal(null);

  public possiblePerks: WritableSignal<IPerk[]> = signal([]);

  public getPerksByTypeAndLevel(type: number, level: number): IPerk[] {
    return this.getPerksByType(type).filter(perk => perk.level === level);
  }

  public getPerksByType(type: number): IPerk[] {
    const possiblePerks = this.possiblePerks();
    return possiblePerks.filter(perk => perk.type === type);
  }

  private getPossiblePerks(soldierTypeId: number): IPerk[] {
    return perks.filter(perk => {
      return (perk.include && perk.class.includes(soldierTypeId))
        || (!perk.include && !perk.class.includes(soldierTypeId));
    });
  }

  public perkClicked(perkId: number | null){
    if(perkId !== null) {
      if (this.selectedPerkId() === null || this.selectedPerkId() !== perkId) {
        this.selectedPerkId.set(perkId);
      } else {
        this.overviewFacade.addPerkToSelectedSoldier(perkId);
      }
    }
  }

  public perkRightClicked(perkId: number | null){
    if(perkId !== null) {
      this.overviewFacade.removePerkFromSelectedSoldier(perkId);
    }
  }

  public selectedAmountForPerk(perkId: number | null): number{
    return this.overviewFacade.soldierList.get(this.selectedSoldierId())?.
      perks?.find(perk => perk.perkId === perkId)?.amount || 0;
  }

}
