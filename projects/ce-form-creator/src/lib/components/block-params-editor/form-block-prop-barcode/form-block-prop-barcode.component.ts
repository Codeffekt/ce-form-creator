import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBlockEditComponentType } from '../../../core/models/FormBlockEdit';
import { FormCreatorContext } from '../../../core/models';

@Component({
  selector: 'ce-form-block-prop-barcode',
  templateUrl: './form-block-prop-barcode.component.html',
  styleUrls: ['./form-block-prop-barcode.component.scss']
})
export class FormBlockPropBarcodeComponent implements FormBlockEditComponentType {

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
