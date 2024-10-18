import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Store } from "@ngxs/store";

import { DefaultActions } from "./state/actions/default.actions";
import { DefaultState } from "./state/store/default.state";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet],
    providers: [Store],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    title = "boilerplate";

    constructor(private _store: Store) {
    }

    ngOnInit() {
        this._store.select(DefaultState.getBoolean).subscribe((value) => {
            // eslint-ignore no-console
            console.log("Example state: ", value);
        });
        this._store.dispatch(new DefaultActions.SetBoolean(false));
    }
}
