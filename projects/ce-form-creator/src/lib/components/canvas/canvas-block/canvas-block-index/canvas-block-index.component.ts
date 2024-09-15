import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-index',
  templateUrl: './canvas-block-index.component.html',
  styleUrls: ['./canvas-block-index.component.scss']
})
export class CanvasBlockIndexComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
