import { Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { FormBlock, FormRoot } from '@codeffekt/ce-core-data';
import { CeFormTreeInputSanitizer } from './form-tree-input.sanitizer';
import { FormTreeInputType } from './form-tree-input.types';
import { FormTreeValidatorBuilder } from './validators/form-tree-input-validator.builder';

@Component({
  selector: 'ce-form-tree-input',
  templateUrl: './form-tree-input.component.html',
  styleUrls: ['./form-tree-input.component.scss'],
  providers: [
    CeFormTreeInputSanitizer
  ]
})
export class FormTreeInputComponent implements OnChanges {

  @Input() value?: string;
  @Input() type!: FormTreeInputType;
  @Input() block?: FormBlock;
  @Input() form!: FormRoot;
  @Output() valueChanges = new EventEmitter<string>();
  @Output() discardChanges = new EventEmitter();

  formControl!: UntypedFormControl;

  constructor(private injector: Injector) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      if (!this.formControl) {
        this.initFormControl();
      }
      this.updateFormControl();
    }
  }

  onSubmit() {
    if (this.formControl.invalid) {
      this.discardChanges.emit();
    } else {
      this.valueChanges.emit(this.formControl.value);
    }
  }

  onDiscard() {
    this.discardChanges.emit();
  }

  private initFormControl() {
    const validator = new FormTreeValidatorBuilder().withContext({ injector: this.injector, block: this.block, form: this.form, type: this.type }).build();
    this.formControl = new UntypedFormControl(this.value, { asyncValidators: validator });
  }

  private updateFormControl() {
    this.formControl.patchValue(this.value);
    this.formControl.valueChanges.subscribe((value: string) => {
      const sanitizedValue = CeFormTreeInputSanitizer.sanitize(value, this.type);
      this.formControl.patchValue(sanitizedValue, { emitEvent: false });
    });
  }
}
