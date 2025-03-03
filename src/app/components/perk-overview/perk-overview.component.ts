import {Component, effect, signal, WritableSignal} from "@angular/core";

import {IPerk} from "../../models/perk.model";
import {Soldier} from "../../models/soldier.model";
import { OverviewFacadeService } from "../../services/overview-facade.service";
import {PerkService} from "../../services/perk.service";
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

  constructor(
    public overviewFacade: OverviewFacadeService,
    public systemService: SystemService,
    public perkService: PerkService
  ) {
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
      this.selectedPerk.set(null);
    });
  }

  // Create an array so our HTML has a collection to loop over
  public levelsArray: number[] = [1, 2, 3];

  public perkTypeArray: number[] = [0, 1, 2];

  selectedPerk: WritableSignal<IPerk | null> = signal(null);

  public getPerks(type?: number, level?: number): IPerk[] {
    let result: IPerk[] = [];
    if(this.soldierSignal() !== null){
      result = this.perkService.getPerks(<number>this.soldierSignal()?.soldierTypeId, type, level);
    }
    if(level === 1 && type !== undefined){
      const perkPointsPerSoldierType = this.soldierSignal()?.getPerkPointsPerSoldierType();
      if(perkPointsPerSoldierType !== undefined && perkPointsPerSoldierType.defaultPerk.type === type){
        result = [perkPointsPerSoldierType.defaultPerk, ...result];
      }
    }
    return result;
  }

  public perkClicked(perk: IPerk | null){
    if(perk !== null) {
      if (
        this.selectedPerk() === null ||
        this.selectedPerk()?.id !== perk.id) {
        this.selectedPerk.set(perk);
      } else {
        this.overviewFacade.addPerkToSelectedSoldier(perk.id);
      }
    }
  }

  public perkRightClicked(perk: IPerk | null){
    if(perk !== null) {
      this.overviewFacade.removePerkFromSelectedSoldier(perk.id);
    }
  }

  public selectedAmountForPerk(perkId: number | null): number {
    return this.overviewFacade.soldierList.get(<number>this.systemService.selectedSoldierId())?.
      perks?.find(perk => perk.perkId === perkId)?.amount || 0;
  }
}
