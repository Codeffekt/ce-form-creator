import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-coordinates',
  templateUrl: './form-block-prop-coordinates.component.html',
  styleUrls: ['./form-block-prop-coordinates.component.scss']
})
export class FormBlockPropCoordinatesComponent {

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
