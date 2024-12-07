import {Component, EventEmitter, input, Output} from "@angular/core";

import {IPerk} from "../../models/perk.model";

@Component({
  selector: "app-perk",
  standalone: true,
  imports: [],
  templateUrl: "./perk.component.html",
  styleUrl: "./perk.component.scss"
})
export class PerkComponent {
  perk = input.required<IPerk>();
  selectedAmountForPerk = input<number>(0);

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
