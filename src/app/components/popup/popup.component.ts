import {Component, inject} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {OverviewFacadeService} from "../../services/overview-facade.service";
import {PopupService} from "../../services/popup.service";

@Component({
  selector: "app-popup",
  imports: [
    FormsModule
  ],
  templateUrl: "./popup.component.html",
  styleUrl: "./popup.component.scss"
})
export class PopupComponent {

  public popupService = inject(PopupService);

  public overviewFacade = inject(OverviewFacadeService);

  public selectedSquad: number | null = null;

  public getSquadList() {
    return [...this.overviewFacade.squadList().values()];
  }

  public cancel(){
    this.popupService.popupCancel();
  }

  private copySoldier(){
    if(this.selectedSquad !== null) {
      this.overviewFacade.copySoldierToSquad(this.popupService.soldierToCopy(), <number>this.selectedSquad);
    }
  }

  public confirm() {
    if(this.popupService.popupTypeText()) {
      this.popupService.popupConfirm()();
    } else if(this.selectedSquad !== null){
      this.copySoldier();
    }
    this.selectedSquad = null;
    this.popupService.popupCancel();
  }
}
