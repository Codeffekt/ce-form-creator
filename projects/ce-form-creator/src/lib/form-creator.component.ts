import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreatorSelectionService, FormRootUpdateService } from './core';
import { CreatorActionsHistoryService } from './core/services/actions-history.service';
import { FormCreatorModeService } from './core/services/form-creator-mode.service';
import { CreatorFormsService } from './core/services/forms.service';
import { FormDragService } from './core/services/form-drag.service';
import { ProjectFormat } from './project/ProjectFormat';
import { ProjectService } from './project';

@Component({
  selector: 'ce-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
  providers: [
    CreatorSelectionService,
    CreatorFormsService,
    FormDragService,
    FormCreatorModeService,
    FormRootUpdateService,
    CreatorActionsHistoryService
  ]
})
export class CeFormCreatorComponent implements OnInit, AfterViewInit {

  mode$ = this.modeService.modeChanges();
  canvasForms$ = this.formsService.canvasFormsChanges();

  @Input() initialProject?: ProjectFormat;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ProjectFormat>();

  constructor(
    private formsService: CreatorFormsService,
    private projectService: ProjectService,
    private modeService: FormCreatorModeService,
  ) { }

  ngOnInit() {
    if (this.initialProject) {
      this.projectService.initProject(
        this.initialProject
      );
    }
  }

  ngAfterViewInit() {   
  }

  onSave(project: ProjectFormat) {
    this.save.emit(project);
  }

  onCancel() {
    this.cancel.emit();
  }
}
