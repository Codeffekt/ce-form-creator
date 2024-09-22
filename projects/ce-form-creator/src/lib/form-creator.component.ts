import { AfterViewInit, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { CreatorSelectionService, FormRootUpdateService, FormsCanvasService } from './core';
import { CreatorActionsHistoryService } from './core/services/actions-history.service';
import { FormCreatorModeService } from './core/services/form-creator-mode.service';
import { CreatorFormsService } from './core/services/forms.service';
import { FormDragService } from './core/services/form-drag.service';

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

  @Input() initialForms?: FormRoot[];
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<FormRoot[]>();

  constructor(
    private formsService: CreatorFormsService,
    private modeService: FormCreatorModeService,
  ) { }

  ngOnInit() {
    if (this.initialForms) {
      this.formsService.init(
        this.initialForms
      );
    }
  }

  ngAfterViewInit() {   
  }

  onSave(forms: FormRoot[]) {
    this.save.emit(forms);
  }

  onCancel() {
    this.cancel.emit();
  }
}
