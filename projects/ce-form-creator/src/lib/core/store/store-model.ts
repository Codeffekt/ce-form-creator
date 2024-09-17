import { FormsState, FormsStateModel } from "./forms";
import { HistoryState, HistoryStateModel } from "./history";
import { ModeState, ModeStateModel } from "./mode";
import { SelectionState, SelectionStateModel } from "./selection";

export type StoreModel = [
    typeof FormsState,
    typeof SelectionState,
    typeof ModeState,   
    typeof HistoryState
];

export interface StoreStateSnapshot {
    formsState: FormsStateModel;
    selectionState: SelectionStateModel;
    modeState: ModeStateModel;   
    historyState: HistoryStateModel;
};

