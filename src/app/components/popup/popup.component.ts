import {Component, inject} from "@angular/core";

import {PopupService} from "../../services/popup.service";

@Component({
  selector: "app-popup",
  imports: [],
  templateUrl: "./popup.component.html",
  styleUrl: "./popup.component.scss"
})
export class PopupComponent {

  public popupService = inject(PopupService);

  public cancel(){
    this.popupService.popupCancel();
  }

  public confirm() {
    this.popupService.popupConfirm()();
    this.popupService.popupCancel();
  }
}
