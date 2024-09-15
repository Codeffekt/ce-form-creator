import { Component, Input } from '@angular/core';
import { FormInstanceBase, FormBlock } from '@codeffekt/ce-core-data';
import { CanvasBlockComponentType } from '../../../../core';

@Component({
  selector: 'ce-canvas-block-coordinates',
  templateUrl: './canvas-block-coordinates.component.html',
  styleUrls: ['./canvas-block-coordinates.component.scss']
})
export class CanvasBlockCoordinatesComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
