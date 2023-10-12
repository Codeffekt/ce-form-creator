import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CreatorFormsService } from '../../core';
import { CreatorActionsHistoryService } from '../../core/services/actions-history.service';
import { HistorySelectors } from '../../core/store';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-toolbar',
  templateUrl: './form-creator-toolbar.component.html',
  styleUrls: ['./form-creator-toolbar.component.scss']
})
export class CeFormCreatorToolbarComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<FormRoot[]>();

  @Select(HistorySelectors.canUndo) canUndo$!: Observable<boolean>;
  @Select(HistorySelectors.canRedo) canRedo$!: Observable<boolean>;

  constructor(
    private formsService: CreatorFormsService,
    private historyService: CreatorActionsHistoryService
  ) { }

  ngOnInit(): void { }

  undo() {
    this.historyService.undo();
  }

  redo() {
    this.historyService.redo();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    const forms = this.formsService.getForms();
    this.save.emit(forms);
  }
}
