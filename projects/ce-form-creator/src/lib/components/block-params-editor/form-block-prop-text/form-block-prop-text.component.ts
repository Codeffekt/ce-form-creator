import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';

@Component({
  selector: 'ce-form-block-prop-text',
  templateUrl: './form-block-prop-text.component.html',
  styleUrls: ['./form-block-prop-text.component.scss']
})
export class FormBlockPropTextComponent implements FormBlockEditComponentType {

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
