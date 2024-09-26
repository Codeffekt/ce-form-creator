import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCreatorContext } from '../../../core/models';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';

@Component({
  selector: 'ce-form-block-prop-root-array',
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
  ],
  templateUrl: './form-block-prop-root-array.component.html',
  styleUrls: ['./form-block-prop-root-array.component.scss']
})
export class FormBlockPropRootArrayComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {    
  }  

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

}
