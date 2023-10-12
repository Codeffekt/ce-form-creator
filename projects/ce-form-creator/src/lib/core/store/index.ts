import { FormsState } from './forms';
import { HistoryState } from './history';
import { ModeState } from './mode';
import { SelectionState } from './selection';

export * from './forms';
export * from './mode';
export * from './selection';
export * from './history';

export const creatorStore = [
    FormsState,
    SelectionState,
    ModeState,
    HistoryState
]