import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormRoot, IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Select } from '@ngxs/store';
import { filter, Observable } from 'rxjs';
import { CreatorFormsService, FormsLibraryService } from '../../core';
import { CreatorActionsHistoryService } from '../../core/services/actions-history.service';
import { HistorySelectors } from '../../core/store';
import { MatDialog } from '@angular/material/dialog';
import { RootCreatorDialogComponent, RootSelectionDialogComponent } from '../dialogs';
import { MessagesService } from '../layout';
import { ProjectService } from '../../project';

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

  private projectService = inject(ProjectService);

  constructor(
    private dialog: MatDialog,
    private formsService: CreatorFormsService,
    private historyService: CreatorActionsHistoryService,
    private formsLibrary: FormsLibraryService,
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
    const roots = this.formsLibrary.getForms();

    const dialogRef = RootSelectionDialogComponent.open(this.dialog, { roots });

    dialogRef.afterClosed().pipe(
      filter(root => root !== undefined)
    ).subscribe(root => {
      const newForms = this.formsLibrary.getFormWithDeps(root);
      this.formsService.addForms(newForms);
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
    const forms = this.formsService.getForms();
    this.save.emit(forms);
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
