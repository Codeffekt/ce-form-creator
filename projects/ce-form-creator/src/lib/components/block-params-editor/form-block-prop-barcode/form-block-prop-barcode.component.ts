import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreUtils } from '../../../core';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CeLayoutModule,
    MatCheckboxModule,
    FormBlockCorePropEditComponent,
  ],
  selector: 'ce-form-block-prop-barcode',
  templateUrl: './form-block-prop-barcode.component.html',
  styleUrls: ['./form-block-prop-barcode.component.scss']
})
export class FormBlockPropBarcodeComponent implements FormBlockEditComponentType, OnChanges {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }  

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({
      editType: [CoreUtils.getBlockParamsBooleanValue(this.block, "editType", false)],
      displayInline: [CoreUtils.getBlockParamsBooleanValue(this.block, "displayInline", false)]
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      editType: CoreUtils.getBlockParamsBooleanValue(this.block, "editType", false),
      displayInline: CoreUtils.getBlockParamsBooleanValue(this.block, "displayInline", false),
    }, { emitEvent: false });
  }

  private onFormupdate() { 
    this.block!.params = {
      ...this.block?.params,
      editType: this.formGroup.value.editType,
      displayInline: this.formGroup.value.displayInline,
    };      
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
