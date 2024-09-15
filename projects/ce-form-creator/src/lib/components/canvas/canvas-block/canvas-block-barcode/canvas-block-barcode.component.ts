import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-barcode',
  templateUrl: './canvas-block-barcode.component.html',
  styleUrls: ['./canvas-block-barcode.component.scss']
})
export class CanvasBlockBarcodeComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
