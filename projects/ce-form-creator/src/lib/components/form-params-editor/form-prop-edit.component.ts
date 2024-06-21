import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FormRoot } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ce-form-prop-edit',
  templateUrl: './form-prop-edit.component.html',
  styleUrls: ['./form-prop-edit.component.scss']
})
export class FormPropEditComponent implements OnInit, OnChanges {

  @Input() form!: FormRoot;
  @Output() formChanges: EventEmitter<FormRoot> = new EventEmitter();

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
      id: [{ value: this.form.id, disabled: true }],
      type: [this.form.type],
      title: [this.form.title],
      version: [this.form.version],
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      id: this.form.id,
      type: this.form.type,
      title: this.form.title,
      version: this.form.version
    }, { emitEvent: false });
  }

  private onFormupdate() {
    // TODO: should call an updater service
    //this.form.id = this.formGroup.value.id;
    this.form.type = this.formGroup.value.type;
    this.form.title = this.formGroup.value.title;
    this.form.version = this.formGroup.value.version;
    this.formChanges.emit(this.form);
  }
}
