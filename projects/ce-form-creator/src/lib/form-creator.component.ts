import { AfterViewInit, Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { CreatorSelectionService, FormRootUpdateService, FormsCanvasService } from './core';
import { CreatorActionsHistoryService } from './core/services/actions-history.service';
import { FormCreatorModeService } from './core/services/form-creator-mode.service';
import { CreatorFormsService } from './core/services/forms.service';
import { FormDragService } from './core/services/form-drag.service';
import { SingleRowAutoLayout, ZoomToFit } from '@codeffekt/ce-canvas-nodes';

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
  forms$ = this.formsService.formsChanges();

  @Input() initialForms?: FormRoot[];
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<FormRoot[]>();

  private canvasService = inject(FormsCanvasService);

  constructor(
    private formsService: CreatorFormsService,
    private modeService: FormCreatorModeService,
  ) { }

  ngOnInit() {
    if (this.initialForms) {
      this.formsService.init(this.initialForms);
    }
  }

  ngAfterViewInit() {
    this.canvasService.getCanvas().applyAutoLayout(new SingleRowAutoLayout({ hSpacing: 100 }));
    this.canvasService.getCanvas().applyAutoLayout(new ZoomToFit());
  }

  onSave(forms: FormRoot[]) {
    this.save.emit(forms);
  }

  onCancel() {
    this.cancel.emit();
  }
}
