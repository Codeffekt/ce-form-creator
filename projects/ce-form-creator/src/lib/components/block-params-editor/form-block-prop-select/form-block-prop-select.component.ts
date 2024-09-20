import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { FormArray, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { SelectOptionDialogComponent } from '../../dialogs/select-option-dialog/select-option-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { FormBlockPropValidatorsComponent } from '../form-block-prop-validators';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    CeLayoutModule,
    FormBlockCorePropEditComponent,
    FormBlockPropValidatorsComponent,
    SelectOptionDialogComponent,
  ],
  selector: 'ce-form-block-prop-select',
  templateUrl: './form-block-prop-select.component.html',
  styleUrls: ['./form-block-prop-select.component.scss']
})
export class FormBlockPropSelectComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }

  ngOnInit(): void {
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  addOption() {
    const dialogRef = SelectOptionDialogComponent.open(this.dialog, {});

    dialogRef.afterClosed().pipe(
      filter(option => option !== undefined)
    ).subscribe(option => {
      const optionForm = this.formBuilder.group({
        label: [option.label, Validators.required],
        value: [option.value, Validators.required]
      });
      this.options.push(optionForm);
    });
  }

  deleteOption(optionIndex: number) {
    this.options.removeAt(optionIndex);
  }

  editOption(optionIndex: number) {

    const optionForm = this.options.at(optionIndex);

    const dialogRef = SelectOptionDialogComponent.open(this.dialog, { existingElt: optionForm.value });

    dialogRef.afterClosed().pipe(
      filter(option => option !== undefined)
    ).subscribe(option => {
      optionForm.patchValue(option);
    });
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({
      options: this.formBuilder.array(this.block!.params?.options ?? [])
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      options: this.formBuilder.array(this.block!.params?.options ?? [])
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.params = {
      ...this.block?.params,
      options: this.formGroup.value.options,
    };
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };

  get options() {
    return this.formGroup.controls["options"] as FormArray;
  }
}
