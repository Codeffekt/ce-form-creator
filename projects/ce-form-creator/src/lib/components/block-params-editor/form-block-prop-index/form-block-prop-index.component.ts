import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ce-form-block-prop-index',
  templateUrl: './form-block-prop-index.component.html',
  styleUrls: ['./form-block-prop-index.component.scss']
})
export class FormBlockPropIndexComponent implements OnInit, OnChanges, OnDestroy {
  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  private subscription?: Subscription;

  constructor(
    private formBuilder: UntypedFormBuilder,
  ) {    
  }

  ngOnInit(): void {    
  }

  ngOnChanges(changes: SimpleChanges): void {    
    if (!this.formGroup) {
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

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  private createForm() {    
    this.formGroup = this.formBuilder.group({
      root: [this.block!.root],
      required: [this.block!.required],
    });

    this.subscription = this.formGroup.valueChanges.subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      root: this.block!.root,
      required: this.block!.required,
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.root = this.formGroup.value.root;
    this.block!.required = this.formGroup.value.required;
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
