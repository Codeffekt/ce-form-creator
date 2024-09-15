import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-select',
  templateUrl: './form-block-prop-select.component.html',
  styleUrls: ['./form-block-prop-select.component.scss']
})
export class FormBlockPropSelectComponent {
  
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
