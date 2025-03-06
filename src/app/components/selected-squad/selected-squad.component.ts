import {Component} from "@angular/core";

import {Soldier} from "../../models/soldier.model";
import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SystemService} from "../../services/system.service";
import {SoldierComponent} from "../soldier/soldier.component";

@Component({
  selector: "app-selected-squad",
  imports: [
    SoldierComponent
  ],
  templateUrl: "./selected-squad.component.html",
  styleUrl: "./selected-squad.component.scss"
})
export class SelectedSquadComponent {
  constructor(public overviewFacade: OverviewFacadeService, public systemService: SystemService) {}

  public createNewSoldier(){
    const selectedSquadId = this.systemService.selectedSquadId();
    if(selectedSquadId !== null){
      this.overviewFacade.addSoldier(selectedSquadId);
    }
  }

  public getOrderedSoldierList(): Soldier[]{
    if(this.systemService.selectedSquadId() !== null) {
      return this.overviewFacade.soldierForSquad(<number>this.systemService.selectedSquadId())
        .sort((a, b) => a.id - b.id);
    }
    return [];
  }
}
