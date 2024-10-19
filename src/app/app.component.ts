import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Store } from "@ngxs/store";

import { OverviewComponent } from "./components/overview/overview.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, OverviewComponent],
  providers: [Store],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "boilerplate";

  constructor() {}
}
