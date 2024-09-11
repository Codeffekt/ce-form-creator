import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-asset',
  templateUrl: './form-block-prop-asset.component.html',
  styleUrls: ['./form-block-prop-asset.component.scss']
})
export class FormBlockPropAssetComponent implements FormBlockEditComponentType {

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
