import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
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
    CeLayoutModule,
    MatCheckboxModule,
    FormBlockCorePropEditComponent,   
  ],
  selector: 'ce-form-block-prop-coordinates',
  templateUrl: './form-block-prop-coordinates.component.html',
  styleUrls: ['./form-block-prop-coordinates.component.scss']
})
export class FormBlockPropCoordinatesComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  formGroup!: UntypedFormGroup;

  private formBuilder = inject(UntypedFormBuilder);

  constructor() { }
  
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
      useConverter: [CoreUtils.getBlockParamsBooleanValue(this.block, "useConverter", false)],    
      defaultValue: [this.block?.defaultValue],
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({
      useConverter: CoreUtils.getBlockParamsBooleanValue(this.block, "useConverter", false),      
      defaultValue: this.block?.defaultValue,
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.defaultValue = this.formGroup.value.defaultValue;
    this.block!.params = {
      ...this.block?.params,
      useConverter: this.formGroup.value.useConverter,
    };       
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
