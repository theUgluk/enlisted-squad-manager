import { Injectable } from "@angular/core";
import {
    Action, Selector, State, StateContext
} from "@ngxs/store";

import { DefaultActions } from "../actions/default.actions";
import { DefaultStateModel } from "../models/default.model";

@State<DefaultStateModel>({
    name: "default",
    defaults: {
        boolean: true
    }
})

@Injectable()
export class DefaultState {
    @Selector()
    public static getBoolean(state: DefaultStateModel): boolean {
        return state.boolean;
    }

    @Action(DefaultActions.SetBoolean)
    public setBoolean(ctx: StateContext<DefaultStateModel>, action: DefaultActions.SetBoolean) {
        ctx.setState({ ...ctx.getState(), boolean: action.boolean });
    }
}
