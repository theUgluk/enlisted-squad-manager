import {AsyncPipe} from "@angular/common";
import {Component} from "@angular/core";

import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SelectedSquadComponent} from "../selected-squad/selected-squad.component";
import {SquadComponent} from "../squad/squad.component";

@Component({
  selector: "app-overview",
  standalone: true,
  imports: [
    AsyncPipe,
    SquadComponent,
    SelectedSquadComponent
  ],
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.scss"
})
export class OverviewComponent {
  constructor(public overviewFacade: OverviewFacadeService) {}

  public addSquad(){
    this.overviewFacade.addSquad();
  }
}
