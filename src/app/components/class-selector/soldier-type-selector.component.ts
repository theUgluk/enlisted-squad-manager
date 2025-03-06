import {
  Component,
  computed, ElementRef,
  EventEmitter,
  input,
  Output, Renderer2,   Signal, signal,
  ViewChild,
} from "@angular/core";
import {FormsModule} from "@angular/forms";

import { soldierTypes } from "../../../data/soldierTypes";
import {soldierType} from "../../models/class.model";

@Component({
  selector: "app-soldier-type-selector",
  imports: [
    FormsModule
  ],
  templateUrl: "./soldier-type-selector.component.html",
  styleUrl: "./soldier-type-selector.component.scss"
})
export class SoldierTypeSelectorComponent {
  @ViewChild("dropdownContainer") menu: ElementRef | undefined;
  @ViewChild("toggleBtn") toggleButton: ElementRef | undefined;
  constructor(private renderer: Renderer2) {

    this.renderer.listen("window", "click", (e:Event)=> {
      /**
       * Only run when toggleButton is not clicked
       * If we don't check this, all clicks (even on the toggle button) gets into this
       * section which in the result we might never see the menu open!
       * And the menu itself is checked here, and it's where we check just outside of
       * the menu and button the condition abbove must close the menu
       */
      if(e.target !== this.toggleButton?.nativeElement && e.target!==this.menu?.nativeElement){
        this.showDropdown.set(false);
      }
    });
  }
  soldierTypeId = input<number | undefined>();

  soldierTypeLevel = input<number | undefined>();

  @Output() soldierTypeChange = new EventEmitter<number>();

  @Output() soldierTypeLevelChange = new EventEmitter<number>();

  public showDropdown = signal(false);

  public selectedSoldierType: Signal<soldierType | undefined> = computed<soldierType | undefined>(
    () => soldierTypes
      .find(soldierTypeInput => soldierTypeInput.id === this.soldierTypeId())
  );

  public changeSoldierTypeAndLevel(newSoldierTypeId: number, newSoldierTypeLevel: number): void {
    this.changeSoldierType(newSoldierTypeId);
    this.changeSoldierTypeLevel(newSoldierTypeLevel);
    this.showDropdown.set(false);
  }

  public changeSoldierType(newSoldierTypeId: number) {
    this.soldierTypeChange.emit(newSoldierTypeId);
    this.showDropdown.set(false);
  }

  public changeSoldierTypeLevel(newSoldierLevel: number): void {
    this.soldierTypeLevelChange.emit(newSoldierLevel);
    this.showDropdown.set(false);
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
