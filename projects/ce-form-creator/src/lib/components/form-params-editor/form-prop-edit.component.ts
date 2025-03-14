import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CanvasForm } from '../../core';
import { CommonModule } from '@angular/common';
import { CeLayoutModule } from '@codeffekt/ce-core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CePanelModule } from '../layout/panel/panel.module';
import { FormPropFieldsComponent } from './form-prop-fields/form-prop-fields.component';
import { FormRoot } from '@codeffekt/ce-core-data';

@UntilDestroy()
@Component({
    selector: 'ce-form-prop-edit',
    imports: [
        CommonModule,
        CeLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        CePanelModule,
        FormPropFieldsComponent,
    ],
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

  onFormParamsChanges(root: FormRoot) {
    this.form.form.params = root.params;
    this.formChanges.emit(this.form);
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
