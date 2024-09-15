import { Component, Input } from '@angular/core';
import { CanvasBlockComponentType } from '../../../../core/models';
import { FormBlock, FormInstanceBase } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-canvas-block-array',
  templateUrl: './canvas-block-array.component.html',
  styleUrls: ['./canvas-block-array.component.scss']
})
export class CanvasBlockArrayComponent implements CanvasBlockComponentType {

  @Input() formInstance!: FormInstanceBase;
  @Input() formBlock!: FormBlock;

}
