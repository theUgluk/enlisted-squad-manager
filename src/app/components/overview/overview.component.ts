import {Component} from "@angular/core";

import {OverviewFacadeService} from "../../services/overview-facade.service";
import {PerkOverviewComponent} from "../perk-overview/perk-overview.component";
import {SelectedSquadComponent} from "../selected-squad/selected-squad.component";
import {SquadComponent} from "../squad/squad.component";
import {SystemService} from "../../services/system.service";

@Component({
  selector: "app-overview",
  imports: [
    SquadComponent,
    SelectedSquadComponent,
    PerkOverviewComponent
  ],
  templateUrl: "./overview.component.html",
  styleUrl: "./overview.component.scss"
})
export class OverviewComponent {
  constructor(public overviewFacade: OverviewFacadeService, public systemService: SystemService) {}

  public addSquad(){
    this.overviewFacade.addSquad();
  }
}
