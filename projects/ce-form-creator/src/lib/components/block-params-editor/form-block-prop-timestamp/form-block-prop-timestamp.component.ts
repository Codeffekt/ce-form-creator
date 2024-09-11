import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-timestamp',
  templateUrl: './form-block-prop-timestamp.component.html',
  styleUrls: ['./form-block-prop-timestamp.component.scss']
})
export class FormBlockPropTimestampComponent implements FormBlockEditComponentType {

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
