import {NgClass} from "@angular/common";
import {Component, input, OnInit, WritableSignal} from "@angular/core";

import {Squad} from "../../models/squad.model";
import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SystemService} from "../../services/system.service";

@Component({
  selector: "app-squad",
  imports: [
    NgClass
  ],
  templateUrl: "./squad.component.html",
  styleUrl: "./squad.component.scss"
})
export class SquadComponent implements OnInit {
  constructor(public overviewFacade: OverviewFacadeService, public systemService: SystemService) {}
  squadId = input.required<number>();

  public squadSignal!: WritableSignal<Squad>;
  ngOnInit() {
    this.squadSignal = <WritableSignal<Squad>>this.overviewFacade.squadSignalList.get(this.squadId());
  }

  public selectSquad(){
    this.systemService.setSelectedSquadId(this.squadId());
  }

  public deleteSquad(event: Event) {
    event.stopPropagation();
    this.systemService.unsetSquadIfSelectedSquadId(this.squadId());
    this.overviewFacade.deleteSquad(this.squadId());
  }
}
