import {Component, computed, effect, signal, WritableSignal} from "@angular/core";

import { perks } from "../../../data/perks";
import {IPerk} from "../../models/perk.model";
import {Soldier} from "../../models/soldier.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";
import {SystemService} from "../../services/system.service";
import {PerkComponent} from "../perk/perk.component";
import {SelectedPerkComponent} from "../selected-perk/selected-perk.component";

@Component({
  selector: "app-perk-overview",
  imports: [
    PerkComponent,
    SelectedPerkComponent
  ],
  templateUrl: "./perk-overview.component.html",
  styleUrl: "./perk-overview.component.scss"
})
export class PerkOverviewComponent {

  public soldierSignal!: WritableSignal<Soldier | null>;

  public possiblePerks = computed(() => {
    if(this.soldierSignal() !== null){
      return this.getPossiblePerks(<number>this.soldierSignal()?.soldierTypeId);
    } else {
      return [];
    }
  })

  constructor(public overviewFacade: OverviewFacadeService, public systemService: SystemService) {
    effect(() => {
      if(
        this.systemService.selectedSoldierId() !== null
        && this.overviewFacade.soldierSignalList.has(<number>this.systemService.selectedSoldierId())
      ){
        this.soldierSignal = <WritableSignal<Soldier | null>>this.overviewFacade.soldierSignalList.get(
          <number>this.systemService.selectedSoldierId()
        );
      } else {
        this.soldierSignal = signal<Soldier | null>(null);
      }
    });
  }

  public maxMobility = signal(0);
  public maxVitality = signal(0);
  public maxHandling = signal(0);

  // Create an array so our HTML has a collection to loop over
  public levelsArray: number[] = [1, 2, 3];

  public perkTypeArray: number[] = [0, 1, 2];

  selectedPerkId: WritableSignal<number | null> = signal(null);

  public getPerksByTypeAndLevel(type: number, level: number): IPerk[] {
    return this.getPerksByType(type).filter(perk => perk.level === level);
  }

  public getPerksByType(type: number): IPerk[] {
    if(this.soldierSignal() !== null){
      const possiblePerks = this.getPossiblePerks((<Soldier>this.soldierSignal()).soldierTypeId);
      return possiblePerks.filter(perk => perk.type === type);
    }
    return [];
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
    return this.overviewFacade.soldierList.get(<number>this.systemService.selectedSoldierId())?.
      perks?.find(perk => perk.perkId === perkId)?.amount || 0;
  }
}
