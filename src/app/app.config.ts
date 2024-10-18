import { ApplicationConfig, importProvidersFrom, provideExperimentalZonelessChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

import { routes } from "./app.routes";
import { DefaultState } from "./state/store/default.state";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        importProvidersFrom(NgxsModule.forRoot([DefaultState])),
        provideExperimentalZonelessChangeDetection()
    ]
};
