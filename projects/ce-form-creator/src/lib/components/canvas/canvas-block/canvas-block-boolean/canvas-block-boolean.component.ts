import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-boolean',
  templateUrl: './canvas-block-boolean.component.html',
  styleUrls: ['./canvas-block-boolean.component.scss']
})
export class CanvasBlockBooleanComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
