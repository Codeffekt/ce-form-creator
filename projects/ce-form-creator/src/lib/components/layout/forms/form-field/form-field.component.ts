import { Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';

export type InputFormFieldAppearance = 'flat' | 'outline';

@Component({
  selector: 'ce-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: [
    './form-field.component.scss',
    './form-field-input.scss'
  ]
})
export class FormFieldComponent implements OnInit {

  @Input() appearance: InputFormFieldAppearance = 'flat';

  @ContentChild(MatInput) input?: MatInput;

  @HostBinding('class.flat') get isFlat() {
    return this.appearance === 'flat';
  }

  @HostBinding('class.outline') get isOutline() {
    return this.appearance === 'outline';
  }

  constructor() { }

  ngOnInit(): void { }

  clear() {
    if (!this.input) {
      return;
    }
    if (this.input.ngControl?.control) {
      this.input.ngControl.control.reset('');
      return;
    }
    this.input.value = '';
  }
}
