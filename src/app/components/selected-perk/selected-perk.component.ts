import {Component, computed, EventEmitter, input, Output, Signal} from "@angular/core";

import { perks } from "../../../data/perks";
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
  selectedPerkId = input.required<number | null>();
  selectedAmountForPerk = input<number>(0);
  selectedPerk: Signal<IPerk> = computed(() => <IPerk>perks.find(perk => perk.id === this.selectedPerkId()));

  @Output() perkClicked = new EventEmitter<number | null>();

  @Output() perkRightClicked = new EventEmitter<number | null>();
}

