import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import * as saveAs from 'file-saver';
import { historyStateDefault, StoreStateSnapshot } from '../core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private store = inject(Store);

  constructor() { }

  loadProject(file: File) {    
    const reader = new FileReader();
    reader.onload = () => {
      const state = JSON.parse(reader.result as string) as Partial<StoreStateSnapshot>;
      state.historyState = historyStateDefault;
      state.selectionState = {};
      this.store.reset(state);
    };
    reader.readAsText(file);
  }

  saveProject() {
    const state = this.store.snapshot() as Partial<StoreStateSnapshot>;    
    
    // clear history and selection
    state.historyState = undefined;
    state.selectionState = undefined;

    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    saveAs(blob, 'project.json');
  }
}
