import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  Signal,
} from "@angular/core";
import {FormsModule} from "@angular/forms";

import { soldierTypes } from "../../../data/soldierTypes";
import {soldierType} from "../../models/class.model";

@Component({
  selector: "app-soldier-type-selector",
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: "./soldier-type-selector.component.html",
  styleUrl: "./soldier-type-selector.component.scss"
})
export class SoldierTypeSelectorComponent {
  soldierTypeId = input<number | undefined>();

  soldierTypeLevel = input<number | undefined>();

  @Output() soldierTypeChange = new EventEmitter<number>();

  @Output() soldierTypeLevelChange = new EventEmitter<number>();

  public selectedSoldierType: Signal<soldierType | undefined> = computed<soldierType | undefined>(
    () => soldierTypes
      .find(soldierTypeInput => soldierTypeInput.id === this.soldierTypeId())
  );

  public changeSoldierType(event: any) {
    if(event.target?.value) {
      this.soldierTypeChange.emit(parseInt(event.target.value));
    }
  }

  public changeSoldierTypeLevel(event: any): void {
    if(event.target?.value) {
      this.soldierTypeLevelChange.emit(parseInt(event.target.value));
    }
  }

  public createLevelsArray(minLevel: number | undefined, maxLevel: number | undefined): number[]{
    const arr: number[] = [];
    if(minLevel && maxLevel) {
      for (let i = minLevel; i <= maxLevel; i++) {
        arr.push(i);
      }
    }
    return arr;
  }

  protected readonly soldierTypes = soldierTypes;
}
