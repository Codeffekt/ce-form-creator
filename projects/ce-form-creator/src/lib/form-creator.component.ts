import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { CreatorSelectionService, FormRootUpdateService } from './core';
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
export class CeFormCreatorComponent implements OnInit {

  mode$ = this.modeService.modeChanges();
  forms$ = this.formsService.formsChanges();

  @Input() initialForms?: FormRoot[];
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<FormRoot[]>();

  constructor(
    private formsService: CreatorFormsService,
    private modeService: FormCreatorModeService,
  ) { }

  ngOnInit() {
    if (this.initialForms) {
      this.formsService.init(this.initialForms);
    }
  }

  onSave(forms: FormRoot[]) {
    this.save.emit(forms);
  }

  onCancel() {
    this.cancel.emit();
  }
}
