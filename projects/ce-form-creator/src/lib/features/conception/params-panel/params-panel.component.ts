import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';
import { CreatorSelectionService } from '../../../core/services/selection.service';
import { CanvasForm } from '../../../core';
import { ProjectFormatContext } from '../../../project/ProjectFormat';
import { ProjectService } from '../../../project/project.service';

@Component({
  selector: 'ce-params-panel',
  templateUrl: './params-panel.component.html',
  styleUrls: ['./params-panel.component.scss']
})
export class ParamsPanelComponent implements OnInit {

  selection$: Observable<CanvasForm | undefined> = this.selectionService.selectionFormChanges().pipe(
    share()
  );
  projectContext$: Observable<ProjectFormatContext> = this.projectService.projectChanges();

  constructor(
    private formUpdaterService: FormRootUpdateService,
    private selectionService: CreatorSelectionService,
    private projectService: ProjectService,
  ) { }

  ngOnInit(): void { }

  onFormChanged(form: CanvasForm) {
    this.formUpdaterService.update(form);
  }

  onProjectChanged(project: ProjectFormatContext) {
    this.projectService.updateProject(project);
  }
}
