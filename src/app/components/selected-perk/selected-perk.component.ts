import {Component, EventEmitter, input, Output} from "@angular/core";

import {IPerk} from "../../models/perk.model";
import {PerkComponent} from "../perk/perk.component";

@Component({
  selector: "app-selected-perk",
  imports: [
    PerkComponent
  ],
  templateUrl: "./selected-perk.component.html",
  styleUrl: "./selected-perk.component.scss"
})
export class SelectedPerkComponent {
  selectedPerk = input.required<IPerk | null>();
  selectedAmountForPerk = input<number>(0);

  @Output() perkClicked = new EventEmitter<IPerk | null>();

  @Output() perkRightClicked = new EventEmitter<IPerk | null>();
}

