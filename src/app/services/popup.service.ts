import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PopupService {
  public popupTypeText = signal(true);
  public popupVisible = signal(false);
  public popupText = signal("");
  public popupConfirm = signal(() => {})
  public popupTitle = signal("");
  public soldierToCopy = signal(1);

  public popupCancel() {
    this.popupText.set("");
    this.popupTypeText.set(true);
    this.popupVisible.set(false);
    this.popupConfirm.set(() => {});
  }

  public showPopupWithText(text: string, title: string, confirmFunction: () => void){
    this.popupTypeText.set(true);
    this.popupText.set(text);
    this.popupTitle.set(title);
    this.popupVisible.set(true);
    this.popupConfirm.set(confirmFunction);
  }

  public showPopupForCopy(soldierId: number){
    this.popupTypeText.set(false);
    this.popupTitle.set("Copy Soldier");
    this.soldierToCopy.set(soldierId);
    this.popupVisible.set(true);
  }

}
