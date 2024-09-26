import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBlockCorePropEditComponent } from '../form-block-core-prop-edit/form-block-core-prop-edit.component';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-root',
  standalone: true,
  imports: [
    CommonModule,
    FormBlockCorePropEditComponent,
  ],
  templateUrl: './form-block-prop-root.component.html',
  styleUrls: ['./form-block-prop-root.component.scss']
})
export class FormBlockPropRootComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {    
  }  

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

}
