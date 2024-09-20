import { FormsState } from "./forms";
import { HistoryState } from "./history";
import { ModeState } from "./mode";
import { ProjectState } from "./project";
import { SelectionState } from "./selection";
import { StoreModel } from "./store-model";

export const creatorStore: StoreModel = [
    ProjectState,
    FormsState,
    SelectionState,
    ModeState,   
    HistoryState
];