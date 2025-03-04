import {Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PopupService {
  public popupVisible = signal(false);
  public popupText = signal("");
  public popupConfirm = signal(() => {})
  public popupTitle = signal("");

  public popupCancel() {
    this.popupText.set("");
    this.popupVisible.set(false);
    this.popupConfirm.set(() => {});
  }

  public showPopupWithText(text: string, title: string, confirmFunction: () => void){
    this.popupText.set(text);
    this.popupTitle.set(title);
    this.popupVisible.set(true);
    this.popupConfirm.set(confirmFunction);
  }

}
