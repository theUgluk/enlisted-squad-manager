import {ChangeDetectorRef, Component, effect, EventEmitter, input, Output} from "@angular/core";

import {IPerk} from "../../models/perk.model";

@Component({
  selector: "app-perk",
  imports: [],
  templateUrl: "./perk.component.html",
  styleUrl: "./perk.component.scss"
})
export class PerkComponent {
  perk = input.required<IPerk>();
  selectedAmountForPerk = input<number>(0);
  isSelected = input<boolean>(false);

  constructor(cdr: ChangeDetectorRef) {
    effect(() => {
      let classes = "";
      if(this.selectedAmountForPerk() > 0 || this.perk().default){
        classes = "perked";
      } else {
        classes = "unperked";
      }
      if(this.isSelected()) {
        classes = `${classes} selected`;
      }
      this.extraClasses = classes;
      cdr.detectChanges();
    });

  }
  public extraClasses = "";

  @Output() perkClicked = new EventEmitter<IPerk>();

  @Output() perkRightClicked = new EventEmitter<IPerk>();

  public click(){
    this.perkClicked.emit(this.perk());
  }

  public rmb(event: MouseEvent){
    event.preventDefault();
    this.perkRightClicked.emit(this.perk());
  }
}
