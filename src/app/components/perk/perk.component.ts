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
      if(this.selectedAmountForPerk() > 0){
        classes = "perked";
      } else {
        classes = "unperked";
      }
      if(this.isSelected()){
        classes = `${classes} selected`;
      }
      this.extraClasses = classes;
      cdr.detectChanges();
    });

  }
  public extraClasses = "";

  @Output() perkClicked = new EventEmitter<number>();

  @Output() perkRightClicked = new EventEmitter<number>();

  public click(){
    this.perkClicked.emit(this.perk().id);
  }

  public rmb(event: MouseEvent){
    event.preventDefault();
    this.perkRightClicked.emit(this.perk().id);
  }
}
