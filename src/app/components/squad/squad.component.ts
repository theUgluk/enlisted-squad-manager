import { NgClass } from '@angular/common';
import {
  Component,
  inject,
  input,
  OnInit,
  WritableSignal,
} from '@angular/core';

import { Squad } from '../../models/squad.model';
import { OverviewFacadeService } from '../../services/overview-facade.service';
import { PopupService } from '../../services/popup.service';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-squad',
  imports: [NgClass],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss',
})
export class SquadComponent implements OnInit {
  constructor(
    public overviewFacade: OverviewFacadeService,
    public systemService: SystemService
  ) {}

  private popupService = inject(PopupService);

  squadId = input.required<number>();

  public squadSignal!: WritableSignal<Squad>;
  ngOnInit() {
    this.squadSignal = <WritableSignal<Squad>>(
      this.overviewFacade.squadSignalList.get(this.squadId())
    );
  }

  public selectSquad() {
    this.systemService.setSelectedSquadId(this.squadId());
  }

  public deleteSquad(event: Event) {
    event.stopPropagation();
    this.popupService.showPopupWithText(
      'Are you sure you want to delete the squad?',
      'Delete Squad',
      () => {
        this.systemService.unsetSquadIfSelectedSquadId(this.squadId());
        this.overviewFacade.deleteSquad(this.squadId());
      }
    );
  }

  public moveSquadUp(event: Event) {
    event.stopPropagation();
    const squadIds = this.overviewFacade.getSquadIds();
    const currentIndex = squadIds.indexOf(this.squadId());
    if (currentIndex > 0) {
      this.overviewFacade.swapSquadIds(
        this.squadId(),
        squadIds[currentIndex - 1]
      );
      this.systemService.setSelectedSquadId(squadIds[currentIndex - 1]);
    }
  }

  public moveSquadDown(event: Event) {
    event.stopPropagation();
    const squadIds = this.overviewFacade.getSquadIds();
    const currentIndex = squadIds.indexOf(this.squadId());
    if (currentIndex < squadIds.length - 1) {
      this.overviewFacade.swapSquadIds(
        this.squadId(),
        squadIds[currentIndex + 1]
      );
      this.systemService.setSelectedSquadId(squadIds[currentIndex + 1]);
    }
  }
}
