import {AsyncPipe} from "@angular/common";
import { Component } from "@angular/core";

import {OverviewFacadeService} from "../../services/overview-facade.service";

@Component({
  selector: "app-overview",
  standalone: true,
  imports: [
    AsyncPipe
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
