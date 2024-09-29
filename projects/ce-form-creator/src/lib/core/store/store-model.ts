import { FormsState, FormsStateModel } from "./forms";
import { HistoryState, HistoryStateModel } from "./history";
import { ModeState, ModeStateModel } from "./mode";
import { ProjectState, ProjectStateModel } from "./project";
import { SelectionState, SelectionStateModel } from "./selection";

export type StoreModel = [
    typeof ProjectState,
    typeof FormsState,
    typeof SelectionState,
    typeof ModeState,   
    typeof HistoryState,    
];

export interface StoreStateSnapshot {
    projectState: ProjectStateModel;
    formsState: FormsStateModel;
    selectionState: SelectionStateModel;
    modeState: ModeStateModel;   
    historyState: HistoryStateModel;    
};

