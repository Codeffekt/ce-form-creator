import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormBlockPropValidatorsComponent } from '../form-block-prop-validators';

@Component({
  standalone: true,
  imports: [
    CommonModule,
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
  
  ngOnChanges(changes: SimpleChanges): void {    
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

}
