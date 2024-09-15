import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-boolean',
  templateUrl: './form-block-prop-boolean.component.html',
  styleUrls: ['./form-block-prop-boolean.component.scss']
})
export class FormBlockPropBooleanComponent {

  @Input() context!: FormCreatorContext;
  @Output() blockChanges: EventEmitter<FormCreatorContext> = new EventEmitter();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {    
  }

  ngOnInit(): void {
  }

  onCoreBlockChange(context: FormCreatorContext) {
    this.blockChanges.emit(context);
  }

}
