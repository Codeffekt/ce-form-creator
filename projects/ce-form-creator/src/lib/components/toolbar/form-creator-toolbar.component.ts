import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select } from '@ngxs/store';
import { filter, Observable } from 'rxjs';
import { CreatorFormsService } from '../../core';
import { CreatorActionsHistoryService } from '../../core/services/actions-history.service';
import { HistorySelectors } from '../../core/store';
import { MatDialog } from '@angular/material/dialog';
import { RootCreatorDialogComponent } from '../dialogs';
import { MessagesService } from '../layout';
import { ProjectFormat, ProjectService } from '../../project';
import { RootSelectionDialogService } from '../../core/services/root-selection-dialog.service';

@UntilDestroy()
@Component({
  selector: 'ce-form-creator-toolbar',
  templateUrl: './form-creator-toolbar.component.html',
  styleUrls: ['./form-creator-toolbar.component.scss']
})
export class CeFormCreatorToolbarComponent implements OnInit {

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<ProjectFormat>();

  @Select(HistorySelectors.canUndo) canUndo$!: Observable<boolean>;
  @Select(HistorySelectors.canRedo) canRedo$!: Observable<boolean>;

  private projectService = inject(ProjectService);
  private rootSelectionDialogService = inject(RootSelectionDialogService);

  constructor(
    private dialog: MatDialog,
    private formsService: CreatorFormsService,
    private historyService: CreatorActionsHistoryService,
    private messagesService: MessagesService,
  ) { }

  ngOnInit(): void { }

  createForm() {
    const ref = this.dialog.open(
      RootCreatorDialogComponent,
      RootCreatorDialogComponent.createDialog()
    );

    ref.afterClosed()
      .subscribe(formConfig => {
        if (formConfig?.root?.length) {
          this.createNewRoot(formConfig?.root);
        }
      })
  }

  importForm() {
    this.rootSelectionDialogService.open().pipe(
      filter(roots => roots.length > 0)
    ).subscribe(roots => {
      this.formsService.addForms(roots);
    });    
  }

  undo() {
    this.historyService.undo();
  }

  redo() {
    this.historyService.redo();
  }

  loadProject(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files.length) {
      this.projectService.loadProject(files[0]);
    }
  }

  saveProject() {
    this.projectService.saveProject();
  }

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    const project = this.projectService.exportProject();
    this.save.emit(project);
  }

  private async createNewRoot(root: IndexType) {
    const existingRoot = this.formsService.getFormRoot(root);
    if (existingRoot?.id) {
      this.messagesService.showErrorMessage(`Root ${root} id already exists.`);
      return;
    }
    this.formsService.createNewForm(root);
  }
}
