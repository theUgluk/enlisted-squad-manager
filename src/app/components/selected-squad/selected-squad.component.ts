import {Component} from "@angular/core";

import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SoldierComponent} from "../soldier/soldier.component";
import {SystemService} from "../../services/system.service";

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
}
