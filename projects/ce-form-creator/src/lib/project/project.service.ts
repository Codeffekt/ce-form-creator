import { inject, Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import * as saveAs from 'file-saver';
import { ProjectFormatStateAdapter } from './ProjectFormatStateAdapter';
import { ProjectFormat, ProjectFormatContext } from './ProjectFormat';
import { Project, ProjectSelectors } from '../core/store/project';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {

  @Select(ProjectSelectors.getProject) private project$!: Observable<ProjectFormatContext>;

  private store = inject(Store);  

  updateProject(context: ProjectFormatContext) {
    this.store.dispatch(new Project.UpdateProject(context));
  }

  updateProjectName(name: string) {
    this.store.dispatch(new Project.UpdateProjectName(name));
  }

  initProject(project: ProjectFormat) {    
    const state = ProjectFormatStateAdapter
      .convertProjectToState(project);    
    this.store.reset(state);
  }

  loadProject(file: File) {
    const reader = new FileReader();
    reader.onload = () => this.initProject(JSON.parse(reader.result as string));
    reader.readAsText(file);
  }

  saveProject() {
    const project = ProjectFormatStateAdapter.convertStateToProject(this.store.snapshot());
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
    saveAs(blob, `${project.context.name}.json`);
  }

  projectChanges() {
    return this.project$;
  }
}
