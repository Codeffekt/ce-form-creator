import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { History, HistorySelectors } from '../store/history';

@Injectable()
export class CreatorActionsHistoryService {
    @Select(HistorySelectors.canUndo) canUndo$!: Observable<boolean>;
    @Select(HistorySelectors.canRedo) canRedo$!: Observable<boolean>;

    constructor(private store: Store) { }

    async undo() {
        this.store.dispatch(new History.Undo());
    }

    async redo() {
        this.store.dispatch(new History.Redo());
    }
}