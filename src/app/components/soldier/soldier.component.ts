import {AsyncPipe} from "@angular/common";
import {Component, input, OnInit, WritableSignal} from "@angular/core";

import {Soldier} from "../../models/soldier.model";
import {OverviewFacadeService} from "../../services/overview-facade.service";

@Component({
  selector: "app-soldier",
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: "./soldier.component.html",
  styleUrl: "./soldier.component.scss"
})
export class SoldierComponent implements OnInit {
  constructor(public overviewFacade: OverviewFacadeService) {}
  soldierId = input.required<number>();

  public soldierSignal!: WritableSignal<Soldier>;
  ngOnInit() {
    this.soldierSignal = <WritableSignal<Soldier>>this.overviewFacade.soldierSignalList.get(this.soldierId());
  }
  public deleteSoldier(soldierId: number){
    this.overviewFacade.deleteSoldier(soldierId);
  }
}
