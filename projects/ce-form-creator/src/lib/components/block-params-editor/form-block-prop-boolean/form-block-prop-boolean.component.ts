import { Component, EventEmitter, inject, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormBlockPropValidatorsComponent } from '../form-block-prop-validators';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CeLayoutModule } from '@codeffekt/ce-core';

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CeLayoutModule,
    MatCheckboxModule,
    FormBlockCorePropEditComponent,    
    FormBlockPropValidatorsComponent,
  ],
  selector: 'ce-form-block-prop-boolean',
  templateUrl: './form-block-prop-boolean.component.html',
  styleUrls: ['./form-block-prop-boolean.component.scss']
})
export class FormBlockPropBooleanComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();
  
  formGroup!: UntypedFormGroup;

  private formBuilder = inject(UntypedFormBuilder);

  ngOnChanges(changes: SimpleChanges): void {    
    if (changes['context']?.firstChange) {
      this.createForm();
    } else {
      this.rebuildForm();
    }
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

  private createForm() {

    this.formGroup = this.formBuilder.group({      
      defaultValue: [this.block?.defaultValue],
    });

    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormupdate());
  }

  private rebuildForm() {
    this.formGroup.patchValue({      
      defaultValue: this.block?.defaultValue,
    }, { emitEvent: false });
  }

  private onFormupdate() {
    this.block!.defaultValue = this.formGroup.value.defaultValue;    
    this.blockChanges.emit(this.context);
  }

  private get block() { return this.context.block };
}
