import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormArray, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatIconModule } from '@angular/material/icon';
import { SuggestionDialogComponent } from '../../dialogs';
import { filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CeLayoutModule,
    MatIconModule,
    MatDialogModule,
    FormBlockCorePropEditComponent,
  ],
  selector: 'ce-form-block-prop-text',
  templateUrl: './form-block-prop-text.component.html',
  styleUrls: ['./form-block-prop-text.component.scss']
})
export class FormBlockPropTextComponent implements FormBlockEditComponentType {

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

  addSuggestion() {
    const dialogRef = SuggestionDialogComponent.open(this.dialog, {});

    dialogRef.afterClosed().pipe(
      filter(suggestion => suggestion !== undefined)
    ).subscribe(suggestion => {
      const optionForm = this.formBuilder.control([suggestion]);
      this.suggestions.push(optionForm);
    });
  }

  deleteSuggestion(suggestionIndex: number) {
    this.suggestions.removeAt(suggestionIndex);
  }

  editSuggestion(suggestionIndex: number) {

    const optionForm = this.suggestions.at(suggestionIndex);

    const dialogRef = SuggestionDialogComponent.open(this.dialog, { existingElt: optionForm.value });

    dialogRef.afterClosed().pipe(
      filter(suggestion => suggestion !== undefined)
    ).subscribe(suggestion => {
      optionForm.patchValue(suggestion);
    });
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({
      suggestions: this.formBuilder.array(this.block!.params?.suggestions ?? [])
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      suggestions: this.formBuilder.array(this.block!.params?.suggestions ?? [])
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.params = {
      ...this.block?.params,
      suggestions: this.formGroup.value.suggestions,
    };
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };

  get suggestions() {
    return this.formGroup.controls["suggestions"] as FormArray;
  }
}
