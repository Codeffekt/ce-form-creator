import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectFormatContext } from '../../../project/ProjectFormat';
import { ProjectService } from '../../../project';

@Component({
  selector: 'ce-project-context',
  templateUrl: './project-context.component.html',
  styleUrls: ['./project-context.component.scss']
})
export class ProjectContextComponent {

  private projectService = inject(ProjectService);

  project$: Observable<ProjectFormatContext> = this.projectService.projectChanges();

  isProjectNameEdition = false;


  setProjectNameEdition() {
    this.isProjectNameEdition = true;
  }

  updateProjectName(project: ProjectFormatContext, name: string) {
    if(!name.length || project.name === name) {
      return;
    }
    this.isProjectNameEdition = false;
    this.projectService.updateProjectName(name);
  }
}
