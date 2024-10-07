import { Component, ElementRef, forwardRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ce-creator-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    forwardRef(() => CreatorInputComponent),
    A11yModule,
  ],
  templateUrl: './creator-input.component.html',
  styleUrls: ['./creator-input.component.scss'],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
  providers: [{
    provide: MatFormFieldControl,
    useExisting: CreatorInputComponent
  }]
})
export class CreatorInputComponent implements
  ControlValueAccessor,
  MatFormFieldControl<string>,
  OnDestroy {

  static nextId = 0;

  onChange = (value: string | null) => { };
  onTouched = () => { };

  focused = false;
  touched = false;

  _value: string | null = null;

  isEditMode = false;
  invalid = false;

  stateChanges = new Subject<void>;
  controlType = 'ce-creator-input';
  readonly id = `ce-creator-input-${CreatorInputComponent.nextId++}`;

  @Input('aria-describedby') userAriaDescribedBy!: string;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder!: string;

  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(v: string | null) {
    this._value = v;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: BooleanInput) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  get empty() {
    return !this._value || this._value === "";
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  get errorState(): boolean {
    return this.invalid && this.touched;
  }

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

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

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  setDescribedByIds(ids: string[]) {    
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {      
    }
  }
}
