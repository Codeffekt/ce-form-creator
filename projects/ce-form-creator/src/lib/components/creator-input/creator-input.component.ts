import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ce-creator-input',
  standalone: true,
  imports: [
    CommonModule,   
    A11yModule,
  ],
  templateUrl: './creator-input.component.html',
  styleUrls: ['./creator-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: CreatorInputComponent,
  }]
})
export class CreatorInputComponent implements ControlValueAccessor {  

  onChange = (value?: string) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  value?: string = undefined;

  isEditMode = false;

  updateValue(newValue: string) {
    this.markAsTouched();
    if (!this.disabled && (newValue !== this.value)) {
      this.value = newValue;
      this.onChange(this.value);
    }
  }  

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }
}
