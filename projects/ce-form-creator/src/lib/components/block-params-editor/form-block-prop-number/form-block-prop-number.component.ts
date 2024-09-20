import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType, FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CoreUtils } from '../../../core';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormBlockCorePropEditComponent,
    MatCheckboxModule,
    CeLayoutModule,
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
      decimal: [CoreUtils.getBlockParamsBooleanValue(this.block, "decimal", true)],
      signed: [CoreUtils.getBlockParamsBooleanValue(this.block, "signed", true)]
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      decimal: CoreUtils.getBlockParamsBooleanValue(this.block, "decimal", true),
      signed: CoreUtils.getBlockParamsBooleanValue(this.block, "signed", true),
    }, { emitEvent: false });
  }

  private onFormupdate() { 
    this.block!.params = {
      ...this.block?.params,
      decimal: this.formGroup.value.decimal,
      signed: this.formGroup.value.signed,
    };      
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };

}
