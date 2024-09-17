import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CanvasForm } from '../../core';

@UntilDestroy()
@Component({
  selector: 'ce-form-prop-edit',
  templateUrl: './form-prop-edit.component.html',
  styleUrls: ['./form-prop-edit.component.scss']
})
export class FormPropEditComponent implements OnInit, OnChanges {

  @Input() form!: CanvasForm;
  @Output() formChanges: EventEmitter<CanvasForm> = new EventEmitter();

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

  private createForm() {
    this.formGroup = this.formBuilder.group({
      id: [{ value: this.form.form.id, disabled: true }],
      type: [this.form.form.type],
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
      type: this.form.form.type,
      title: this.form.form.title,
      version: this.form.form.version
    }, { emitEvent: false });
  }

  private onFormupdate() {
    // TODO: should call an updater service
    //this.form.id = this.formGroup.value.id;
    this.form.form.type = this.formGroup.value.type;
    this.form.form.title = this.formGroup.value.title;
    this.form.form.version = this.formGroup.value.version;
    this.formChanges.emit(this.form);
  }
}
