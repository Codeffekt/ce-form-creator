import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormCreatorContext } from '../../../core/models';
import { FormRootUpdateService } from '../../../core/services/form-root-update.service';

@Component({
  selector: 'ce-form-block-core-prop-edit',
  templateUrl: './form-block-core-prop-edit.component.html',
  styleUrls: ['./form-block-core-prop-edit.component.scss']
})
export class FormBlockCorePropEditComponent implements OnInit, OnChanges, OnDestroy {

  @Input() context!: FormCreatorContext;

  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: FormGroup;

  private subscription?: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private formUpdateService: FormRootUpdateService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['context']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createForm() {
    this.formGroup = this.formBuilder.group({
      field: [{ value: this.block!.field, disabled: true }],
      label: [this.block!.label],
      value: [this.block!.value],
      readonly: [this.block!.readonly],
      disabled: [this.block!.disabled]
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      field: this.block!.field,
      label: this.block!.label,
      value: this.block!.value,
      readonly: this.block!.readonly,
      disabled: this.block!.disabled
    }, { emitEvent: false });
  }

  private onFormupdate() {
    // TODO: should call an updater service
    this.block!.field = this.formGroup.value.field;
    this.block!.label = this.formGroup.value.label;
    this.block!.value = this.formGroup.value.value;
    this.block!.readonly = this.formGroup.value.readonly;
    this.block!.disabled = this.formGroup.value.disabled;
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
