import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Store } from "@ngxs/store";

import {OverviewComponent} from "./components/overview/overview.component";
import { SoldierState } from "./state/store/soldier.state";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, OverviewComponent],
  providers: [Store],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  title = "boilerplate";

  constructor(private _store: Store) {
  }

  ngOnInit() {
    this._store.select(SoldierState.getBoolean).subscribe((value) => {
      // eslint-ignore no-console
      console.log("Example state: ", value);
    });
  }
}
