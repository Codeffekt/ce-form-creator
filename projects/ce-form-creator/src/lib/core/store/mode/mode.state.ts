import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { FormCreatorMode } from "../../models";
import { Mode } from "./mode.actions";

export interface ModeStateModel {
    mode: FormCreatorMode;
}

@State<ModeStateModel>({
    name: 'modeState',
    defaults: {
        mode: 'conception'
    }
})
@Injectable()
export class ModeState {

    @Action(Mode.Switch)
    switch(ctx: StateContext<ModeStateModel>, { mode }: Mode.Switch) {
        ctx.patchState({ mode })
    }
}