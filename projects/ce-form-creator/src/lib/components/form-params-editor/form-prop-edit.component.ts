import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CanvasForm, CreatorFormsService, DndFormService } from '../../core';
import { CommonModule } from '@angular/common';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CePanelModule } from '../layout/panel/panel.module';
import { FormPropFieldsComponent } from './form-prop-fields/form-prop-fields.component';
import { FormRoot } from '@codeffekt/ce-core-data';
import { DndDropEvent, DndModule } from 'ngx-drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RootSelectionDialogComponent } from '../dialogs/root-selection-dialog/root-selection-dialog.component';
import { filter } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@UntilDestroy()
@Component({
  selector: 'ce-form-prop-edit',
  imports: [
    CommonModule,
    CeLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    DndModule,
    CePanelModule,
    FormPropFieldsComponent,
    RootSelectionDialogComponent,
  ],
  templateUrl: './form-prop-edit.component.html',
  styleUrls: ['./form-prop-edit.component.scss']
})
export class FormPropEditComponent implements OnInit, OnChanges {

  @Input() form!: CanvasForm;
  @Output() formChanges: EventEmitter<CanvasForm> = new EventEmitter();

  dndFormService = inject(DndFormService);

  private dialog = inject(MatDialog);
  private formsService = inject(CreatorFormsService);

  formGroup!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['form']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }

  onFormParamsChanges(root: FormRoot) {
    this.form.form.params = root.params;
    this.formChanges.emit(this.form);
  }

  onOpenSelection() {
    const roots = this.formsService.getForms();

    const dialogRef = RootSelectionDialogComponent.open(this.dialog, { roots });

    dialogRef.afterClosed().pipe(
      filter(root => root !== undefined)
    ).subscribe(root => {
      this.formGroup.patchValue({
        cat: root.id,        
      });
    });
  }

  onDropElement(event: DndDropEvent) {
    const root = event.data as FormRoot;

    if (this.form.form.cat === root.id) {
      return;
    }

    this.formGroup.patchValue({
      cat: root.id,
    });
  }

  onClear() {
    this.formGroup.patchValue({
      cat: undefined,
    });
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      id: [{ value: this.form.form.id, disabled: true }],
      cat: [this.form.form.cat],
      title: [this.form.form.title],
      version: [this.form.form.version],
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      id: this.form.form.id,
      cat: this.form.form.cat,
      title: this.form.form.title,
      version: this.form.form.version
    }, { emitEvent: false });
  }

  private onFormupdate() {
    // TODO: should call an updater service
    //this.form.id = this.formGroup.value.id;
    this.form.form.cat = this.formGroup.value.cat;
    this.form.form.title = this.formGroup.value.title;
    this.form.form.version = this.formGroup.value.version;
    this.formChanges.emit(this.form);
  }
}
