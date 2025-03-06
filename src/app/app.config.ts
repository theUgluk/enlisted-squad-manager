import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

import { routes } from "./app.routes";
import { SoldierState } from "./state/store/soldier.state";
import {SquadState} from "./state/store/squad.state";
import {SystemState} from "./state/store/system.state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(NgxsModule.forRoot([SoldierState, SquadState, SystemState])),
    provideExperimentalZonelessChangeDetection()
  ]
};
