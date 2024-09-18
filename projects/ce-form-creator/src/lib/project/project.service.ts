import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import * as saveAs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private store = inject(Store);

  constructor() { }

  loadProject(file: File) {    
    const reader = new FileReader();
    reader.onload = () => {
      const state = JSON.parse(reader.result as string);
      this.store.reset(state);
    };
    reader.readAsText(file);
  }

  saveProject() {
    const state = this.store.snapshot();
    console.log(state);
    // clear history
    state.historyState = {
      revisions: [],
      head: -1
    };
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    saveAs(blob, 'project.json');
  }
}
