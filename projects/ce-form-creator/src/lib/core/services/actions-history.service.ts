import { inject, Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { History, HistorySelectors } from '../store/history';

@Injectable()
export class CreatorActionsHistoryService {
    canUndo$: Observable<boolean> = inject(Store).select(HistorySelectors.canUndo);
    canRedo$: Observable<boolean> = inject(Store).select(HistorySelectors.canRedo);

    constructor(private store: Store) { }

    async undo() {
        this.store.dispatch(new History.Undo());
    }

    async redo() {
        this.store.dispatch(new History.Redo());
    }
}