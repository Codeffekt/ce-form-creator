import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType, FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CoreUtils } from '../../../core';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormBlockCorePropEditComponent,
    MatCheckboxModule,
    CeLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  selector: 'ce-form-block-prop-number',
  templateUrl: './form-block-prop-number.component.html',
  styleUrls: ['./form-block-prop-number.component.scss']
})
export class FormBlockPropNumberComponent implements FormBlockEditComponentType {

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

  ngOnInit(): void {
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({
      unit: [this.block?.unit],
      decimal: [CoreUtils.getBlockParamsBooleanValue(this.block, "decimal", true)],
      signed: [CoreUtils.getBlockParamsBooleanValue(this.block, "signed", true)],
      type: [CoreUtils.getBlockParamsStringValue(this.block, "type")],
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      unit: this.block?.unit,
      decimal: CoreUtils.getBlockParamsBooleanValue(this.block, "decimal", true),
      signed: CoreUtils.getBlockParamsBooleanValue(this.block, "signed", true),
      type: CoreUtils.getBlockParamsStringValue(this.block, "type"),
    }, { emitEvent: false });
  }

  private onFormupdate() { 
    this.block!.unit = this.formGroup.value.unit;
    this.block!.params = {
      ...this.block?.params,
      decimal: this.formGroup.value.decimal,
      signed: this.formGroup.value.signed,
      type: this.formGroup.value.type,
    };      
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };

}
