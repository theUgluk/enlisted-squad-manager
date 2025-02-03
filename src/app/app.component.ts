import {AsyncPipe} from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Store } from "@ngxs/store";
import {BehaviorSubject} from "rxjs";

import { OverviewComponent } from "./components/overview/overview.component";
import {UrlService} from "./services/url.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, OverviewComponent, AsyncPipe],
  providers: [Store],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "boilerplate";

  public initialLoaded: BehaviorSubject<boolean>;

  constructor(urlService: UrlService) {
    this.initialLoaded = urlService.initialLoaded;
    urlService.initialLoad();

  }

  protected readonly UrlService = UrlService;
}
