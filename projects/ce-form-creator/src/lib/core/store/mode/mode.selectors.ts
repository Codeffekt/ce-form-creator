import { Selector } from "@ngxs/store";
import { FormCreatorMode } from "../../models";
import { ModeState, ModeStateModel } from "./mode.state";

export class ModeSelectors {

    @Selector([ModeState])
    static getMode(state: ModeStateModel): FormCreatorMode {
        return state.mode;
    }
}