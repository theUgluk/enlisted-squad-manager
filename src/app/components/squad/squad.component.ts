import {AsyncPipe} from "@angular/common";
import {Component, input, OnInit, WritableSignal} from "@angular/core";

import {Squad} from "../../models/squad.model";
import {OverviewFacadeService} from "../../services/overview-facade.service";
import {SoldierComponent} from "../soldier/soldier.component";

@Component({
  selector: "app-squad",
  standalone: true,
  imports: [
    AsyncPipe,
    SoldierComponent
  ],
  templateUrl: "./squad.component.html",
  styleUrl: "./squad.component.scss"
})
export class SquadComponent implements OnInit {
  constructor(public overviewFacade: OverviewFacadeService) {}
  squadId = input.required<number>();

  public squadSignal!: WritableSignal<Squad>;
  ngOnInit() {
    this.squadSignal = <WritableSignal<Squad>>this.overviewFacade.squadSignalList.get(this.squadId());
  }

  public selectSquad(){
    this.overviewFacade.selectedSquadId.set(this.squadId());
  }

}
