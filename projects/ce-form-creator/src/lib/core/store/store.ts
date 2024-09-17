import { FormsState } from "./forms";
import { HistoryState } from "./history";
import { ModeState } from "./mode";
import { SelectionState } from "./selection";
import { StoreModel } from "./store-model";

export const creatorStore: StoreModel = [
    FormsState,
    SelectionState,
    ModeState,   
    HistoryState
];