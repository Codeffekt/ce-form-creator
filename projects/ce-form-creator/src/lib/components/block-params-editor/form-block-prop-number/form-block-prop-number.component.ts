import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType, FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-number',
  templateUrl: './form-block-prop-number.component.html',
  styleUrls: ['./form-block-prop-number.component.scss']
})
export class FormBlockPropNumberComponent implements FormBlockEditComponentType {

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
