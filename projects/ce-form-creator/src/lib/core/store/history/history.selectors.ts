import { Selector } from "@ngxs/store";
import { HistoryState, HistoryStateModel } from "./history.state";

export class HistorySelectors {
    @Selector([HistoryState])
    static canUndo(state: HistoryStateModel): boolean {
        return state.head > 0;
    }

    @Selector([HistoryState])
    static canRedo(state: HistoryStateModel): boolean {
        return state.head < state.revisions.length - 1;
    }
}
