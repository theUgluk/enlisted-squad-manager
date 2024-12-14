import {AsyncPipe} from "@angular/common";
import {Component} from "@angular/core";

import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SoldierComponent} from "../soldier/soldier.component";

@Component({
  selector: "app-selected-squad",
  standalone: true,
  imports: [
    AsyncPipe,
    SoldierComponent
  ],
  templateUrl: "./selected-squad.component.html",
  styleUrl: "./selected-squad.component.scss"
})
export class SelectedSquadComponent {
  constructor(public overviewFacade: OverviewFacadeService) {}

  public createNewSoldier(){
    this.overviewFacade.addSoldier(this.overviewFacade.selectedSquadId());
  }
}
